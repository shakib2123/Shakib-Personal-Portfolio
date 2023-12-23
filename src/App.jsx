import Encryption from "./components/main/Encryption";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import Skills from "./components/main/Skills";
import StarsCanvas from "./components/main/StarBackground";

const App = () => {
  return (
    <main className="h-full w-full">
      <div className="flex  flex-col gap-20">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
};

export default App;
