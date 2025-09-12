// components/KeyValue.tsx
export default function KeyValue() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto text-center">
  <div>
    <h3 className="font-semibold text-lg">📦 Spara tid på lagret</h3>
    <p className="text-gray-600">Spåra och hantera lager effektivt utan extra personal.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">📢 Förbättra marknadsföringen</h3>
    <p className="text-gray-600">Automatiserat AI-innehåll för att marknadsföra din meny och dina produkter.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">✅ EU-kompatibel</h3>
    <p className="text-gray-600">Följ lagar enkelt med korrekta etiketter och orderhistorik.</p>
  </div>
</section>

  );
}