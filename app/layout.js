import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import { Footer } from './commponent/Footer';
import { Navbar } from './commponent/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wecare',
  description: 'A global community for child development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={inter} />
      </head>

      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
