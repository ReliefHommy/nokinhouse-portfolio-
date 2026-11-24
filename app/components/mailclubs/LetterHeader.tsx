import React from 'react';

export default function LetterHeader() {
  return (
    <header className="max-w-5xl mx-auto pt-12 pb-8 px-6 border-b border-[#E5DDD0]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Studio Return Address */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#7A6F66] mb-1">
            Dispatches from the desk of
          </p>
          <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-[#2C2724]">
            Nok In House Studio
          </h1>
          <p className="font-serif italic text-[#6E6359] text-sm mt-1">
            STM Art Mail Club — Stockholm &amp; Bangkok
          </p>
        </div>

        {/* Decorative Postmark & Stamp */}
        <div className="flex items-center gap-4 self-end md:self-auto">
          <div className="text-right font-mono text-[11px] text-[#7A6F66] leading-tight">
            <p>POSTAGE PAID</p>
            <p>AIR MAIL • PAR AVION</p>
            <p className="text-[#B84A39] font-semibold">MONTHLY EDITION</p>
          </div>
          <div className="postage-stamp w-16 h-20 flex flex-col items-center justify-center text-center rotate-3">
            <span className="text-lg">🎨</span>
            <span className="text-[9px] font-mono uppercase tracking-wider mt-1 text-[#5A5048]">
              STM CLUB
            </span>
          </div>
        </div>
      </div>

      {/* Handwritten-style Greeting */}
      <div className="mt-10 max-w-2xl">
        <p className="font-serif italic text-xl md:text-2xl text-[#3E3732] leading-relaxed">
          “Dear Friend, pull up a chair. Every month I paint, write, and fold small worlds into envelopes—inviting you to slow down and choose which story arrives in your mailbox.”
        </p>
        <p className="mt-3 font-serif text-sm text-[#7A6F66]">
          — Warmly, Nok
        </p>
      </div>
    </header>
  );
}