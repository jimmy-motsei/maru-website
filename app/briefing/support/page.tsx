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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Support Ticket",
          data: data,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");
      
      setIsSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple estimate logic based on priority (just illustrative)
  const priority = watch("priority");
  
  const getDepositText = () => {
    if (hasSla === "yes") return "No deposit required (SLA Active)";
    if (hasSla === "no") return "R375.00 Deposit required (Covers 1st hour due to no SLA)";
    return "";
  };

  if (isSuccess) {
    return (
      <main className="relative min-h-screen bg-[#0a192f] text-white flex items-center justify-center">
        <AtmosphericBackground variant="subtle" />
        <div className="relative z-10 max-w-lg w-full text-center p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-[#a1a1aa]">Ticket Logged</h2>
          <p className="text-zinc-400 mb-8">
            Your support request has been received. Ticket ID: TKT-{Math.floor(Math.random() * 10000)}
          </p>
           {hasSla === "no" && (
             <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg mb-8 text-sm text-yellow-500">
               Please check your email for the deposit invoice to initiate work.
             </div>
           )}
          <Button href="/briefing" variant="outline">Back to Briefing Center</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0a192f] text-white pb-12 md:pb-24">
      <AtmosphericBackground variant="default" />
      
      <div className="container relative z-10 mx-auto px-6 pt-12 md:pt-20">
        <Link 
          href="/briefing" 
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Briefings
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Ticket</h1>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Log an issue, request a change, or ask a question. Please be as descriptive as possible.
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            
            {/* Contact */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
               <h2 className="text-xl font-bold mb-6 text-white">Contact Info</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label>Full Name *</Label>
                    <Input {...register("full_name")} />
                    {errors.full_name && <p className="text-red-500 text-xs mt-2">{errors.full_name.message}</p>}
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input {...register("email")} type="email" />
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input {...register("company")} />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input {...register("phone")} />
                  </div>
               </div>
            </section>

            {/* Ticket Details */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-bold mb-6 text-white">Issue Details</h2>
              <div className="space-y-8">
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label>Asset Type *</Label>
                      <Select {...register("asset_type")}>
                        <option value="">Select...</option>
                        <option value="website">Website</option>
                        <option value="ai-solution">AI Solution</option>
                        <option value="hosting">Hosting</option>
                        <option value="other">Other</option>
                      </Select>
                      {errors.asset_type && <p className="text-red-500 text-xs mt-2">{errors.asset_type.message}</p>}
                    </div>
                    <div>
                      <Label>Priority *</Label>
                      <Select {...register("priority")}>
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
                    <Label>Subject *</Label>
                    <Input {...register("subject")} placeholder="Brief summary of issue" />
                    {errors.subject && <p className="text-red-500 text-xs mt-2">{errors.subject.message}</p>}
                 </div>
                 <div>
                    <Label>Description *</Label>
                    <Textarea {...register("description")} placeholder="Steps to reproduce, error messages, etc." className="min-h-[200px]" />
                    {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description.message}</p>}
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label>Environment</Label>
                       <Select {...register("environment")}>
                        <option value="">Select...</option>
                        <option value="production">Production</option>
                        <option value="staging">Staging</option>
                        <option value="dev">Development</option>
                      </Select>
                    </div>
                    <div>
                      <Label>URL</Label>
                      <Input {...register("url")} placeholder="https://" />
                      {errors.url && <p className="text-red-500 text-xs mt-2">{errors.url.message}</p>}
                    </div>
                 </div>
                 <div>
                    <Label>Attachments / Links</Label>
                    <Input {...register("attachments")} placeholder="Google Drive link or Dropbox link..." />
                 </div>
              </div>
            </section>

             {/* SLA & Terms */}
             <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
                <h2 className="text-xl font-bold mb-6 text-white">SLA & Rates</h2>
                
                <div className="mb-8">
                   <Label className="mb-2 block">Do you have an active Support SLA?</Label>
                   <div className="flex gap-6">
                      <label className="flex items-center space-x-3 cursor-pointer">
                         <input type="radio" value="yes" {...register("has_sla")} className="h-5 w-5 bg-transparent border border-white/30" />
                         <span className="text-zinc-300">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                         <input type="radio" value="no" {...register("has_sla")} className="h-5 w-5 bg-transparent border border-white/30" />
                         <span className="text-zinc-300">No</span>
                      </label>
                   </div>
                   {errors.has_sla && <p className="text-red-500 text-xs mt-2">{errors.has_sla.message}</p>}
                </div>

                {hasSla === "no" && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl mb-8">
                    <p className="text-yellow-500 text-sm leading-relaxed font-medium">
                      <strong className="block mb-2 uppercase tracking-wide">Standard Rates Apply</strong>
                      R275/hr (Business Hours) | R350/hr (After Hours). <br/>
                      A <span className="text-white bg-yellow-600/50 px-1 rounded">R375.00 deposit</span> is required for the first hour if no SLA is in place.
                    </p>
                  </div>
                )}

                 <div className="bg-zinc-900/50 p-6 rounded-xl">
                   <label className="flex items-start space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        {...register("accept_terms")} 
                        className="mt-1 appearance-none h-5 w-5 border border-zinc-500 rounded bg-transparent checked:bg-white transition-colors"
                      />
                      <div className="text-sm text-zinc-400">
                         I accept the Support Terms & Conditions. I understand the rates and deposit policy if applicable.
                      </div>
                   </label>
                   {errors.accept_terms && <p className="text-red-500 text-xs mt-2 pl-8">{errors.accept_terms.message}</p>}
                </div>

             </section>

            <div className="flex justify-end pt-8">
              <Button type="submit" disabled={isSubmitting} className="min-w-[200px]">
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
