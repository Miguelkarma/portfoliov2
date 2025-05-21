import type { ProjectCardProps } from "@/elements/constants";
import flux from "@/assets/Flux.png";
import CalorieCalc from "@/assets/CalorieCalc.png";
import VetCare from "@/assets/VetCare.png";
import portfolio from "@/assets/portfolio.png";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  fadeInScale,
  badgeVariants,
  socialLinkVariants,
} from "@/animation/motion-variant";

const ProjectCard = ({
  title,
  description,
  tags,
  github,
  live,
  image,
  overlayTitle,
  overlayDescription,
}: ProjectCardProps) => {
  const getImageSrc = (imageName: string): string | undefined => {
    switch (imageName) {
      case "flux":
        return flux;
      case "VetCare":
        return VetCare;
      case "portfolio":
        return portfolio;
      case "CalorieCalc":
        return CalorieCalc;
      default:
        return undefined;
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="start"
      whileInView="end"
      viewport={{ once: true, amount: 0.3 }}
      className="group flex flex-col justify-start items-start gap-2 max-w-3xl max-sm:w-full h-auto min-h-56 duration-500 relative rounded-lg p-4 bg-card hover:-translate-y-2 hover:shadow-lg shadow-popover"
    >
      <motion.div
        variants={fadeInScale}
        initial="start"
        whileInView="end"
        className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-48 -right-10 max-sm:right-1 max-sm:-bottom-47 max-sm:w-3/5 w-2/3 h-auto rounded-lg overflow-hidden bg-popover max-sm:h-4/5"
      >
        {image && (
          <img
            src={getImageSrc(image)}
            alt={title || "Project screenshot"}
            className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity"
          />
        )}

        {(overlayTitle || overlayDescription) && (
          <motion.div
            variants={fadeInUp}
            className="absolute inset-0 bg-transparent opacity-50 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {overlayTitle && (
              <p className="text-xs font-semibold text-white">{overlayTitle}</p>
            )}
            {overlayDescription && (
              <p className="text-xs text-gray-200">{overlayDescription}</p>
            )}
          </motion.div>
        )}
      </motion.div>

      <motion.div className="relative z-10 w-full" variants={fadeInUp}>
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-logo via-dev to-dev"
        >
          {title || "Project Title"}
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-primary line-clamp-3">
          {description || "Project description"}
        </motion.p>

        {tags && tags.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-1 mt-3"
          >
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                variants={badgeVariants}
                className="text-xs bg-transparent text-muted px-2 py-1 rounded"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-2 mt-6"
        >
          {live && (
            <motion.a
              custom={0}
              variants={socialLinkVariants}
              whileHover="hover"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-logo text-muted rounded p-2 inline-block text-sm transition"
            >
              <ExternalLink size={18} />
            </motion.a>
          )}

          {github && (
            <motion.a
              custom={1}
              variants={socialLinkVariants}
              whileHover="hover"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-logo text-muted rounded p-2 inline-block text-sm transition"
            >
              <Github size={18} />
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
