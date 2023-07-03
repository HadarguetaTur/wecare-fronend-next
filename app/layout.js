import './globals.css'
import React from "react";
import { Nunito } from 'next/font/google';
import Navbar from './componnent/navbar/navbar';
import Register from './componnent/modals/register';
import ToasterProvider from './provaiders/toasterProvaider';
import Login from './componnent/modals/login';
import getCurrentUser from './action/gerCurrentUser';
import ClientOnly from './componnent/client-only/clientOnly';

export const metadata = {
  title: 'Wecare',
  description: 'A global community for child development',
}

const font = Nunito(
  { subsets: ['latin'] }
)

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className} >
        <ClientOnly>
          <ToasterProvider />
          <Login />
          <Register />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
