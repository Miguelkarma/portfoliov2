import { Github, ExternalLink } from "lucide-react";
import { projects, type ProjectType } from "@/elements/constants";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  staggerContainer,
  lazyLoad,
} from "@/animation/motion-variant";

import flux from "@/assets/Flux.png";
import CalorieCalc from "@/assets/CalorieCalc.png";
import VetCare from "@/assets/VetCare.png";
import portfolio from "@/assets/portfolio.png";

const imageMap = {
  flux: flux,
  VetCare: VetCare,
  CalorieCalc: CalorieCalc,
  portfolio: portfolio,
};

export default function ProjectShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projectsWithImages = projects.map((project) => ({
    ...project,
    image: imageMap[project.image as keyof typeof imageMap],
  }));

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent text-white py-50"
    >
      <div className="max-w-6xl mx-auto px-4" id="projects">
        <motion.div
          initial="start"
          animate={isInView ? "end" : "start"}
          variants={fadeInUp}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
            Projects
          </h2>
          <p className="mt-1 text-muted">
            Showcasing my latest web development work and experiments.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsWithImages.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function Project({
  project,
  index,
}: {
  project: ProjectType & { image: string };
  index: number;
}) {
  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true, amount: 0.2 });

  const contentVariant = index % 2 === 0 ? fadeInRight : fadeInLeft;
  const imageVariant = index % 2 === 0 ? fadeInLeft : fadeInRight;

  return (
    <motion.div
      ref={projectRef}
      variants={lazyLoad}
      custom={index}
      className="mt-12 flex flex-col lg:flex-row gap-6 rounded-lg"
    >
      {/* Project Image Section */}
      <motion.div
        variants={imageVariant}
        initial="start"
        animate={isProjectInView ? "end" : "start"}
        className="lg:w-1/2 relative overflow-hidden rounded-l-md"
      >
        <motion.div
          className="overflow-hidden"
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div className="relative transition-opacity duration-300">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={
                isProjectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card p-6 font-mono text-center rounded-t-lg"
            >
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2 mb-2">
                {project.overlayTitle}
              </h3>
              <p className="text-sm text-muted">{project.overlayDescription}</p>
            </motion.div>

            <motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isProjectInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-emerald-300 text-xs font-mono overflow-hidden"
                style={{ height: "280px" }}
              >
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    isProjectInView
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ delay: 0.7, duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="rounded-b-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={contentVariant}
        initial="start"
        animate={isProjectInView ? "end" : "start"}
        className="lg:w-1/2 flex flex-col items-end justify-center text-end p-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={
            isProjectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2"
        >
          {project.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          animate={
            isProjectInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
          }
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="mb-6 w-full bg-card p-2 rounded-lg"
        >
          <p className="text-primary">{project.description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isProjectInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6,
              },
            },
          }}
          className="flex flex-wrap justify-end gap-4 mb-4 font-mono text-sm text-gray-500"
        >
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3 },
                },
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isProjectInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.2, color: "#6366f1" }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-500 transition-colors"
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#14b8a6" }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-500 transition-colors"
          >
            <ExternalLink size={22} />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
