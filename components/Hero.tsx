
// app/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="bg-[#222d69]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Avatar + social icons */}
        <div className="flex flex-col items-center gap-6 shrink-0">
          <Image
            src="/images/avatar.png"
            alt="Nok Rattana"
            width={159}
            height={159}
            className="rounded-full"
          />
          <div className="mt-8 flex gap-4">
                <a href="https://www.youtube.com/@picasso_eye" className="underline">
                <Image src="/images/icon-social-1.png" alt="" width={60} height={60} />
            </a>
          
     
          
              <a href="mailto:nokinhouse.service@gmail.com" className="underline">
            <Image src="/images/icon-social-2.png" alt="" width={60} height={60} />
            </a>
            <Image src="/images/icon-social-3.png" alt="" width={60} height={60} />
          </div>
        </div>

        {/* Copy */}
        <div className="text-center md:text-left">
          <h1 className="font-[family-name:var(--font-orbitron)] text-[#a9d41c] text-3xl md:text-5xl leading-tight">
            Full-Stack Developer
            <br />& AI Automation
          </h1>
          <p className="mt-6 font-[family-name:var(--font-open-sans)] text-white text-lg md:text-xl max-w-xl">
            I build web apps, marketplaces, and AI-powered workflows —
            from backend to deployment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#works"
              className="rounded-full bg-[#a9d41c] text-[#222d69] font-[family-name:var(--font-righteous)] text-sm px-8 py-4"
            >
              VIEW PROJECTS
            </Link>
            <Link
              href="mailto:nokinhouse.service@gmail.com"
              className="rounded-full border-2 border-[#a9d41c] text-white font-[family-name:var(--font-righteous)] text-sm px-8 py-4"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

