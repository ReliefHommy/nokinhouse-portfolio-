// app/wedesign/page.tsx


import CategoryBar from '@/components/CategoryBar';
import CategoryTiles from '@/components/CategoryTiles';
import HeroSociety from '@/components/HeroSociety';
import MainNavbar from '@/components/MainNavbar';

export default function Home() {
  return (
    <main>
     
      <MainNavbar/>
      <CategoryBar/>
      <HeroSociety
      />
      < CategoryTiles/>
    </main>
  );
}