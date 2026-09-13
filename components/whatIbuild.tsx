import Link from "next/link";

type CommunityCTAProps = {
  title?: string;
  body?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  className?: string;
};

export default function CommunityCTA({
  title = "สร้างสรรค์โดยและเพื่อชุมชนคนรักอาหารไทยในยุโรป",
  body = "หากวัด ร้านค้า หรือสวนของคุณยังไม่มีรายชื่ออยู่ที่นี่ คุณสามารถเพิ่มข้อมูลลงไปได้เลย เพราะทุกรายการที่เพิ่มเข้ามาจะช่วยให้การค้นหาของคนถัดไปรวดเร็วยิ่งขึ้น",
  primaryCta = "Add a listing",
  primaryHref = "/listings/new",
  secondaryCta = "Add your temple",
  secondaryHref = "/temples/new",
  className = "",
}: CommunityCTAProps) {
  return (
    <section
      aria-labelledby="community-cta-title"
      className={`bg-[#422646] text-[#F4F5F8] ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:grid lg:grid-cols-12 lg:gap-16 lg:py-28">
        {/* Headline column */}
        <div className="lg:col-span-6">
          <span aria-hidden="true" className="mb-7 block h-px w-16 bg-[#d876ac]" />
          <h2
            id="community-cta-title"
            className="max-w-[18ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            {title}
          </h2>
        </div>

        {/* Body + actions column */}
        <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:self-end">
          <p className="max-w-[46ch] text-lg leading-relaxed text-[#F4F5F8]/75">
            {body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center rounded-full bg-[#d876ac] px-7 py-3.5 text-base font-medium text-[#422646] transition-colors duration-150 hover:bg-[#e295bd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#F4F5F8] motion-reduce:transition-none"
            >
              {primaryCta}
            </Link>

            <Link
              href={secondaryHref}
              className="inline-flex items-center rounded-full border border-[#F4F5F8]/35 px-7 py-3.5 text-base font-medium text-[#F4F5F8] transition-colors duration-150 hover:border-[#F4F5F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#F4F5F8] motion-reduce:transition-none"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}