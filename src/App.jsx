import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";
import Experience from "./sections/Experience";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-[#f5f5f0]">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Experience />
    </main>
  );
}

export default App;