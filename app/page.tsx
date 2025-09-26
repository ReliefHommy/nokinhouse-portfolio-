// app/page.tsx

// app/page.tsx

import Contact from "@/components/Contact";
import CtaFooter from "@/components/CtaFooter";
import Hero from "@/components/Hero";
import Pricing from "@/components/priceing";
import Services from "@/components/service";




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
 <Services />

  <Pricing />
  <CtaFooter/>
      <Contact />
    </main>
  );
}








