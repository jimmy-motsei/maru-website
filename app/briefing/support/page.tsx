"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  // Contact
  full_name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  phone: z.string().optional(),

  // Ticket
  asset_type: z.string().min(1, "Asset type required"),
  priority: z.string().min(1, "Priority required"),
  subject: z.string().min(1, "Subject required"),
  description: z.string().min(10, "Please provide more detail"),
  
  // Tech
  environment: z.string().optional(),
  url: z.string().url("Invalid URL").optional().or(z.literal("")),
  attachments: z.string().optional(),

  // SLA & Terms
  has_sla: z.enum(["yes", "no"]),
  accept_terms: z.boolean().refine(val => val === true, "You must accept the terms"),
});

type FormData = z.infer<typeof schema>;

export default function SupportTicketPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const hasSla = watch("has_sla");

  // --- Dynamic Pricing Logic ---
  const priority = watch("priority");
  const assetType = watch("asset_type");

  const [estimateData, setEstimateData] = useState<{ hours: number; rate: number; subtotal: number; deposit: number } | null>(null);

  // Helper to determine business hours (SAST) - simplistic client-side check
  const isBusinessHours = () => {
     const now = new Date();
     // UTC+2 check approx
     const hour = (now.getUTCHours() + 2) % 24;
     const day = now.getUTCDay();
     return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
  };

  // Recalculate whenever inputs change
  if (priority && assetType && !estimateData) {
      // Trigger initial calc or effect? 
      // Better: use an effect.
  }

  // Calculate effect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateEstimate = () => {
    if (!priority || !assetType) return null;

    let base = 1.0;
    if (priority.includes("critical") || priority === "urgent") base = 2.0;
    else if (priority.includes("high")) base = 1.5;
    else if (priority.includes("low")) base = 0.5;

    let bump = 0.0; // was 0.25 in original
    // Aligning with original logic:
    // if (/(assistant|chatbot|whatsapp|voice|ivr)/.test(a)) bump = 0.5;
    // else if (/website/.test(a)) bump = 0.25;
    if (["ai-solution"].includes(assetType)) bump = 0.5;
    else if (["website"].includes(assetType)) bump = 0.25;
    else bump = 0.25;

    const hours = Math.max(0.5, Math.min(4, base + bump));
    const rate = isBusinessHours() ? 275 : 350;
    const deposit = hasSla === "no" ? 375 : 0;
    
    return {
        hours: Number(hours.toFixed(2)),
        rate,
        subtotal: hours * rate,
        deposit
    };
  };

  const currentEstimate = calculateEstimate();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const estimate = calculateEstimate();
      if (!estimate) throw new Error("Could not calculate estimate");

      const response = await fetch("/api/support/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           customer: {
             name: data.full_name,
             email: data.email,
             company: data.company,
             phone: data.phone
           },
           ticket: {
             subject: data.subject,
             description: data.description,
             priority: data.priority,
             asset_type: data.asset_type,
             environment: data.environment,
             url: data.url
           },
           estimate: {
             ...estimate,
             has_sla: data.has_sla === "yes"
           }
        }),
      });

      const json = await response.json();
      if (!response.ok || !json.ok) throw new Error(json.error || "Failed to create ticket");
      
      setIsSuccess(true);
      window.scrollTo(0, 0);

      // If payment URL exists/needed, we could redirect or show it.
      if (json.paymentUrl) {
         // handle payment
         console.log("Payment URL:", json.paymentUrl);
         // For now, logic in isSuccess view can handle showing it if we store it
      }

    } catch (error: any) {
      console.error(error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDepositText = () => {
    if (hasSla === "yes") return "No deposit required (SLA Active)";
    if (hasSla === "no") return "R375.00 Deposit required (Covers 1st hour due to no SLA)";
    return "";
  };

  if (isSuccess) {
    return (
      <main className="relative min-h-screen bg-white text-zinc-900 flex items-center justify-center">
        <AtmosphericBackground variant="subtle" theme="light" />
        <div className="relative z-10 max-w-lg w-full text-center p-8 bg-white border border-zinc-200 shadow-lg rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-[#a1a1aa]">Ticket Logged</h2>
          <p className="text-zinc-600 mb-8">
            Your support request has been received. Our team has been notified.
            {hasSla === "no" && (
                <span className="block mt-4 text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    An invoice/payment link for the deposit will be sent to your email shortly.
                </span>
            )}
          </p>
          <Button href="/briefing" variant="outline" className="border-zinc-300 text-zinc-900 hover:bg-zinc-50">Back to Briefing Center</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 pb-12 md:pb-24">
      <AtmosphericBackground variant="default" theme="light" />
      
      <div className="container relative z-10 mx-auto px-6 pt-12 md:pt-20">
        <Link 
          href="/briefing" 
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Briefings
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 leading-tight">Support Ticket</h1>
            <p className="text-zinc-600 text-lg font-light leading-relaxed max-w-2xl">
              Log an issue, request a change, or ask a question. Please be as descriptive as possible.
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Contact */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
               <h2 className="text-xl font-bold mb-6 text-zinc-900 flex items-center">
                 <span className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center text-sm mr-3">01</span>
                 Contact Info
               </h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Full Name *</Label>
                    <Input variant="boxed" {...register("full_name")} />
                    {errors.full_name && <p className="text-red-500 text-xs mt-2">{errors.full_name.message}</p>}
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Email *</Label>
                    <Input variant="boxed" {...register("email")} type="email" />
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Company</Label>
                    <Input variant="boxed" {...register("company")} />
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Phone</Label>
                    <Input variant="boxed" {...register("phone")} />
                  </div>
               </div>
            </section>

            {/* Ticket Details */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-6 text-zinc-900 flex items-center">
                 <span className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center text-sm mr-3">02</span>
                 Issue Details
              </h2>
              <div className="space-y-8">
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-zinc-900 mb-2 block">Asset Type *</Label>
                      <Select variant="boxed" {...register("asset_type")}>
                        <option value="">Select...</option>
                        <option value="website">Website</option>
                        <option value="ai-solution">AI Solution</option>
                        <option value="hosting">Hosting</option>
                        <option value="other">Other</option>
                      </Select>
                      {errors.asset_type && <p className="text-red-500 text-xs mt-2">{errors.asset_type.message}</p>}
                    </div>
                    <div>
                      <Label className="text-zinc-900 mb-2 block">Priority *</Label>
                      <Select variant="boxed" {...register("priority")}>
                        <option value="">Select...</option>
                        <option value="low">Low - General Inquiry</option>
                        <option value="medium">Medium - Minor Issue</option>
                        <option value="high">High - Service Disruption</option>
                        <option value="urgent">Urgent - Critical</option>
                      </Select>
                      {errors.priority && <p className="text-red-500 text-xs mt-2">{errors.priority.message}</p>}
                    </div>
                 </div>
                 
                 <div>
                    <Label className="text-zinc-900 mb-2 block">Subject *</Label>
                    <Input variant="boxed" {...register("subject")} placeholder="Brief summary of issue" />
                    {errors.subject && <p className="text-red-500 text-xs mt-2">{errors.subject.message}</p>}
                 </div>
                 <div>
                    <Label className="text-zinc-900 mb-2 block">Description *</Label>
                    <Textarea variant="boxed" {...register("description")} placeholder="Steps to reproduce, error messages, etc." className="min-h-[200px]" />
                    {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description.message}</p>}
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-zinc-900 mb-2 block">Environment</Label>
                       <Select variant="boxed" {...register("environment")}>
                        <option value="">Select...</option>
                        <option value="production">Production</option>
                        <option value="staging">Staging</option>
                        <option value="dev">Development</option>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-zinc-900 mb-2 block">URL</Label>
                      <Input variant="boxed" {...register("url")} placeholder="https://" />
                      {errors.url && <p className="text-red-500 text-xs mt-2">{errors.url.message}</p>}
                    </div>
                 </div>
                 <div>
                    <Label className="text-zinc-900 mb-2 block">Attachments / Links</Label>
                    <Input variant="boxed" {...register("attachments")} placeholder="Google Drive link or Dropbox link..." />
                 </div>
              </div>
            </section>

             {/* SLA & Terms */}
             <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
                <h2 className="text-xl font-bold mb-6 text-zinc-900 flex items-center">
                   <span className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center text-sm mr-3">03</span>
                   SLA & Rates
                </h2>
                
                <div className="mb-8">
                   <Label className="text-zinc-900 mb-4 block">Do you have an active Support SLA?</Label>
                   <div className="flex gap-6">
                      <label className="flex items-center space-x-3 cursor-pointer p-4 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors w-full md:w-auto">
                         <input type="radio" value="yes" {...register("has_sla")} className="h-5 w-5 border-zinc-300 text-zinc-900" />
                         <span className="text-zinc-700 font-medium">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer p-4 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors w-full md:w-auto">
                         <input type="radio" value="no" {...register("has_sla")} className="h-5 w-5 border-zinc-300 text-zinc-900" />
                         <span className="text-zinc-700 font-medium">No</span>
                      </label>
                   </div>
                   {errors.has_sla && <p className="text-red-500 text-xs mt-2">{errors.has_sla.message}</p>}
                </div>

                {hasSla === "no" && (
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-8">
                    <p className="text-amber-800 text-sm leading-relaxed font-medium">
                      <strong className="block mb-2 uppercase tracking-wide text-amber-900">Standard Rates Apply</strong>
                      R275/hr (Business Hours) | R350/hr (After Hours). <br/>
                      A <span className="bg-amber-100 px-1 rounded font-bold">R375.00 deposit</span> is required for the first hour if no SLA is in place.
                    </p>
                  </div>
                )}

                 <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl">
                   <label className="flex items-start space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("accept_terms")} 
                        className="mt-1 appearance-none h-5 w-5 border border-zinc-300 rounded bg-white checked:bg-zinc-900 transition-colors"
                      />
                      <div className="text-sm text-zinc-600">
                         I accept the Support Terms & Conditions. I understand the rates and deposit policy if applicable.
                      </div>
                   </label>
                   {errors.accept_terms && <p className="text-red-500 text-xs mt-2 pl-8">{errors.accept_terms.message}</p>}
                </div>

             </section>

             {/* Estimate Summary */}
             <div className="bg-white border border-zinc-200 shadow-md p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                   <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Estimated Effort</h3>
                   <div className="text-3xl font-bold text-zinc-900">{currentEstimate?.hours || 0} Hours</div>
                </div>
                <div className="w-px h-12 bg-zinc-200 hidden md:block"></div>
                <div className="text-center md:text-left">
                   <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Rate</h3>
                   <div className="text-3xl font-bold text-zinc-900">R{currentEstimate?.rate || 0}/hr</div>
                </div>
                <div className="w-px h-12 bg-zinc-200 hidden md:block"></div>
                <div className="text-center md:text-left">
                   <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Est. Total</h3>
                   <div className="text-3xl font-bold text-[#3DD6D0]">R{currentEstimate?.subtotal.toFixed(2) || "0.00"}</div>
                </div>
                {hasSla === "no" && (
                  <>
                    <div className="w-px h-12 bg-zinc-200 hidden md:block"></div>
                    <div className="text-center md:text-left">
                      <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Deposit Due</h3>
                      <div className="text-3xl font-bold text-amber-500">R{currentEstimate?.deposit.toFixed(2) || "0.00"}</div>
                    </div>
                  </>
                )}
             </div>

            <div className="flex justify-end pt-8">
              <Button type="submit" disabled={isSubmitting} className="min-w-[200px] bg-zinc-900 text-white hover:bg-zinc-800 rounded-full font-bold uppercase tracking-wider">
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
