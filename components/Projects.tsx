import Image from "next/image";

type Project = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const projects: Project[] = [
  {
    number: "1.",
    title: "Thai Flavours — Vendor Marketplace",
    description:
      "A multi-vendor marketplace with full subscription billing — recurring payments, webhooks, proration, and pause/resume/cancel logic, built on production infrastructure. Stack: Django · Next.js · Stripe. Status: Live",
    image: "/images/project-thai-flavours.png",
    imageAlt: "Thai Flavours vendor marketplace app",
  },
  {
    number: "2.",
    title: "Somtam's Society",
    description:
      "A community platform for the Thai community in the EU — event listings for markets, holy days, and gatherings, with a business directory in development. Stack: Django · Next.js · Figma. Status: Live",
    image: "/images/project-somtams-society.png",
    imageAlt: "Somtam's Society community app",
    reverse: true,
  },
  {
    number: "3.",
    title: "AI Content Automation Tool",
    description:
      "An AI-powered tool that generates and publishes content simultaneously across four social platforms, cutting manual posting time to zero. Stack: Django · Next.js · OpenAI API. Status: Delivered",
    image: "/images/project-ai-automation.png",
    imageAlt: "AI content automation tool",
  },
];

function ProjectRow({ project }: { project: Project }) {
  return (
    <div
      className={`flex flex-col ${
        project.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 py-16 border-b border-[#3a4480] last:border-b-0`}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={400}
        height={400}
        className="rounded-[50px] object-cover w-full max-w-[320px] md:max-w-[400px] h-auto shrink-0"
      />
      <div>
        <h3 className="font-[family-name:var(--font-orbitron)] font-semibold text-[#a9d41c] text-2xl md:text-3xl">
          {project.number} {project.title}
        </h3>
        <p className="mt-4 font-[family-name:var(--font-open-sans)] text-white text-lg md:text-xl">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="works" className="bg-[#222d69]">
      <div className="mx-auto max-w-[1440px] px-6 pt-16">
        <h2 className="font-[family-name:var(--font-orbitron)] text-white text-3xl md:text-5xl text-center md:text-left">
          FEATURED <span className="text-[#a9d41c]">PROJECTS</span>
        </h2>
      </div>
      <div className="mx-auto max-w-[1440px] px-6">
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}