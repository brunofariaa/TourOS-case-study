import Hero from './components/Hero';
import Challenge from './components/Challenge';
import SolutionGrid from './components/SolutionGrid';
import FeatureShowcase from './components/FeatureShowcase';
import Impact from './components/Impact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-accent selection:text-white">
      {/* Simple Header */}
      <header className="fixed top-0 inset-x-0 h-24 border-b structural-border bg-[#fcfcfc]/80 backdrop-blur-xl z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="font-display font-bold text-xl tracking-tighter text-black">Primariu.</div>
        <nav className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-black/50 uppercase">
          <a href="#" className="hover:text-black transition-colors">Case Studies</a>
          <a href="#" className="hover:text-black transition-colors">Digital</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </header>

      <Hero />
      <Challenge />
      <SolutionGrid />
      <FeatureShowcase />
      <Impact />
      <Footer />
    </main>
  );
}
