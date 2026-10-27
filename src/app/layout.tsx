import type { Metadata } from 'next';
import { Playfair_Display, Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digital Handloom Design Network | Tradition • Art • Your Style',
  description: 'AI-powered Indian traditional clothing design platform. Create stunning silk sarees, bridal lehengas, ethnic wear with authentic handloom patterns, embroidery, and fabrics.',
  keywords: ['Indian clothing', 'traditional wear', 'saree design', 'bridal wear', 'handloom', 'AI fashion', 'ethnic fashion'],
  authors: [{ name: 'Digital Handloom Design Network' }],
  openGraph: {
    title: 'Digital Handloom Design Network | Tradition • Art • Your Style',
    description: 'AI-powered Indian traditional clothing design platform.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Digital Handloom Design Network',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-ivory-50 text-maroon-900 font-body">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-maroon-100 bg-ivory-100 py-8">
            <div className="mx-auto max-w-7xl px-4 text-center text-sm text-maroon-500">
              <p className="font-heading text-lg text-maroon-900 mb-2">Digital Handloom Design Network</p>
              <p>Tradition • Art • Your Style</p>
              <p className="mt-2">© 2024 Digital Handloom. Preserving Indian textile heritage through AI innovation.</p>
            </div>
          </footer>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: 'bg-maroon-900 text-ivory-50 border border-maroon-700',
              style: { borderRadius: '0.75rem' },
              success: { iconTheme: { primary: '#EAB308', secondary: '#FAFAF9' } },
              error: { iconTheme: { primary: '#EF4444', secondary: '#FAFAF9' } },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}