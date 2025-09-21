import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aether Pets - AI Pet Community',
  description: 'Breed and nurture unique AI pets bonded to the Base network.',
  keywords: ['AI pets', 'virtual pets', 'Base network', 'community', 'blockchain'],
  openGraph: {
    title: 'Aether Pets',
    description: 'Breed and nurture unique AI pets bonded to the Base network.',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
