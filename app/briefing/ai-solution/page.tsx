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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "AI Solution Brief",
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

  if (isSuccess) {
    return (
      <main className="relative min-h-screen bg-[#0a192f] text-white flex items-center justify-center">
        <AtmosphericBackground variant="subtle" />
        <div className="relative z-10 max-w-lg w-full text-center p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-[#00f0ff]">Brief Received</h2>
          <p className="text-zinc-400 mb-8">
            Thank you for submitting your AI Solution brief. Our team will review your requirements and get back to you shortly.
          </p>
          <Button href="/briefing" variant="outline">Back to Briefing Center</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0a192f] text-white pb-24">
      <AtmosphericBackground variant="default" />
      
      <div className="container relative z-10 mx-auto px-6 pt-12 md:pt-20">
        <Link 
          href="/briefing" 
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[#00f0ff] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Briefings
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Solution Briefing</h1>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              This form captures your business needs for AI-powered solutions and automation. 
              Leave any unknowns blank — our team and tools will fill in the gaps.
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
            
            {/* 0) Current Systems */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-8 text-[#00f0ff]">0. Current Systems & Pain Points</h2>
              
              <div className="space-y-8">
                <div>
                  <Label>Current systems/platforms in use</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Manual/Excel", "Zoho", "Salesforce", "HubSpot", "SAP", "Custom-built", "Other"].map((sys) => (
                      <label key={sys} className="flex items-center space-x-3 cursor-pointer group">
                         <input 
                           type="checkbox" 
                           value={sys} 
                           {...register("current_systems")} 
                           className="appearance-none h-5 w-5 border border-white/20 rounded bg-transparent checked:bg-[#00f0ff] checked:border-[#00f0ff] transition-all"
                         />
                         <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">{sys}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white">Summary of Pain Points *</Label>
                  <Textarea 
                    {...register("current_pain_points")} 
                    placeholder="Describe inefficiencies: manual data entry, slow lead follow-up, fragmented tools, etc." 
                  />
                  {errors.current_pain_points && <p className="text-red-500 text-xs mt-2">{errors.current_pain_points.message}</p>}
                </div>
              </div>
            </section>

            {/* Client Info */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
               <h2 className="text-xl font-bold mb-6 text-white">Client & Project Info</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label>Company / Organisation *</Label>
                    <Input {...register("client_company")} placeholder="Your Company Name" />
                    {errors.client_company && <p className="text-red-500 text-xs mt-2">{errors.client_company.message}</p>}
                  </div>
                  <div>
                    <Label>Primary Contact Name</Label>
                    <Input {...register("client_contact_name")} placeholder="John Doe" />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input {...register("client_email")} type="email" placeholder="john@example.com" />
                    {errors.client_email && <p className="text-red-500 text-xs mt-2">{errors.client_email.message}</p>}
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input {...register("client_phone")} placeholder="+27 ..." />
                  </div>
               </div>
            </section>

            {/* 1) Business Context */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-8 text-[#00f0ff]">1. Business Context</h2>
              <div className="space-y-8">
                <div>
                  <Label className="text-white">Current challenges / goals for AI *</Label>
                  <Textarea 
                    {...register("context_goals")}
                    placeholder="e.g., reduce lead response time; automate FAQ; qualify leads"
                  />
                  {errors.context_goals && <p className="text-red-500 text-xs mt-2">{errors.context_goals.message}</p>}
                </div>

                <div>
                   <Label>Processes to improve</Label>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                     {["Lead Qualification", "Customer Support", "Marketing Automation", "Document Parsing", "Predictive Analytics", "Voice/Telephony"].map((item) => (
                       <label key={item} className="flex items-center space-x-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            value={item} 
                            {...register("process_targets")} 
                            className="appearance-none h-5 w-5 border border-white/20 rounded bg-transparent checked:bg-[#00f0ff] checked:border-[#00f0ff] transition-all"
                          />
                          <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">{item}</span>
                       </label>
                     ))}
                   </div>
                </div>
              </div>
            </section>

            {/* 2 & 3 Combined Block */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* 2) Data */}
                <div className="space-y-6">
                   <h2 className="text-xl font-bold text-[#00f0ff]">2. Data & Integrations</h2>
                   <div>
                     <Label>Systems to integrate</Label>
                     <Input {...register("integration_systems")} placeholder="HubSpot, Slack, WhatsApp, GA4..." />
                   </div>
                   <div>
                     <Label>Data types & Sensitivity</Label>
                     <Input {...register("integration_data")} placeholder="PII, financial, documents..." />
                   </div>
                </div>

                {/* 3) Features */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-[#00f0ff]">3. Features & Channels</h2>
                  <div>
                    <Label>Desired AI Capabilities</Label>
                    <div className="grid grid-cols-1 gap-2">
                       {["Conversational Agent", "Agentic Workflows", "Summarization", "Classification", "Recommendation"].map(f => (
                          <label key={f} className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" value={f} {...register("ai_features")} className="appearance-none h-4 w-4 border border-white/20 rounded checked:bg-[#00f0ff]" />
                            <span className="text-sm text-zinc-300">{f}</span>
                          </label>
                       ))}
                    </div>
                  </div>
                  <div>
                     <Label>Channels</Label>
                     <div className="flex gap-4 flex-wrap">
                        {["Website", "WhatsApp", "Email", "Internal Tool"].map(c => (
                           <label key={c} className="flex items-center space-x-2 cursor-pointer">
                             <input type="checkbox" value={c} {...register("ai_channels")} className="appearance-none h-4 w-4 border border-white/20 rounded checked:bg-[#00f0ff]" />
                             <span className="text-sm text-zinc-300">{c}</span>
                           </label>
                        ))}
                     </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 6) Budget */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
               <h2 className="text-xl font-bold mb-6 text-[#00f0ff]">Logistics</h2>
               <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <Label>Budget Range (ZAR)</Label>
                    <Select {...register("budget_range")}>
                      <option value="">Select Range...</option>
                      <option value="25k-50k">R25k – R50k</option>
                      <option value="50k-100k">R50k – R100k</option>
                      <option value="100k-250k">R100k – R250k</option>
                      <option value="250k-500k">R250k – R500k</option>
                      <option value="500k+">R500k+</option>
                    </Select>
                  </div>
                  <div>
                    <Label>Target Go-Live</Label>
                    <Input {...register("timeline_launch")} placeholder="YYYY-MM-DD" />
                  </div>
                  <div>
                    <Label>Success Metrics</Label>
                    <Input {...register("roi_metrics")} placeholder="Response time < 2m, +30% leads..." />
                  </div>
               </div>
            </section>

            {/* Consent */}
            <div className="bg-[#ff9900]/10 border border-[#ff9900]/30 p-6 rounded-xl">
               <h3 className="text-[#ff9900] font-bold text-sm uppercase tracking-widest mb-4">Privacy & Consent</h3>
               <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    {...register("consent_popia")} 
                    className="mt-1 appearance-none h-5 w-5 border border-[#ff9900]/50 rounded bg-transparent checked:bg-[#ff9900] transition-colors"
                  />
                  <div className="text-sm text-zinc-300">
                     I consent to Maru Online processing my information for the purpose of responding to this enquiry in line with POPIA.
                  </div>
               </label>
               {errors.consent_popia && <p className="text-red-500 text-xs mt-2 pl-8">{errors.consent_popia.message}</p>}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-6 pt-8">
              <Button type="submit" disabled={isSubmitting} className="min-w-[200px]">
                {isSubmitting ? "Sending..." : "Submit Brief"}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}
