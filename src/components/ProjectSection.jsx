import ProjectCard from "./ProjectCard";

import CasaFrango from "../assets/img/posterLanding.png";
import Bensa from "../assets/img/posterBensa.png";
import Outro from "../assets/img/posterBensa.png";

export default function ProjectsSection() {

  const projects = [
    {
      year: "2026",
      title: "Landing Page La Casa Di Frango",
      image: CasaFrango,
      link: "https://casadifrango.netlify.app",
      bg: "bg-green-900"
    },
    {
      year: "2024",
      title: "Bensa StreetWear",
      image: Bensa,
      link: "https://bensa.vercel.app",
      bg: "bg-red-600"
    },
    {
      year: "2025",
      title: "Outro Projeto",
      image: Outro,
      link: "#",
      bg: "bg-zinc-800"
    },
  ];

  return (
    <section className="max-w-[1300px] mx-auto px-6 py-24">

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
