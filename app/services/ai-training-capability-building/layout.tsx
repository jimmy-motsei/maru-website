import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Training & Capability Building | Maru Online',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
