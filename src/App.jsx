import Hero from "./components/main/Hero";

const App = () => {
  return (
    <main className="h-full w-full">
      <div className="flex  flex-col h-[850px] gap-20">
        <Hero />
      </div>
    </main>
  );
};

export default App;
