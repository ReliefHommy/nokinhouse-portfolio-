// app/components/Hero.tsx
import Link from 'next/link';
export default function Hero() {
  return (
     <section
      className="relative w-full bg-white bg-cover bg-center h-[80vh] flex items-center justify-left text-center"
      style={{ backgroundImage: "url('/hero_nih02.png')" }} // Replace with your real image
    >
      {/* Overlay */}
      

      {/* Content */}
      <div className="relative z-10 text-black p-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-medium mb-6 text-center">
  ÖKA FÖRSÄLJNINGEN OCH FÖRENKLA<span className="text-white font-bold"> DIN RESTAURANGHANTERING</span> 
</h2>

        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-black hover:bg-green-600 text-white px-6 py-3 rounded font-medium transition"
          >
            CONTACT US
          </Link>
          <Link
            href="/recipes"
            className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded font-medium transition"
          >
            SERVICES
          </Link>
        

        </div>
      </div>
    </section>

  );
}
