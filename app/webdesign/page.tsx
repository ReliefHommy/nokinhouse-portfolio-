// app/wedesign/page.tsx


import CategoryBar from '@/components/CategoryBar';
import CategoryTiles from '@/components/CategoryTiles';
import HeroDirectory from '@/components/HeroDirectory';
import MainNavbar from '@/components/MainNavbar';
import Story from '@/components/Story';
import WhatIbuild from '@/components/whatIbuild';
import Work from '@/components/WhatIdo';



export default function Home() {
  return (
    <main>
     
      <MainNavbar/>
      <CategoryBar/>
      <HeroDirectory/>
      <CategoryTiles/>
      <Work/>
      <Story title={'Somtam ส้มตำเชื่อมโยงผู้คนเข้าด้วยกันโดยตรง'} body={'การสั่งซื้อ การชำระเงิน และการตกลงรายละเอียดต่างๆ เป็นเรื่องระหว่างคุณกับอีกฝ่ายหนึ่ง โดยเราจะไม่รับเงินหรือค่าคอมมิชชัน และไม่ได้เข้ามาเป็นตัวกลางในการทำธุรกรรมของคุณ'}/>
     
      <WhatIbuild />
    
      

    </main>
  );
}