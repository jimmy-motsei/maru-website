'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BarChart3, Users, Settings, Home, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/admin', { method: 'DELETE' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Admin Navigation */}
      <nav className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="text-white font-bold text-xl">
                Maru Admin
              </Link>
              
              <div className="flex items-center gap-6">
                <Link
                  href="/admin"
                  className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </Link>
                
                <Link
                  href="/admin/leads"
                  className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Leads
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                Back to Site
              </Link>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Admin Content */}
      <main>{children}</main>
    </div>
  );
}