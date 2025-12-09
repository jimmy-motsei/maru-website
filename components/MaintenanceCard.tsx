import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function MaintenanceCard({
  title = "We’re updating the Maru experience",
  subtitle = "Our site is temporarily offline while we roll out improvements.",
  children,
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-transparent">
      <div className="max-w-md w-full bg-zinc-900/90 rounded-2xl p-8 shadow-2xl border border-slate-600/30">
        <div className="flex items-center mb-4 text-sm text-slate-300">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 shadow-lg animate-pulse" />
          <span>Scheduled maintenance</span>
        </div>

        <h1 className="text-2xl text-white font-semibold mb-3">{title}</h1>

        <p className="text-slate-300 mb-2">{subtitle}</p>

        <p className="text-slate-400 mb-2">Please check back shortly. Everything else at Maru is operating as normal.</p>

        <p className="text-slate-400/90 mt-2">Thank you for your patience.</p>

        {children && <div className="text-xs text-slate-500 mt-4">{children}</div>}
      </div>
    </div>
  );
}
