"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { submitBrief } from "@/app/actions/submitBrief";

// --- Schema Definition ---
const schema = z.object({
  // 0) Current Systems
  current_systems: z.array(z.string()).optional(),
  current_pain_points: z.string().min(1, "Please duplicate your pain points"),

  // Client & Project
  client_company: z.string().min(1, "Company name is required"),
  client_contact_name: z.string().optional(),
  client_email: z.string().email("Invalid email address"),
  client_phone: z.string().optional(),

  // 1) Business Context
  context_goals: z.string().min(1, "Please describe your goals"),
  process_targets: z.array(z.string()).optional(),

  // 2) Data & Integrations
  integration_systems: z.string().optional(),
  integration_data: z.string().optional(),

  // 3) AI Features & Channels
  ai_features: z.array(z.string()).optional(),
  ai_channels: z.array(z.string()).optional(),

  // 4) UX & Brand
  ux_ui: z.string().optional(),
  ux_tone: z.string().optional(),

  // 5) Security
  security_compliance: z.string().optional(),
  security_rbac: z.string().optional(),

  // 6) Budget & Timeline
  budget_range: z.string().optional(),
  timeline_launch: z.string().optional(),
  roi_metrics: z.string().optional(),

  // 7) Other
  other_notes: z.string().optional(),

  // Consent
  consent_popia: z.boolean().refine((val) => val === true, "You must consent to proceed"),
});

type FormData = z.infer<typeof schema>;

export default function AISolutionBriefing() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      current_systems: [],
      process_targets: [],
      ai_features: [],
      ai_channels: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("form-name", "AI Solution Brief");
      // Append all data fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // Join arrays or append multiple times
          formData.append(key, value.join(", "));
        } else if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const result = await submitBrief(formData);

      if (!result.success) throw new Error(result.error);
      
      setIsSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="relative min-h-screen bg-white text-zinc-900 flex items-center justify-center">
        <AtmosphericBackground variant="subtle" theme="light" />
        <div className="relative z-10 max-w-lg w-full text-center p-8 bg-white border border-zinc-200 shadow-lg rounded-3xl">
          <div className="w-16 h-16 bg-[#3DD6D0]/10 rounded-2xl flex items-center justify-center border border-[#3DD6D0]/30 mx-auto mb-6">
             <Send className="w-8 h-8 text-[#3DD6D0]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Brief Received</h2>
          <p className="text-zinc-600 mb-8">
            Thank you for submitting your AI Solution brief. Our team will review your requirements and get back to you shortly.
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
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[#3DD6D0] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Briefings
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900">AI Solution Briefing</h1>
            <p className="text-zinc-600 text-lg font-light leading-relaxed max-w-2xl">
              This form captures your business needs for AI-powered solutions and automation. 
              Leave any unknowns blank — our team and tools will fill in the gaps.
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* 0) Current Systems */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-8 text-zinc-900 flex items-center">
                 <span className="w-8 h-8 rounded-lg bg-[#3DD6D0]/20 text-[#3DD6D0] flex items-center justify-center text-sm mr-3">01</span>
                 Current Systems & Pain Points
              </h2>
              
              <div className="space-y-8">
                <div>
                  <Label className="text-zinc-900 mb-4 block">Current systems/platforms in use</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Manual/Excel", "Zoho", "Salesforce", "HubSpot", "SAP", "Custom-built", "Other"].map((sys) => (
                      <label key={sys} className="flex items-center space-x-3 cursor-pointer group p-3 rounded-xl border border-zinc-200 hover:border-[#3DD6D0] transition-colors bg-zinc-50/50">
                         <input 
                           type="checkbox" 
                           value={sys} 
                           {...register("current_systems")} 
                           className="appearance-none h-5 w-5 border border-zinc-300 rounded bg-white checked:bg-[#3DD6D0] checked:border-[#3DD6D0] transition-all"
                         />
                         <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">{sys}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-zinc-900 mb-2 block">Summary of Pain Points *</Label>
                  <Textarea 
                    variant="boxed"
                    {...register("current_pain_points")} 
                    placeholder="Describe inefficiencies: manual data entry, slow lead follow-up, fragmented tools, etc." 
                  />
                  {errors.current_pain_points && <p className="text-red-500 text-xs mt-2">{errors.current_pain_points.message}</p>}
                </div>
              </div>
            </section>

            {/* Client Info */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
               <h2 className="text-xl font-bold mb-6 text-zinc-900 flex items-center">
                 <span className="w-8 h-8 rounded-lg bg-[#3DD6D0]/20 text-[#3DD6D0] flex items-center justify-center text-sm mr-3">02</span>
                 Client & Project Info
               </h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Company / Organisation *</Label>
                    <Input variant="boxed" {...register("client_company")} placeholder="Your Company Name" />
                    {errors.client_company && <p className="text-red-500 text-xs mt-2">{errors.client_company.message}</p>}
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Primary Contact Name</Label>
                    <Input variant="boxed" {...register("client_contact_name")} placeholder="John Doe" />
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Email *</Label>
                    <Input variant="boxed" {...register("client_email")} type="email" placeholder="john@example.com" />
                    {errors.client_email && <p className="text-red-500 text-xs mt-2">{errors.client_email.message}</p>}
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Phone</Label>
                    <Input variant="boxed" {...register("client_phone")} placeholder="+27 ..." />
                  </div>
               </div>
            </section>

            {/* 1) Business Context */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
              <h2 className="text-xl font-bold mb-8 text-zinc-900 flex items-center">
                 <span className="w-8 h-8 rounded-lg bg-[#3DD6D0]/20 text-[#3DD6D0] flex items-center justify-center text-sm mr-3">03</span>
                 Business Context
              </h2>
              <div className="space-y-8">
                <div>
                  <Label className="text-zinc-900 mb-2 block">Current challenges / goals for AI *</Label>
                  <Textarea 
                    variant="boxed"
                    {...register("context_goals")}
                    placeholder="e.g., reduce lead response time; automate FAQ; qualify leads"
                  />
                  {errors.context_goals && <p className="text-red-500 text-xs mt-2">{errors.context_goals.message}</p>}
                </div>

                <div>
                   <Label className="text-zinc-900 mb-4 block">Processes to improve</Label>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                     {["Lead Qualification", "Customer Support", "Marketing Automation", "Document Parsing", "Predictive Analytics", "Voice/Telephony"].map((item) => (
                       <label key={item} className="flex items-center space-x-3 cursor-pointer group p-3 rounded-xl border border-zinc-200 hover:border-[#3DD6D0] transition-colors bg-zinc-50/50">
                          <input 
                            type="checkbox" 
                            value={item} 
                            {...register("process_targets")} 
                            className="appearance-none h-5 w-5 border border-zinc-300 rounded bg-white checked:bg-[#3DD6D0] checked:border-[#3DD6D0] transition-all"
                          />
                          <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">{item}</span>
                       </label>
                     ))}
                   </div>
                </div>
              </div>
            </section>

            {/* 2 & 3 Combined Block */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* 2) Data */}
                <div className="space-y-6">
                   <h2 className="text-xl font-bold text-zinc-900 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-[#3DD6D0]/20 text-[#3DD6D0] flex items-center justify-center text-sm mr-3">04</span>
                      Data & Integrations
                   </h2>
                   <div>
                     <Label className="text-zinc-900 mb-2 block">Systems to integrate</Label>
                     <Input variant="boxed" {...register("integration_systems")} placeholder="HubSpot, Slack, WhatsApp, GA4..." />
                   </div>
                   <div>
                     <Label className="text-zinc-900 mb-2 block">Data types & Sensitivity</Label>
                     <Input variant="boxed" {...register("integration_data")} placeholder="PII, financial, documents..." />
                   </div>
                </div>

                {/* 3) Features */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-zinc-900 flex items-center">
                     <span className="w-8 h-8 rounded-lg bg-[#3DD6D0]/20 text-[#3DD6D0] flex items-center justify-center text-sm mr-3">05</span>
                     Features & Channels
                  </h2>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Desired AI Capabilities</Label>
                    <div className="grid grid-cols-1 gap-3">
                       {["Conversational Agent", "Agentic Workflows", "Summarization", "Classification", "Recommendation"].map(f => (
                          <label key={f} className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" value={f} {...register("ai_features")} className="appearance-none h-4 w-4 border border-zinc-300 rounded bg-white checked:bg-[#3DD6D0] checked:border-[#3DD6D0]" />
                            <span className="text-sm text-zinc-700">{f}</span>
                          </label>
                       ))}
                    </div>
                  </div>
                  <div>
                     <Label className="text-zinc-900 mb-2 block">Channels</Label>
                     <div className="flex gap-4 flex-wrap">
                        {["Website", "WhatsApp", "Email", "Internal Tool"].map(c => (
                           <label key={c} className="flex items-center space-x-2 cursor-pointer">
                             <input type="checkbox" value={c} {...register("ai_channels")} className="appearance-none h-4 w-4 border border-zinc-300 rounded bg-white checked:bg-[#3DD6D0] checked:border-[#3DD6D0]" />
                             <span className="text-sm text-zinc-700">{c}</span>
                           </label>
                        ))}
                     </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 6) Budget */}
            <section className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
               <h2 className="text-xl font-bold mb-6 text-zinc-900 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-[#3DD6D0]/20 text-[#3DD6D0] flex items-center justify-center text-sm mr-3">06</span>
                  Logistics
               </h2>
               <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Budget Range (ZAR)</Label>
                    <Select variant="boxed" {...register("budget_range")}>
                      <option value="">Select Range...</option>
                      <option value="25k-50k">R25k – R50k</option>
                      <option value="50k-100k">R50k – R100k</option>
                      <option value="100k-250k">R100k – R250k</option>
                      <option value="250k-500k">R250k – R500k</option>
                      <option value="500k+">R500k+</option>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Target Go-Live</Label>
                    <Input variant="boxed" {...register("timeline_launch")} placeholder="YYYY-MM-DD" />
                  </div>
                  <div>
                    <Label className="text-zinc-900 mb-2 block">Success Metrics</Label>
                    <Input variant="boxed" {...register("roi_metrics")} placeholder="Response time < 2m, +30% leads..." />
                  </div>
               </div>
            </section>

            {/* Consent */}
            <div className="bg-[#3DD6D0]/5 border border-[#3DD6D0]/20 p-6 rounded-xl">
               <h3 className="text-[#3DD6D0] font-bold text-sm uppercase tracking-widest mb-4">Privacy & Consent</h3>
               <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    {...register("consent_popia")} 
                    className="mt-1 appearance-none h-5 w-5 border border-[#3DD6D0]/50 rounded bg-white checked:bg-[#3DD6D0] transition-colors"
                  />
                  <div className="text-sm text-zinc-600">
                     I consent to Maru Online processing my information for the purpose of responding to this enquiry in line with POPIA.
                  </div>
               </label>
               {errors.consent_popia && <p className="text-red-500 text-xs mt-2 pl-8">{errors.consent_popia.message}</p>}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-6 pt-8">
              <Button type="submit" disabled={isSubmitting} className="min-w-[200px] bg-[#3DD6D0] text-black hover:bg-[#3DD6D0]/90 rounded-full font-bold uppercase tracking-wider">
                {isSubmitting ? "Sending..." : "Submit Brief"}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
