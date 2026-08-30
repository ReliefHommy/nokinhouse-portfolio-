// components/Contact.tsx
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#222d69]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 flex flex-col md:flex-row gap-10 md:gap-16">
        <h2 className="font-[family-name:var(--font-orbitron)] text-[#a9d41c] text-3xl md:text-5xl shrink-0">
          CONTACT
        </h2>
        <div className="hidden md:block w-px bg-white/20" />
        <div>
          <p className="font-[family-name:var(--font-open-sans)] text-white text-lg md:text-2xl">
            Open to freelance projects and full-time roles. Let&apos;s talk
            about what you&apos;re building.
            <br />
            {/* TODO: replace with real contact links before publishing */}
            <a href="mailto:nokinhouse.service@gmail.com" className="underline">
              nok@gmail.com
            </a>{" "}
            ·{" "}
            <a href="https://linkedin.com/in/rattana-r-top-281258184" className="underline">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a href="https://github.com/ReliefHommy" className="underline">
              GitHub
            </a>
          </p>
          <div className="mt-8 flex gap-4">
                <a href="https://www.youtube.com/@picasso_eye" className="underline">
                <Image src="/images/icon-social-1.png" alt="" width={60} height={60} />
            </a>
          
     
          
              <a href="https://github.com/ReliefHommy" className="underline">
            <Image src="/images/icon-social-2.png" alt="" width={60} height={60} />
            </a>

            <a href="mailto:nokinhouse.service@gmail.com" className="underline">
            <Image src="/images/icon-social-3.png" alt="" width={60} height={60} />
            </a>
         
            
       
          </div>
        </div>
      </div>
    </section>
  );
}