import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Challenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 border-b structural-border scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        
        <div className="md:col-span-4">
          <h2 className="text-sm font-mono tracking-widest text-white/50 uppercase sticky top-32">
            Contexto & Desafio
          </h2>
        </div>

        <div className="md:col-span-8 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
              "A fragmentação de sistemas era o maior entrave ao crescimento. Precisávamos de uma fonte única de verdade para gerir desde a disponibilidade de frota até à faturação complexa."
            </h3>
            
            <div className="flex gap-12 font-mono text-sm text-white/40">
              <div>
                <span className="block text-white mb-2">Problema</span>
                Operações em silos.
              </div>
              <div>
                <span className="block text-white mb-2">Indústria</span>
                Turismo & Lazer
              </div>
              <div>
                <span className="block text-white mb-2">Escala</span>
                +500 Operadores
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-invert prose-lg max-w-none text-white/60 font-light"
          >
            <p>
              Operadores turísticos dependem de ecossistemas complexos: gestão de disponibilidade em tempo real, alocação de recursos físicos (guias, viaturas, barcos), complexidades de pricing dinâmico e canais de distribuição (OTAs). 
            </p>
            <p>
              A Primariu identificou a necessidade de criar o TourOS: não apenas um software de reservas, mas um <strong>Sistema Operativo completo</strong>. O desafio arquitetónico passou por desenhar uma interface que escondesse a complexidade brutal do backend, oferecendo uma experiência premium, rápida e sem atritos para os gestores de operações.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
