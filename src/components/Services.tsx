import { BarChart, Activity, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

function ServiceCard({ icon: Icon, title, text }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="absolute top-0 left-8 w-12 h-1 bg-gold rounded-b-full" />
      <div className="w-12 h-12 bg-oxford/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-oxford/10 transition-colors duration-300">
        <Icon size={24} className="text-oxford" />
      </div>
      <h3 className="font-serif text-xl font-bold text-oxford mb-3">{title}</h3>
      <p className="text-sm text-oxford/65 leading-relaxed">{text}</p>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: BarChart,
    title: 'Uji Statistik & Multivariat',
    text: 'Pengujian asumsi klasik, regresi, ANOVA, hingga pemodelan struktural (SEM-PLS/AMOS). Dilengkapi narasi interpretasi standar jurnal.',
  },
  {
    icon: Activity,
    title: 'Analisis Data Kesehatan & Gizi',
    text: 'Pengolahan data riset klinis, survei epidemiologi, dan analisis komparatif terapan untuk penelitian kesehatan tingkat lanjut.',
  },
  {
    icon: BookOpen,
    title: 'Bimbingan & Metodologi',
    text: 'Sesi mentoring privat (1-on-1) untuk pemahaman output, rasionalisasi metode, dan persiapan pendadaran/sidang.',
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase mb-3">
            Layanan Kami
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxford">
            Layanan Dukungan Akademik
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
