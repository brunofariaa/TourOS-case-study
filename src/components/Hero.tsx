import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 border-b structural-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
        
        <div className="lg:col-span-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-sm font-mono tracking-widest text-white/50 uppercase"
          >
            <span>Caso de Estudo</span>
            <span className="w-8 h-px bg-white/20"></span>
            <span>TourOS by Primariu</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-white leading-[1.05]"
          >
            Uma década a construir <br/>
            <span className="text-white/40">turismo digital</span> em Portugal.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 lg:pb-4 space-y-8"
        >
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            O sistema operativo definitivo para a gestão de operações turísticas. Desenhado para escalar dezenas de milhares de reservas com precisão invisível.
          </p>

          <a href="#showcase" className="inline-flex items-center gap-3 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300">
            Explorar a Plataforma
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Hero Media Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full mt-16 lg:mt-24 aspect-[21/9] bg-[#111] border structural-border rounded-xl md:rounded-2xl overflow-hidden relative group"
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
          [ Hero Looped UI Video Placeholder - Dashboard Overview ]
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 flex gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
      </motion.div>
    </section>
  );
}
