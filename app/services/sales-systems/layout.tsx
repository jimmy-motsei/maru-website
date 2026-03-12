import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sales Process Optimization | Maru Online',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
