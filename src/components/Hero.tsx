import { ArrowRight, ChevronDown } from "lucide-react";

const WA_LINK = "https://wa.me/6287756846953";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 bg-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002147' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-oxford/5 border border-oxford/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-xs font-semibold text-oxford/70 tracking-wide uppercase">
              Data Research & Consulting
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-oxford leading-[1.15] tracking-tight">
            Validasi Riset Anda dengan Analisis Data{" "}
            <span className="relative">
              Terkalibrasi
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gold/40 rounded-full" />
            </span>
            <span className="text-gold">.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-oxford/70 leading-relaxed max-w-2xl">
            Layanan konsultasi metodologi dan pengolahan statistik kompleks
            untuk Skripsi, Tesis, Disertasi, dan Publikasi Jurnal. Ditangani
            secara eksklusif oleh pakar berlatar belakang Magister Ilmu Gizi
            Universitas Sebelas Maret (UNS)).
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-oxford text-white font-semibold rounded-lg hover:bg-oxford/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Jadwalkan Konsultasi
              <ArrowRight size={18} />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-oxford/20 text-oxford font-semibold rounded-lg hover:border-oxford/40 hover:bg-oxford/5 transition-all duration-200"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>

      <a
        href="#layanan"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-oxford/30 hover:text-oxford/60 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
