import './globals.css'
import React from "react";
import { Nunito } from 'next/font/google';
import Navbar from './componnent/navbar/navbar';

export const metadata = {
  title: 'Wecare',
  description: 'A global community for child development',
}

const font = Nunito(
  { subsets: ['latin'] }
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
