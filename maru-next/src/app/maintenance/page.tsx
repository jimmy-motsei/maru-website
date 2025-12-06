import MaintenanceCard from "@/components/MaintenanceCard";

export const metadata = {
  title: "We’ll be right back — Maru",
  description: "Maru site is temporarily offline for scheduled maintenance.",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <MaintenanceCard>
        <div className="text-xs text-slate-500">If you need urgent assistance, contact your Maru representative or your usual support channel.</div>
      </MaintenanceCard>
    </main>
  );
}
