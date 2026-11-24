import React from 'react';
import { MapPin, Heart, Sparkles } from 'lucide-react';

interface HeroCityProps {
  onSelectClub: (clubId: string) => void;
  isSelected: boolean;
}

export default function HeroCityLetter({ onSelectClub, isSelected }: HeroCityProps) {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <div className="paper-card rounded-sm p-6 md:p-10 relative overflow-hidden">
        {/* Top Corner Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#8A2E20] bg-[#F5EAE6] px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Featured Dispatch • No. 01
          </span>
          <span className="text-xs font-serif italic text-[#7A6F66]">
            Architectural Watercolors &amp; Venue Keepsakes
          </span>
        </div>

        {/* Panoramic Architectural Watercolor Showcase */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#EFE9DF] rounded-sm overflow-hidden mb-8 border border-[#E2D8C8]">
          {/* Replace with actual Next.js <Image /> of Nok's Swedish watercolor */}
          <img
            src="/images/draw-the-whole-city-sweden.jpg"
            alt="Panoramic watercolor of Swedish city architecture and historic wedding venues"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-[#FFFDF9]/90 backdrop-blur-sm px-3 py-1.5 text-xs font-serif italic text-[#3E3732] border border-[#E2D8C8]">
            Fig 1. Gamla Stan spires &amp; archipelago manor houses
          </div>
        </div>

        {/* Editorial Copy & Interactive Venue Discovery */}
        <div className="grid md:grid-cols-3 gap-8 items-end">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C2724] mb-3">
              Draw The Whole City
            </h2>
            <p className="text-[#4F4741] leading-relaxed mb-4">
              Step inside sweeping architectural watercolors of iconic Swedish cities—from Stockholm’s pastel waterfronts to Gothenburg’s cobblestone courtyards. Each illustrated fold-out map highlights historic churches, glasshouses, and hidden estate venues across Sweden for couples and architecture lovers alike.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#6E6359]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B84A39]" /> Stockholm, Visby &amp; Skåne
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-[#B84A39]" /> Curated Swedish Wedding Venues
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <button
              onClick={() => onSelectClub('draw-the-city')}
              className={`w-full md:w-auto px-6 py-3 font-serif text-sm tracking-wide transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#2C2724] text-[#FAF6F0] border-[#2C2724]'
                  : 'bg-[#FAF6F0] text-[#2C2724] border-[#2C2724] hover:bg-[#2C2724] hover:text-[#FAF6F0]'
              }`}
            >
              {isSelected ? '✓ Added to Your Envelope' : '+ Add City Letter to Envelope'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}