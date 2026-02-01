import Header from "./components/Header";
import useReveal from "./animations/useReveal";
import Hero from "./components/Hero";
import TechBar from "./components/TechBar";

function App() {
  useReveal();
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <TechBar />
      </div>
    </>
  );
}

export default App;
