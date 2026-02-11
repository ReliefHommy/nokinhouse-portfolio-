// app/page.tsx



import Contact from "@/components/Contact";
import CtaFooter from "@/components/CtaFooter";
import Hero from "@/components/Hero";
import MainNavbar from "@/components/MainNavbar";
import WhatIBuild from "@/components/whatIbuild";





export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
       <MainNavbar />
      <Hero />
 
   
        <WhatIBuild/>




  <CtaFooter/>
      <Contact />
    </main>
  );
}








