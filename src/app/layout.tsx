import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: "Palindrome Checker | Margarita Boiko",
  description: "Palindrome Checker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
