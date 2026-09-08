import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-[#f5f5f0]">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;