"use client";

import { useState } from "react";

export function MaruBriefForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Replace with MailerLite or ConvertKit webhook URL
      // await fetch("YOUR_WEBHOOK_URL_HERE", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ firstName, email }),
      // });
      setSubmitted(true);
    } catch {
      // handle error silently — webhook not yet wired
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-action-primary/30 bg-action-primary/10 p-8 max-w-lg mx-auto">
        <p className="text-white font-semibold text-lg">
          You&apos;re in. First issue lands in your inbox within a fortnight.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="flex-1 h-[52px] px-5 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/40 focus:border-action-primary focus:ring-0 outline-none transition-colors text-base"
      />
      <input
        type="email"
        placeholder="Work Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-[52px] px-5 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/40 focus:border-action-primary focus:ring-0 outline-none transition-colors text-base"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-[52px] px-6 rounded-lg bg-action-primary text-dark font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-opacity whitespace-nowrap"
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
