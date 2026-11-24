// app/page.tsx


'use client';

import React, { useState } from 'react';
import LetterHeader from './components/mailclubs/LetterHeader';
import HeroCityLetter from './components/mailclubs/HeroCityLetter';
import MailClubGrid from './components/mailclubs/MailClubGrid';
import EnvelopeDrawer from './components/mailclubs/EnvelopeDrawer';


export default function StmArtMailClubPage() {
  const [selectedClubs, setSelectedClubs] = useState<string[]>(['draw-the-city']);

  const toggleClub = (id: string) => {
    setSelectedClubs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen pb-20">
      <LetterHeader />

      {/* 1. Hero: Draw The Whole City (Sweden & Wedding Venues) */}
      <HeroCityLetter
        onSelectClub={toggleClub}
        isSelected={selectedClubs.includes('draw-the-city')}
      />

      {/* 2–5. Bangkok Coffee, Thai Recipes + Grocery, Healing Wax Card, Meditation */}
      <MailClubGrid
        selectedClubs={selectedClubs}
        onToggleClub={toggleClub}
      />

      {/* Interactive Envelope Bundler */}
      <EnvelopeDrawer
        selectedClubs={selectedClubs}
        onRemoveClub={toggleClub}
      />
    </main>
  );
}







