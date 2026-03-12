import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Follow-Up Automation | Maru Online',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
