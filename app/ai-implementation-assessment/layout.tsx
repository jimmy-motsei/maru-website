import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Implementation Assessment | Maru Online',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
