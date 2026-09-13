import { GlobeIcon, LanguagesIcon, ListCheckIcon, MegaphoneIcon, PlusSquareIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Work() {
  const work = [
    {
      title: "เริ่มต้นจากหมวดหมู่ หรือเปิดแผนที่",
      desc: "เริ่มต้นจากหมวดหมู่ หรือเปิดแผนที่เพื่อดูว่ามีอะไรอยู่ใกล้คุณบ้าง",
      icon: <ListCheckIcon className="h-8 w-8 text-[#d876ac]" />,
    },
    {
      title: "ใช้ตัวกรองเลือกตามประเทศและเมือง.",
      desc: "จำกัดขอบเขตให้เหลือเพียงสวีเดน เยอรมนี เนเธอร์แลนด์ หรือพื้นที่อื่นใดที่ชุมชนได้ขยายไปถึง",
     icon: <GlobeIcon className="h-8 w-8 text-[#d876ac]" />,
    },
    {
      title: "บันทึกและรับการแจ้งเตือน",
      desc: "เก็บรายการที่คุณสนใจไว้ แล้วรับการแจ้งเตือนเตือนความจำก่อนถึงวันหมดอายุของรายการ",
      icon: < PlusSquareIcon className="h-8 w-8 text-[#d876ac]" />,
     
    },
    {
      title: "ลงประกาศของคุณเองได้ฟรี",
      desc: "ลงประกาศฟรี เขียนเพียงครั้งเดียวได้ทั้งภาษาไทยและภาษาอังกฤษ",
      icon: <MegaphoneIcon className="h-8 w-8 text-[#d876ac]" />,
      
    },
    {
      title: "ใช้ภาษาไทยและภาษาอังกฤษ",
      desc: "ทุกหน้า ทุกรายการ ทั้งสองภาษา",
      icon: <LanguagesIcon className="h-8 w-8 text-[#d876ac]" />,
      
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#d876ac] dark:text-white sm:text-4xl">
        
          <span className="text-[#422646]">How it</span>    WORKs
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          ใช้บริการของเราได้ง่าย ๆ เพียงไม่กี่ขั้นตอน

        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((work) => (
            <Card key={work.title} className="shadow-lg hover:shadow-xl transition">
              <CardHeader className="flex flex-col items-center">
                {work.icon}
                <CardTitle className="mt-4">{work.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{work.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}