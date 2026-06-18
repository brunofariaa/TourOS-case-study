import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { value: "+10", label: "Anos de Evolução Contínua" },
  { value: "99.9%", label: "Uptime Garantido" },
  { value: "0", label: "Fricção na Escalabilidade" }
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-24">
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">
              O impacto de um sistema unificado.
            </h2>
          </div>
          <div>
            <p className="text-xl text-black/70 font-light leading-relaxed">
              Ao centralizar as operações, faturação, e distribuição no TourOS, os operadores puderam libertar a sua atenção da gestão caótica de sistemas fragmentados para o que realmente importa: a qualidade da experiência do passageiro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 border-t border-black/10 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-4">{stat.value}</div>
              <div className="text-sm font-mono tracking-widest text-black/50 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
