import React from 'react';

// Sample data for the categories
const categories = [
  {
    id: 1,
    title: 'วันพระ งานวัด & ตลาดนัด',
    description: 'ปฏิทินวันพระ สงกรานต์ ลอยกระทง และงานทำบุญตามวัดไทยทั่วยุโรป รวมถึงตลาดนัดสุดสัปดาห์ งานอาหาร และกิจกรรมต่างๆ ที่เกิดขึ้นในแต่ละพื้นที่',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'ซื้อขายสินค้า & อุปกรณ์ร้านอาหาร',
    description: 'พื้นที่สำหรับซื้อขายสินค้าคงเหลือ วัตถุดิบจำนวนมาก อุปกรณ์ครัว ตู้แช่ ตู้เย็น และอุปกรณ์สำหรับจัดร้าน ไม่ว่าจะมีอะไรเหลือจากร้าน หรือกำลังมองหาของที่ต้องใช้ — ลองประกาศและค้นหาได้ที่นี่',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'รวมกลุ่มสั่งซื้อสินค้า',
    description: 'บางครั้งการนำเข้าสินค้าหนึ่งพาเลทก็ใหญ่เกินกว่าร้านเดียวหรือครัวเล็กๆ จะสั่งไหว ลองหาคนในพื้นที่ที่ต้องการสินค้าเดียวกัน แล้วรวมออเดอร์กัน แบ่งกันสั่ง แบ่งค่าขนส่ง และรับของร่วมกัน',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'ซื้อ-ขาย-ให้เช่า กิจการ',
    description: 'ร้านอาหารไทย ร้าน Takeaway และร้านขายของชำที่กำลังหาเจ้าของกิจการใหม่ รวมถึงพื้นที่ให้เช่า หุ้นส่วน อุปกรณ์ร้าน และการขายกิจการพร้อมฐานลูกค้า — ค้นหาโอกาสทางธุรกิจที่มีอยู่ในยุโรปได้ที่นี่',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'สวนครัวไทยในยุโรป',
    description: 'สมุนไพรและผักไทยที่ปลูกในสวนและโรงเรือนทั่วยุโรป ไม่ว่าจะเป็นกะเพรา ตะไคร้ ข่า ใบเตย มะกรูด หรือถั่วฝักยาว เชื่อมต่อกับคนปลูก แลกเปลี่ยนเมล็ดพันธุ์และกิ่งพันธุ์ และดูว่าแต่ละฤดูกาลมีอะไรให้ปลูกหรือเก็บเกี่ยวบ้าง',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

export const CategoryTils: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 dark:text-white mb-4 tracking-tight">
            What's on <span className="text-violet-400">Somtam</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            5 เรื่องที่คนในชุมชนถามหาและช่วยกันบอกต่อ — รวมไว้ให้ในที่เดียว
          </p>
        </div>

        {/* 
          Cards Grid 
          Using flex and flex-wrap with justify-center gracefully handles the 5 cards,
          centering the bottom 2 cards automatically on large screens.
        */}
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Anchored Icon */}
             <div className="w-14 h-14 mx-auto bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                {category.icon}
              </div>

              {/* Title (Centered) */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                {category.title}
              </h3>

              {/* Body (Left-aligned for readability, relaxed line height) */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-loose text-left">
                {category.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryTils;
