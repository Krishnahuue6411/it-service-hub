import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IT Service Hub - Blinkit Speed & Amazon Catalog E-Commerce',
  description: 'Shop computer hardware, NVMe SSDs, CCTV security cameras, refurbished ThinkPads, and software services with 2-Hour Express Delivery in Ahilyanagar & MIDC.',
  keywords: ['IT Service Hub', 'Computer Hardware', 'CCTV Cameras', 'SSD Upgrade', 'Ahilyanagar MIDC', 'Refurbished Laptops'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 min-h-screen text-slate-900 flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
