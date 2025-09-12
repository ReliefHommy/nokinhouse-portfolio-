
// components/IntroVideo.tsx
export default function IntroVideo() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Förvandla din matbutik med AI-drivna verktyg
          </h2>
          <p className="text-gray-700 text-lg">
            och expertutvecklad SaaS – skräddarsytt för hållbara livsmedelsföretag i Sverige.
          </p>
        </div>

        {/* Right Column: Video */}
        <div className="w-full">
          <video
            controls
            className="w-full rounded-xl shadow-lg border border-gray-200"
            poster="/video-thumbnail.jpg" // Optional: preview image
          >
            <source src="/se_1.mp4" type="video/mp4" />
            Din webbläsare stöder inte video-taggen.
          </video>
        </div>
      </div>
    </section>
  )
}
