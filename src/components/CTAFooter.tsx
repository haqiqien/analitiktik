import { ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/6287756846953";

export default function CTAFooter() {
  return (
    <footer id="reservasi" className="bg-oxford">
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pastikan Bab 4 Anda Terselesaikan dengan Presisi
            <span className="text-gold">.</span>
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed max-w-xl mx-auto">
            Konsultasikan kebutuhan analisis data Anda sekarang. Kami siap
            membantu dari perencanaan metodologi hingga interpretasi akhir.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-10 px-8 py-4 bg-gold text-oxford font-bold rounded-lg hover:bg-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Chat via WhatsApp (0877-5684-6953)
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40">
            &copy; 2026 Analitiktik. Data Research &amp; Consulting.
          </p>
          <p className="text-sm text-white/40">Surakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
