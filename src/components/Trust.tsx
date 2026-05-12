import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TrustItemProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

function TrustItem({ icon: Icon, title, subtitle }: TrustItemProps) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
        <Icon size={22} className="text-gold" />
      </div>
      <div>
        <h3 className="font-serif text-lg font-bold text-oxford">{title}</h3>
        <p className="text-sm text-oxford/65 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

const items: TrustItemProps[] = [
  {
    icon: ShieldCheck,
    title: 'Integritas Data',
    subtitle: 'Bebas Manipulasi & Plagiasi.',
  },
  {
    icon: CheckCircle,
    title: 'Rigoritas Metodologi',
    subtitle: 'Sesuai Kaidah Akademik Valid.',
  },
  {
    icon: Lock,
    title: 'Privasi Penelitian',
    subtitle: 'NDA untuk Data Sensitif Medis/Klinis.',
  },
];

export default function Trust() {
  return (
    <section id="metodologi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold text-gold tracking-widest uppercase mb-3">
              Mengapa Kami
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-oxford leading-tight">
              Standar Riset yang Kami Junjung
            </h2>
            <p className="mt-4 text-oxford/60 leading-relaxed">
              Setiap proses analisis kami jalankan dengan standar integritas tertinggi,
              memastikan riset Anda tidak hanya valid secara statistik, tetapi juga
              dapat dipertanggungjawabkan secara akademik.
            </p>
          </div>

          <div className="space-y-8">
            {items.map((item) => (
              <TrustItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
