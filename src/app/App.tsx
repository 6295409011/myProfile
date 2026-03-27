import { Hero } from './components/Hero';
import { DraggableSkills } from './components/DraggableSkills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <DraggableSkills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
