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
  // 0) Current Systems
  current_systems: z.array(z.string()).optional(),
  current_pain_points: z.string().min(1, "Please describe the current issues"),

  // Client
  client_company: z.string().min(1, "Company name is required"),
  client_contact_name: z.string().optional(),
  client_email: z.string().email("Invalid email"),
  client_phone: z.string().optional(),

  // 1) Overview
  overview_goals: z.string().min(1, "Goals are required"),
  overview_audience: z.string().optional(),
  overview_cta: z.string().optional(),
  overview_inspiration: z.string().optional(),

  // 2) Functionality
  func_features: z.array(z.string()).optional(),
  ecom_products_ready: z.string().optional(),
  ecom_gateways: z.string().optional(),
  func_integrations: z.string().optional(),

  // 3) Content
  content_nav: z.string().optional(),
  content_inventory: z.string().optional(),
  content_cms: z.string().optional(),

  // 4) Design
  design_personality: z.string().optional(),
  design_assets: z.string().optional(),

  // 5) Tech
  tech_hosting: z.string().optional(),
  tech_domains: z.string().optional(),

  // 6) Budget
  budget_range: z.string().optional(),
  budget_must_haves: z.string().optional(),
  timeline_launch: z.string().optional(),

  // Consent
  consent_popia: z.boolean().refine(val => val === true, "Consent is required"),
});

type FormData = z.infer<typeof schema>;

export default function WebDevBriefing() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      current_systems: [],
      func_features: [],
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Web Development Brief",
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
          <h2 className="text-3xl font-bold mb-4 text-[#ff9900]">Brief Submitted</h2>
          <p className="text-zinc-400 mb-8">
            Thanks for the details! We'll review your web project requirements and be in touch soon.
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
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[#ff9900] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Briefings
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development Briefing</h1>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Tell us about your next website project. Focus on your goals, pain points, and must-haves. 
              We'll guide you through the rest.
            </p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
            
            {/* 0. Current Status */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-8 text-[#ff9900]">0. Current Systems</h2>
              <div className="space-y-8">
                 <div>
                    <Label>Current systems in use</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {["Manual", "Zoho", "HubSpot", "WordPress", "Excel", "Custom", "Other"].map(sys => (
                          <label key={sys} className="flex items-center space-x-3 cursor-pointer">
                             <input type="checkbox" value={sys} {...register("current_systems")} className="appearance-none h-4 w-4 border border-white/20 rounded checked:bg-[#ff9900]" />
                             <span className="text-sm text-zinc-300">{sys}</span>
                          </label>
                       ))}
                    </div>
                 </div>
                 <div>
                    <Label className="text-white">Summary of pain points *</Label>
                    <Textarea {...register("current_pain_points")} placeholder="What's not working? Poor SEO, hard to update, etc." />
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
                    <Input {...register("client_company")} />
                    {errors.client_company && <p className="text-red-500 text-xs mt-2">{errors.client_company.message}</p>}
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input {...register("client_email")} type="email" />
                  </div>
                  <div>
                    <Label>Contact Name</Label>
                    <Input {...register("client_contact_name")} />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input {...register("client_phone")} />
                  </div>
               </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-8 text-[#ff9900]">1. Project Overview</h2>
              <div className="space-y-8">
                 <div>
                    <Label className="text-white">Business & Website Goals *</Label>
                    <Textarea {...register("overview_goals")} placeholder="e.g. Increase qualified leads by 30%, launch new product brand..." />
                    {errors.overview_goals && <p className="text-red-500 text-xs mt-2">{errors.overview_goals.message}</p>}
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <Label>Target Audience</Label>
                      <Input {...register("overview_audience")} placeholder="SMEs in logistics, marketing managers..." />
                    </div>
                    <div>
                      <Label>Primary Call-to-Action</Label>
                      <Input {...register("overview_cta")} placeholder="Book a Demo, Request Quote..." />
                    </div>
                 </div>
                 <div>
                    <Label>Inspiration URLs</Label>
                    <Input {...register("overview_inspiration")} placeholder="https://example.com, https://..." />
                 </div>
              </div>
            </section>

            {/* 2. Functionality */}
            <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
              <h2 className="text-xl font-bold mb-6 text-[#ff9900]">2. Functionality</h2>
              <div className="space-y-8">
                 <div>
                    <Label>Core Features</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {["Contact Forms", "Blog", "CMS", "E-commerce", "Booking", "Multilingual", "Site Search", "Members Area"].map(f => (
                          <label key={f} className="flex items-center space-x-3 cursor-pointer">
                             <input type="checkbox" value={f} {...register("func_features")} className="appearance-none h-4 w-4 border border-white/20 rounded checked:bg-[#ff9900]" />
                             <span className="text-sm text-zinc-300">{f}</span>
                          </label>
                       ))}
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div>
                       <Label>Integrations</Label>
                       <Input {...register("func_integrations")} placeholder="HubSpot, GA4..." />
                    </div>
                    <div>
                       <Label>E-commerce: Products Ready?</Label>
                       <Select {...register("ecom_products_ready")}>
                          <option>No</option>
                          <option>Yes</option>
                       </Select>
                    </div>
                 </div>
              </div>
            </section>

             {/* 6. Budget */}
             <section className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
               <h2 className="text-xl font-bold mb-6 text-[#ff9900]">Budget & Timeline</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label>Budget Range (ZAR)</Label>
                    <Select {...register("budget_range")}>
                      <option value="">Select Range...</option>
                      <option value="12.5k-25k">R12.5k – R25k</option>
                      <option value="25k-50k">R25k – R50k</option>
                      <option value="50k-100k">R50k – R100k</option>
                      <option value="100k-250k">R100k – R250k</option>
                      <option value="250k+">R250k+</option>
                    </Select>
                  </div>
                  <div>
                    <Label>Target Launch</Label>
                    <Input {...register("timeline_launch")} placeholder="YYYY-MM-DD" />
                  </div>
               </div>
               <div className="mt-8">
                  <Label>Must-have features</Label>
                  <Textarea {...register("budget_must_haves")} className="min-h-[100px]" />
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

            <div className="flex justify-end pt-8">
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
