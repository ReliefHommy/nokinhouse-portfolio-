import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#222d69] border-b border-[#3a4480]">
      <div className="mx-auto max-w-[1440px] px-6 py-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo-nok-rattana.png"
            alt="Nok Rattana"
            width={100}
            height={100}
           
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-[family-name:var(--font-orbitron)] text-white text-base">
          <Link href="#home">HOME</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#works" className="font-semibold">
            WORKS
          </Link>
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-[#a9d41c] text-[#222d69] font-[family-name:var(--font-righteous)] text-sm px-6 py-3 whitespace-nowrap"
        >
          GET IN TOUCH
        </Link>
      </div>
    </header>
  );
}