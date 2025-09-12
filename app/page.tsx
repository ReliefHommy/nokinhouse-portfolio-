// app/page.tsx

// app/page.tsx

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import KeyValue from "@/components/KeyValue";




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <IntroVideo />
      <KeyValue />
      <Contact />
    </main>
  );
}








