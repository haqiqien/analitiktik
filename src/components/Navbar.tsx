import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const WA_LINK = 'https://wa.me/6287756846953';

const navLinks = [
  { label: 'Layanan Riset', href: '#layanan' },
  { label: 'Metodologi', href: '#metodologi' },
  { label: 'Profil', href: '#profil' },
  { label: 'Reservasi', href: '#reservasi' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        <a href="#" className="font-serif font-bold text-2xl text-oxford tracking-tight">
          Analitiktik<span className="text-gold">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-oxford/80 hover:text-oxford transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-oxford text-white text-sm font-semibold rounded-lg hover:bg-oxford/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Hubungi WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-oxford"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ivory border-t border-gray-200/60 px-6 pb-6 pt-2 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-oxford/80 hover:text-oxford py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-2.5 bg-oxford text-white text-sm font-semibold rounded-lg hover:bg-oxford/90 transition-colors"
          >
            Hubungi WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
