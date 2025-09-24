import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'BlueTape - Automate Your Compliance Paperwork',
  description: 'A vertical SaaS platform for small construction and trade contractors that automates compliance by tracking permits and licenses, providing automated reminders, and organizing all related documents.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
