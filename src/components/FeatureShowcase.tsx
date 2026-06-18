import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function FeatureShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="border-b structural-border bg-black">
      {/* Full Bleed Break */}
      <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-[#111] border-b structural-border relative overflow-hidden flex items-center justify-center">
        <div className="text-white/20 font-mono text-sm tracking-widest uppercase">
          [ Full Bleed Video Break: Platform Onboarding & Navigation Flow ]
        </div>
      </div>

      <div className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        
        {/* Deep-dive 1 */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-accent text-sm font-mono uppercase tracking-widest">
              Gestão de Capacidade
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
              A precisão invisível das operações diárias.
            </h3>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Desenvolvemos uma view de gestão de manifestos que permite aos operadores visualizarem centenas de pax de relance. Drag-and-drop intuitivo para re-alocações de última hora, mantendo a integridade dos limites das viaturas.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="aspect-[4/3] bg-[#141414] border structural-border rounded-xl flex items-center justify-center text-white/20 font-mono">
              [ Interactive Capacity Management UI Placeholder ]
            </div>
          </motion.div>
        </div>

        {/* Deep-dive 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
             <div className="aspect-[4/3] bg-[#141414] border structural-border rounded-xl flex items-center justify-center text-white/20 font-mono">
              [ Interactive Interactive Multi-tabs Metric Dashboard ]
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 order-1 lg:order-2"
          >
            <div className="text-accent text-sm font-mono uppercase tracking-widest">
              Performance Financeira
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
              Visibilidade total sobre a rentabilidade.
            </h3>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Dashboards interativos que transformam dados transacionais complexos em insights acionáveis. Múltiplos níveis de permissão asseguram que a equipa financeira tem acesso a relatórios rigorosos de payout de OTAs e agentes.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
