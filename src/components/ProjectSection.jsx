import ProjectCard from "./ProjectCard";

import CasaFrango from "../assets/img/posterLanding.png";
import Bensa from "../assets/img/posterBensa.png";
import Outro from "../assets/img/posterOutro.png";

export default function ProjectsSection() {

  const projects = [
    {
      year: "2026",
      title: "Landing Page La Casa Di Frango",
      image: CasaFrango,
      link: "https://casadifrango.netlify.app",
      
    },
    {
      year: "2024",
      title: "E-Commerce Bensa StreetWear",
      image: Bensa,
      link: "https://bensa.vercel.app",
     
    },
    {
      year: "2025",
      title: "Sistema La Casa Di Frango",
      image: Outro,
      link: "https://github.com/orgs/LaCasaDiFrango/repositories",
      
    },
  ];

  return (
    <section id="projetos" className="container mx-auto px-6 py-24">

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            year={project.year}
            title={project.title}
            image={project.image}
            link={project.link}
            bgColor={project.bg}
          />
        ))}
      </div>

    </section>
  );
}
