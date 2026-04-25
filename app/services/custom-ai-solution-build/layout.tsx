import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow Integration | Maru Online',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
