import Header from "./components/Header";
import useReveal from "./animations/useReveal";
import Hero from "./components/Hero";

function App() {
  useReveal();
  return (
    <>
      <div className="w-[90%] mx-auto">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
