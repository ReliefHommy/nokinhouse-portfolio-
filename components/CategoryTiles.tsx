import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Church, CookingPot, ShoppingBasket, StoreIcon, Leaf } from "lucide-react"
import React from 'react';

export default function CategoryTiles() {
  const services = [
    {
      en_title: "Temple & Market",
      th_title: "วันพระ งานวัด & ตลาดนัด",
      desc: "ปฏิทินวันพระ สงกรานต์ ลอยกระทง และงานทำบุญตามวัดไทยทั่วยุโรป รวมถึงตลาดนัดสุดสัปดาห์ งานอาหาร และกิจกรรมต่าง ๆ ที่เกิดขึ้นในแต่ละพื้นที่",
      icon: <Church className="h-8 w-8 text-[#d876ac]" />,
    },
    {
      en_title: "Buy & Sell",
      th_title: "ซื้อขายสินค้า & อุปกรณ์ร้านอาหาร",
      desc: "พื้นที่สำหรับซื้อขายสินค้าคงเหลือ วัตถุดิบจำนวนมาก อุปกรณ์ครัว ตู้แช่ ตู้เย็น และอุปกรณ์สำหรับจัดร้าน ไม่ว่าจะมีอะไรเหลือจากร้าน หรือกำลังมองหาของที่ต้องใช้ — ลองประกาศและค้นหาได้ที่นี่",
      icon: <CookingPot className="h-8 w-8 text-[#d876ac]" />,
    },
    {
      en_title: "Group Buying",
      th_title: "รวมกลุ่มสั่งซื้อสินค้า",
      desc: "บางครั้งการนำเข้าสินค้าหนึ่งพาเลทก็ใหญ่เกินกว่าร้านเดียวหรือครัวเล็ก ๆ จะสั่งไหว ลองหาคนในพื้นที่ที่ต้องการสินค้าเดียวกัน แล้วรวมออเดอร์กัน แบ่งกันสั่ง แบ่งค่าขนส่ง และรับของร่วมกัน",
      icon: <ShoppingBasket className="h-8 w-8 text-[#d876ac]" />,
    },
    {
      en_title: "Business",
      th_title: "ซื้อ-ขาย-ให้เข่า กิจการ",
      desc: "ร้านอาหารไทย ร้าน Takeaway และร้านขายของชำที่กำลังหาเจ้าของกิจการใหม่ รวมถึงพื้นที่ให้เช่า หุ้นส่วน อุปกรณ์ร้าน และการขายกิจการพร้อมฐานลูกค้า — ค้นหาโอกาสทางธุรกิจที่มีอยู่ในยุโรปได้ที่นี่",
      icon: <StoreIcon className="h-8 w-8 text-[#d876ac]" />,
    },
    {
      en_title: "Farmer & Grower",
      th_title: "สวนครัวไทยในยุโรป",
      desc: "สมุนไพรและผักไทยที่ปลูกในสวนและโรงเรือนทั่วยุโรป ไม่ว่าจะเป็นกะเพรา ตะไคร้ ข่า ใบเตย มะกรูด หรือถั่วฝักยาว เชื่อมต่อกับคนปลูก แลกเปลี่ยนเมล็ดพันธุ์และกิ่งพันธุ์ และดูว่าแต่ละฤดูกาลมีอะไรให้ปลูกหรือเก็บเกี่ยวบ้าง",
      icon: <Leaf className="h-8 w-8 text-[#d876ac]" />,
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#d876ac] dark:text-white sm:text-4xl">
          <span className="text-[#422646]">What&apos;s on</span> SOMTAM
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
         5 เรื่องที่คนในชุมชนถามหาและช่วยกันบอกต่อ — รวมไว้ให้ในที่เดียว
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.en_title} className="shadow-lg hover:shadow-xl transition duration-300">
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.en_title}</CardTitle>
                <CardTitle className="mt-4">{service.th_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
