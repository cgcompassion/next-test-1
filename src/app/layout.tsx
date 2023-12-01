import './globals.css';

import { CIFooter } from '@/custom-components/CIFooter/CIFooter';
import { HSHHeader } from '@/custom-components/HSHHeader/HSHHeader';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import React from 'react';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hope Starts Here',
  description: 'Compassion Online Experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HSHHeader />
        {children}
        <CIFooter />
        <Toaster />
      </body>
    </html>
  );
}
