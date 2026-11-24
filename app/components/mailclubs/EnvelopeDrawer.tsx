'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const CLUB_LABELS: Record<string, string> = {
  'draw-the-city': 'Draw The Whole City (Sweden & Venues)',
  'bangkok-coffee': 'Bangkok Coffee Corners',
  'thai-recipes': 'Thai Recipes Mail Club (+ Grocery Access)',
  'healing-mail': 'Healing Mail Club (Wax Card & Essay)',
  'meditation-mail': 'Meditation Mail Club',
};

interface EnvelopeDrawerProps {
  selectedClubs: string[];
  onRemoveClub: (id: string) => void;
}

export default function EnvelopeDrawer({ selectedClubs, onRemoveClub }: EnvelopeDrawerProps) {
  const [email, setEmail] = useState('');
  const [sealed, setSealed] = useState(false);

  const handleSealEnvelope = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedClubs.length === 0) return;
    setSealed(true);
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <div className="paper-card p-8 md:p-10 border-2 border-[#D8CEC0] relative">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-5 h-5 text-[#B84A39]" />
          <h2 className="font-serif text-2xl text-[#2C2724]">
            Your Custom Studio Envelope
          </h2>
        </div>

        {sealed ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#4A6B5D] mx-auto" />
            <h3 className="font-serif text-2xl text-[#2C2724]">
              Your Envelope is Sealed &amp; Addressed
            </h3>
            <p className="text-sm text-[#5A5048] max-w-md mx-auto">
              Nok has reserved your selected dispatches for next month’s studio post. A confirmation note is on its way to <span className="font-semibold">{email}</span>.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-[#5A5048] mb-6">
              Select one or combine several clubs above. Every dispatch is packed by hand at Nok In House Studio.
            </p>

            {selectedClubs.length === 0 ? (
              <div className="p-6 bg-[#FAF6F0] border border-dashed border-[#C8BBAE] text-center font-serif italic text-[#7A6F66] mb-6">
                Your envelope is currently empty—choose a letter above to begin.
              </div>
            ) : (
              <ul className="space-y-2.5 mb-6">
                {selectedClubs.map((id) => (
                  <li
                    key={id}
                    className="flex items-center justify-between bg-[#FAF6F0] px-4 py-2.5 border border-[#E5DDD0] text-sm"
                  >
                    <span className="font-serif text-[#2C2724]">
                      ✦ {CLUB_LABELS[id]}
                    </span>
                    <button
                      onClick={() => onRemoveClub(id)}
                      className="text-xs text-[#8A2E20] hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <form onSubmit={handleSealEnvelope} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Where should we send your postal confirmation?"
                className="flex-1 px-4 py-3 bg-[#FAF6F0] border border-[#C8BBAE] text-sm focus:outline-none focus:border-[#2C2724]"
              />
              <button
                type="submit"
                disabled={selectedClubs.length === 0}
                className="wax-seal text-[#FAF6F0] font-serif px-6 py-3 text-sm tracking-wide cursor-pointer disabled:opacity-40 transition-opacity"
              >
                Seal &amp; Subscribe ({selectedClubs.length})
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}