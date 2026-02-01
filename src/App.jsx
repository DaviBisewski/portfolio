import Header from "./components/Header";
import useReveal from "./animations/useReveal";
import Hero from "./components/Hero";
import TechBar from "./components/TechBar";
import SectionTitle from "./components/SectionTittle";
import ProjectSection from "./components/ProjectSection";
import CallToAction from "./components/CallToAction";
import GithubIcon from "./assets/img/github.png";
function App() {
 
  useReveal();
  return (
    <>
        <Header />
        <main>
        <Hero />
        <TechBar />
        <SectionTitle 
        small="EXPERIÊNCIAS" 
        big="Alguns Projetos"/>
        <ProjectSection />
        <CallToAction 
  smallText="GOSTOU DO QUE VIU?"
  largeText="Acompanhe mais projetos"
  link="https://github.com/DaviBisewski"
  Icon={GithubIcon}
/>
 <SectionTitle 
        small="ESTUDOS" 
        big="Meus Conhecimentos"/>

        </main>


    </>
  );
}

export default App;
