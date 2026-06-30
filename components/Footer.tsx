import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t border-zinc-200 bg-white py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-bold mb-4">Pavent</div>
            <p className="text-sm text-zinc-600 mb-4">
              **Prisdatabasen är ett kollektivt initiativ för en mer transparent vardagsekonomi.**

Vi tror att konsumenter ska kunna se vad saker faktiskt kostar, inte bara vad butikerna väljer att kalla ett erbjudande. Därför bygger vi en tjänst som samlar in och analyserar historiska priser på vanliga hushållsvaror för att ge en tydligare bild av hur priserna utvecklas över tid.

Prisdatabasen är gratis att använda och kombinerar automatiserad prisbevakning från butikernas egna webbplatser med manuella prisinslag från verkligheten. Genom att jämföra flera källor och räkna fram genomsnittliga prisnivåer kan vi visa om en vara verkligen är billig eller bara ser ut att vara det.

Vi vill också fånga det mänskliga perspektivet. Därför söker vi personer som vill bidra genom att ibland rapportera in aktuella priser från sin lokala butik. Som bidragsgivare blir du en del av ett växande nätverk som hjälper till att skapa en mer rättvis bild av vardagens kostnader.

Vill du vara med och bygga tjänsten tillsammans med oss? Hör gärna av dig. Engagemanget i projektet är en viktig del av resan, och tidiga medverkande kommer att få möjlighet att ta del av framtida förmåner kopplade till projektets utveckling.


            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Hem</Link></li>
              <li><Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link></li>
              <li><Link href="/kontakt" className="hover:text-blue-600 transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Följ oss</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">GitHub</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Pavent.
        </div>
      </div>
    </footer>
  );
}