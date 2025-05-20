import { Github, ExternalLink } from "lucide-react";
import { projects, type ProjectType } from "@/elements/constants";

import flux from "@/assets/Flux.png";
import CalorieCalc from "@/assets/CalorieCalc.png";
import VetCare from "@/assets/VetCare.png";

const imageMap = {
  flux: flux,
  VetCare: VetCare,
  CalorieCalc: CalorieCalc,
};

export default function ProjectShowcase() {
  const projectsWithImages = projects.map((project) => ({
    ...project,
    image: imageMap[project.image as keyof typeof imageMap],
  }));

  return (
    <div className="bg-transparent text-white py-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="h-px bg-logo flex-grow  "></div>
          <div className=" p-3 rounded-full border !border-cyan-700 ">
            <h2 className="text-4xl font-bold justify-center text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2 mx-auto ">
              Projects
            </h2>
          </div>
          <div className="h-px bg-logo flex-grow "></div>
        </div>

        {projectsWithImages.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }: { project: ProjectType & { image: string } }) {
  const ProjectContent = () => (
    <div className="lg:w-1/2 flex flex-col items-end justify-center text-end p-6 ">
      <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-logo to-dev2">
        {project.title}
      </h3>

      <div className="mb-6 w-full">
        <p className="text-gray-300">{project.description}</p>
      </div>

      <div className="flex flex-wrap justify-end gap-4 mb-4 font-mono text-sm text-gray-400">
        {project.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
        >
          <Github size={22} />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 transition-colors"
        >
          <ExternalLink size={22} />
        </a>
      </div>
    </div>
  );

  const ProjectImage = () => (
    <div className="lg:w-1/2 relative overflow-hidden rounded-l-md ">
      <div className=" overflow-hidden">
        <div className="absolute inset-0  sm:bg-card sm:rounded-md md:bg-card lg:bg-gradient-to-l from-card via-card to-card pointer-events-none"></div>
        <div className="relative transition-opacity duration-300">
          <div className="bg-transparent p-6 font-mono text-center">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-logo to-dev2 mb-2">
              {project.overlayTitle}
            </h3>
            <p className="text-sm text-gray-300">
              {project.overlayDescription}
            </p>
          </div>

          <div>
            <div
              className="p-4 text-emerald-300 text-xs font-mono overflow-hidden"
              style={{ height: "280px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-12 flex flex-col lg:flex-row gap-6  sm:bg-card md:bg-card lg:bg-gradient-to-l from-cyan-900 via-card to-card rounded-lg  ">
      <ProjectImage />
      <ProjectContent />
    </div>
  );
}
