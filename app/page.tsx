// app/page.tsx

// app/page.tsx

import CaseStudie from "@/components/CaseStudie";
import Contact from "@/components/Contact";
import CtaFooter from "@/components/CtaFooter";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import MainNavbar from "@/components/MainNavbar";
import Story from "@/components/Story";




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
       <MainNavbar />
      <Hero />
       <Story/>
       <Founder/>
        <CaseStudie/>




  <CtaFooter/>
      <Contact />
    </main>
  );
}








