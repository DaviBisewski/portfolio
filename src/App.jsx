import Header from "./components/Header";
import useReveal from "./animations/useReveal";
import Hero from "./components/Hero";
import TechBar from "./components/TechBar";
import SectionTitle from "./components/SectionTittle";
import ProjectSection from "./components/ProjectSection";
import CallToAction from "./components/CallToAction";
import GithubIcon from "./assets/img/github.png";
import Map from "./components/Map";
import Arrow from "./assets/img/arrowright.png";
import Footer from "./components/Footer";
import FixedButtons from "./components/FixedButtons";
function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechBar />
        <SectionTitle small="EXPERIÊNCIAS" big="Alguns Projetos" />
        <ProjectSection />
        <CallToAction
          smallText="GOSTOU DO QUE VIU?"
          largeText="Acompanhe mais projetos"
          link="https://github.com/DaviBisewski"
          Icon={GithubIcon}
        />
        <SectionTitle small="ESTUDOS" big="Meus Conhecimentos" />
        <Map />
         <CallToAction
          smallText="PRECISA DE UM DEV?"
          largeText="Vamos trabalhar juntos"
          link="https://wa.me/5547984828184?text=Olá Davi! Gostaria de saber mais sobre seu trabalho."
          Icon={Arrow}
        />
        <FixedButtons />
      </main>
      <Footer />
    </>
  );
}

export default App;
