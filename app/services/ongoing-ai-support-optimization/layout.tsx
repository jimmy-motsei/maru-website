import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results Optimisation | Maru Online',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
