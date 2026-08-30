// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Orbitron, Righteous, } from "next/font/google";

// NOTE: "Orbit" (used for body text in the Figma file) is not a standard
// Google Font. Swap this for the correct font once confirmed — using
// Orbitron as a placeholder stand-in for now.
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-orbitron",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});



export const metadata: Metadata = {
  title: 'Nok Rattana — Full-Stack Developer & AI Automation',
  description: 'Full-stack developer building web apps, marketplaces, and AI-powered workflows.',
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
