import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, CreditCard, LayoutDashboard, CalendarCheck } from 'lucide-react';

const bentoItems = [
  {
    title: "Motor de Reservas B2B & B2C",
    description: "Sincronização bidirecional em tempo real com as maiores OTAs globais, garantindo zero double-bookings.",
    icon: CalendarCheck,
    span: "col-span-1 md:col-span-8",
    media: "[ High-fidelity Calendar Booking UI Placeholder ]"
  },
  {
    title: "Gestão Faturação",
    description: "Faturação certificada integrada com regras europeias.",
    icon: CreditCard,
    span: "col-span-1 md:col-span-4",
    media: "[ Invoice Dashboard ]"
  },
  {
    title: "Centro de Comando Operacional",
    description: "Alocação de frotas e equipas com base em disponibilidade e skills em tempo real.",
    icon: LayoutDashboard,
    span: "col-span-1 md:col-span-4",
    media: "[ Fleet View UI ]"
  },
  {
    title: "Relatórios & Analytics",
    description: "Controlo absoluto sobre métricas de performance e ocupação.",
    icon: Calendar,
    span: "col-span-1 md:col-span-8",
    media: "[ Analytics Metrics Chart UI Placeholder ]"
  }
];

export default function SolutionGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="py-24 md:py-40 px-6 md:px-12 border-b structural-border bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-medium text-black tracking-tight mb-6">
            Arquitetura de Controlo
          </h2>
          <p className="text-xl text-black/50 font-light leading-relaxed">
            Uma grid estrutural desenhada para velocidade. Cada módulo do TourOS foi otimizado para operações de alta cadência, focado na clareza densa de dados.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[400px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.span} relative bg-white border structural-border rounded-2xl p-8 overflow-hidden group flex flex-col justify-between`}
            >
              <div className="relative z-10">
                <item.icon className="w-8 h-8 text-black/30 mb-6 group-hover:text-black transition-colors duration-300" />
                <h3 className="text-2xl font-display text-black mb-2">{item.title}</h3>
                <p className="text-black/60 font-light pr-8">{item.description}</p>
              </div>
              
              <div className="absolute right-0 bottom-0 top-32 left-12 md:left-24 bg-[#fafafa] border-t border-l structural-border rounded-tl-2xl shadow-xl flex items-center justify-center text-sm font-mono text-black/40 truncate px-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                {item.media}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
