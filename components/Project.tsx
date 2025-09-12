// components/Projects.tsx
export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl shadow">
          <h3 className="text-xl font-bold">STM Marketplace</h3>
          <p className="text-gray-600">Thai Food SaaS Platform</p>
        </div>
        <div className="p-4 border rounded-xl shadow">
          <h3 className="text-xl font-bold">Mayan Puzzle Game</h3>
          <p className="text-gray-600">Escape Room with Flutter</p>
        </div>
        <div className="p-4 border rounded-xl shadow">
          <h3 className="text-xl font-bold">Angkor Wat Level</h3>
          <p className="text-gray-600">Historical Puzzle Design</p>
        </div>
        <div className="p-4 border rounded-xl shadow">
          <h3 className="text-xl font-bold">Healing Game Creator Suite</h3>
          <p className="text-gray-600">Spiritual Wellness Game Tools</p>
        </div>
      </div>
    </section>
  );
}