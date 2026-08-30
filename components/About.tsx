export default function About() {
  return (
    <section id="about" className="bg-[#d9d9d9]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 flex flex-col md:flex-row gap-10 md:gap-16">
        <h2 className="font-[family-name:var(--font-orbitron)] text-[#24273b] text-3xl md:text-5xl shrink-0">
          ABOUT
        </h2>
        <div className="hidden md:block w-px bg-[#24273b]/30" />
        <div className="font-[family-name:var(--font-open-sans)] text-[#242738] text-lg md:text-2xl space-y-4">
          <p>
            I&apos;m a self-taught full-stack developer who came into
            software after years working in healthcare. That background
            shaped how I build — I think in terms of real workflows and
            where they break, not just specs.
          </p>
          <p>
            My path: graphic design &amp; illustration → webmaster →
            WordPress → full-stack development → AI-integrated
            applications.
          </p>
          <p>
            Today I build with Django, Next.js, and Flutter, and integrate
            AI (OpenAI, Gemini, Claude) into practical tools — from
            automated content pipelines to document extraction. I use AI
            coding tools to move faster, but I own the architecture and can
            explain every line.
          </p>
        </div>
      </div>
    </section>
  );
}