import ProjectCard from "./ui/project-card";
import { projects } from "@/elements/constants";

export default function ProjectShowcase() {
  return (
    <section className="container mx-auto py-10 mt-30 " id="projects">
      <div className="mb-16 text-center ">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dev to-dev2 inline-block font-display ">
          Projects
        </h2>
        <p className="mt-1 text-muted">
          Showcasing my latest web development work and experiments.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-60">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            github={project.github}
            live={project.live}
            overlayTitle={project.overlayTitle}
            overlayDescription={project.overlayDescription}
          />
        ))}
      </div>
    </section>
  );
}
