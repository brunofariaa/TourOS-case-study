import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#050505] border-t structural-border text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-display font-bold text-2xl tracking-tighter">Primariu.</span>
          <div className="mt-4 text-white/40 text-sm font-mono">
            Digital craftsmanship for complex systems.
          </div>
        </div>
        
        <div className="flex md:justify-end">
          <a href="#" className="inline-flex items-center gap-4 text-white hover:text-accent transition-colors duration-300 font-display text-xl md:text-2xl">
            Iniciar um projeto
            <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
