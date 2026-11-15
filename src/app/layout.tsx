import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ali Tajik',
  description:
    'ali tajik portfolio , an Frontend and backend Engineer , specialized in Next.js , React.js , Node.js , Nest.js, TypeScript',
  icons: '',
  openGraph: {
    title: 'Ali tajik portfolio',
    description:
      'ali tajik portfolio , an Frontend and backend Engineer , specialized in Next.js , React.js , Node.js , Nest.js, TypeScript',
    images: [''],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full `}>
      <body className="min-h-full ">{children}</body>
    </html>
  );
}
