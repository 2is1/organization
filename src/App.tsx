import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AppsSection } from "./components/AppsSection";
import { WhySection } from "./components/WhySection";
import { DeploySection } from "./components/DeploySection";
import { Contribute } from "./components/Contribute";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-200 antialiased selection:bg-cyan-400/30">
      <Nav />
      <main>
        <Hero />
        <AppsSection />
        <WhySection />
        <DeploySection />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}
