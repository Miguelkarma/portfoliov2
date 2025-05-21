import { certifications } from "@/elements/constants";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  containerVariants,
  badgeVariants,
} from "@/animation/motion-variant";
import { useEffect } from "react";

declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit?: () => void;
    };
  }
}

export default function Certifications() {
  //fix for preline js conflicting with framer
  useEffect(() => {
    if (window.HSStaticMethods && window.HSStaticMethods.autoInit) {
      window.HSStaticMethods.autoInit();
    }
  }, [certifications]);

  return (
    <motion.div
      initial="start"
      whileInView="end"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-card rounded-xl border mt-12"
    >
      {/* Title */}
      <motion.div
        variants={fadeInUp}
        className="max-w-2xl mx-auto text-start mb-10 lg:mb-14"
        id="certs"
      >
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
          Certifications
        </h2>
        <p className="mt-1 text-muted">
          My completed courses and qualifications
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Accordion */}
        <div className="hs-accordion-group">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={badgeVariants}
              custom={index}
              className="hs-accordion bg-card-foreground border !border-gray-500 rounded-xl p-6 mb-4"
              id={`hs-certification-${cert.id}`}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-muted rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-muted"
                aria-controls={`hs-certification-collapse-${cert.id}`}
              >
                <motion.div
                  className="flex items-center gap-3"
                  variants={fadeInRight}
                >
                  <img
                    src={cert.author.avatar}
                    alt={cert.author.name}
                    className="size-8 rounded-full"
                  />
                  <span>
                    {cert.author.name} - {cert.author.date}
                  </span>
                </motion.div>
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id={`hs-certification-collapse-${cert.id}`}
                className={`hs-accordion-content ${
                  cert.id === 1 ? "open" : "hidden"
                } w-full overflow-hidden transition-[height] duration-300`}
                role="region"
                aria-labelledby={`hs-certification-${cert.id}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <motion.div className="md:w-1/2" variants={fadeInLeft}>
                    <img
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      className="rounded-lg w-full shadow-sm"
                    />
                  </motion.div>
                  <motion.div
                    className="md:w-1/2 text-muted"
                    variants={fadeInRight}
                  >
                    <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="mb-4">{cert.description}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Issued by {cert.author.name} on {cert.author.date}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
