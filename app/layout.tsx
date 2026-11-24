// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Orbitron, Righteous, Cormorant_Garamond ,Plus_Jakarta_Sans} from "next/font/google";

// NOTE: "Orbit" (used for body text in the Figma file) is not a standard
// Google Font. Swap this for the correct font once confirmed — using
// Orbitron as a placeholder stand-in for now.
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-orbitron",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cormorant-garamond",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Plus_Jakarta_Sans",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});



export const metadata: Metadata = {
  title: 'STM Art Mail Club — STM Grocery Mail Club local shop',
  description: 'Draw The Whole City, Sweden & Wedding Venues.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <body
        className={`${orbitron.variable} ${righteous.variable} $ antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
