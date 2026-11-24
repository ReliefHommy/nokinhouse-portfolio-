import React from 'react';
import { Coffee, UtensilsCrossed, Flame, Wind, ShoppingBag } from 'lucide-react';

export interface MailClubOption {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  artifactHighlight: string;
  badge?: string;
  image: string;
  accentColor: string;
}

const MAIL_CLUBS: MailClubOption[] = [
  {
    id: 'bangkok-coffee',
    number: 'No. 02',
    title: 'Bangkok Coffee Corners',
    subtitle: 'Travel Sketchbook Series',
    description:
      'A pocket-sized watercolor sketchbook experience capturing sunlit Bangkok shophouse cafés, quiet wooden tables, terrazzo floors, and neighborhood street details.',
    artifactHighlight: 'Includes illustrated café map & sticker stamp',
    image: '/images/bangkok-coffee-corners.jpg',
    accentColor: '#6F4E37',
  },
  {
    id: 'thai-recipes',
    number: 'No. 03',
    title: 'Thai Recipes Mail Club',
    subtitle: 'Culinary Paintings & Pantry Notes',
    description:
      'Hand-painted Thai dishes paired with heirloom recipe cards. Designed to connect directly with our upcoming STM Grocery Mail Club so you can source authentic herbs and local shops.',
    artifactHighlight: 'Recipe card + STM Grocery Mail Club preview',
    badge: 'STM Grocery Integration',
    image: '/images/thai-recipes-club.jpg',
    accentColor: '#B84A39',
  },
  {
    id: 'healing-mail',
    number: 'No. 04',
    title: 'Healing Mail Club',
    subtitle: 'Touch, Rest & Restoration',
    description:
      'A handcrafted candle-wax greeting card paired with an intimate mini-essay on grounding, processing grief, or rediscovering joy—written from Nok’s background in nursing and massage therapy.',
    artifactHighlight: 'Hand-poured wax card + therapeutic essay',
    image: '/images/healing-mail-club.jpg',
    accentColor: '#8A2E20',
  },
  {
    id: 'meditation-mail',
    number: 'No. 05',
    title: 'Meditation Mail Club',
    subtitle: 'Stillness on Paper',
    description:
      'Minimalist brushwork prompts, breathwork pacing cards, and contemplative visual anchors designed to sit on your desk or bedside table for a quiet five-minute daily pause.',
    artifactHighlight: 'Contemplative art print + guided breath prompt',
    image: '/images/meditation-mail-club.jpg',
    accentColor: '#4A6B5D',
  },
];

interface MailClubGridProps {
  selectedClubs: string[];
  onToggleClub: (id: string) => void;
}

export default function MailClubGrid({ selectedClubs, onToggleClub }: MailClubGridProps) {
  return (
    <section className="max-w-5xl mx-auto py-8 px-6">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E5DDD0] pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A6F66]">
            Curate Your Monthly Bundle
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#2C2724] mt-1">
            More Letters From The Studio
          </h2>
        </div>
        <p className="font-serif italic text-sm text-[#6E6359] mt-2 sm:mt-0">
          Mix and match any letters into a single monthly envelope
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {MAIL_CLUBS.map((club) => {
          const isSelected = selectedClubs.includes(club.id);

          return (
            <article
              key={club.id}
              className={`paper-card p-6 flex flex-col justify-between transition-transform duration-200 ${
                isSelected ? 'ring-2 ring-[#B84A39]' : 'hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-[#7A6F66] mb-3">
                  <span>{club.number} • {club.subtitle}</span>
                  {club.id === 'healing-mail' && (
                    <span className="wax-seal w-6 h-6 rounded-full inline-flex items-center justify-center text-[#FAF6F0] text-[10px]" title="Handcrafted Candle Wax Card">
                      ✦
                    </span>
                  )}
                </div>

                {/* Artwork Preview */}
                <div className="relative aspect-[4/3] w-full bg-[#EFE9DF] mb-5 overflow-hidden border border-[#E6DDD0]">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover"
                  />
                  {club.badge && (
                    <div className="absolute top-3 left-3 bg-[#FFFDF9]/95 px-2.5 py-1 text-[11px] font-mono text-[#8A2E20] border border-[#E2D8C8] flex items-center gap-1.5 shadow-sm">
                      <ShoppingBag className="w-3 h-3" /> {club.badge}
                    </div>
                  )}
                </div>

                {/* Title & Copy */}
                <h3 className="font-serif text-2xl text-[#2C2724] mb-2">
                  {club.title}
                </h3>
                <p className="text-sm text-[#4F4741] leading-relaxed mb-4">
                  {club.description}
                </p>
              </div>

              {/* Footer Artifact & Selection Button */}
              <div className="pt-4 border-t border-dashed border-[#DFD5C7]">
                <p className="text-xs font-serif italic text-[#6E6359] mb-4 flex items-center gap-2">
                  {club.id === 'bangkok-coffee' && <Coffee className="w-3.5 h-3.5 text-[#6F4E37]" />}
                  {club.id === 'thai-recipes' && <UtensilsCrossed className="w-3.5 h-3.5 text-[#B84A39]" />}
                  {club.id === 'healing-mail' && <Flame className="w-3.5 h-3.5 text-[#8A2E20]" />}
                  {club.id === 'meditation-mail' && <Wind className="w-3.5 h-3.5 text-[#4A6B5D]" />}
                  {club.artifactHighlight}
                </p>

                <button
                  onClick={() => onToggleClub(club.id)}
                  className={`w-full py-2.5 px-4 font-serif text-sm transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-[#B84A39] text-[#FAF6F0] border-[#B84A39]'
                      : 'bg-transparent text-[#2C2724] border-[#C8BBAE] hover:border-[#2C2724]'
                  }`}
                >
                  {isSelected ? '✓ Included in Your Envelope' : '+ Choose This Letter'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}