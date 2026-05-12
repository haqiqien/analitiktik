const tools = [
  'IBM SPSS',
  'SmartPLS',
  'R Studio',
  'Microsoft Power BI',
  'Microsoft Excel',
];

export default function TechStack() {
  const doubled = [...tools, ...tools];

  return (
    <section id="profil" className="py-16 lg:py-20 bg-oxford overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold text-gold tracking-widest uppercase mb-3 text-center">
          Instrumen
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white text-center">
          Instrumen Analisis yang Kami Gunakan
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-oxford to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-oxford to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((tool, i) => (
            <div
              key={`${tool}-${i}`}
              className="flex-shrink-0 mx-4 px-8 py-4 bg-white/10 border border-white/15 rounded-xl backdrop-blur-sm"
            >
              <span className="text-white font-semibold text-sm whitespace-nowrap tracking-wide">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
