import Contact from "./components/main/Contact";
import Encryption from "./components/main/Encryption";
import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
import NavMenus from "./components/main/NavMenus";
import Navbar from "./components/main/Navbar";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";
import StarsCanvas from "./components/main/StarBackground";

const App = () => {
  return (
    <main className="h-full w-full">
      <div className="flex  flex-col gap-20">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <NavMenus />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
