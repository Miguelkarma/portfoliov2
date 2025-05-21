import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  staggerContainer,
  socialLinkVariants,
} from "@/animation/motion-variant";

export default function Footer() {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/Miguelkarma",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/migzyr/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/paul-miguel-santos-17aa43320/",
    },
  ];

  return (
    <>
      <motion.footer
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div
          className="py-6 border-t !border-gray-500"
          variants={fadeInUp}
        >
          <div className="flex flex-wrap justify-between items-center gap-2">
            <motion.div variants={fadeInLeft}>
              <p className="text-sm text-muted">© 2025 Miguelkarma</p>
            </motion.div>

            {/* List */}
            <motion.ul
              className="flex flex-wrap items-center"
              variants={fadeInRight}
            >
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  className={`inline-block relative ${
                    index !== socialLinks.length - 1
                      ? "pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600"
                      : "pe-4 text-xs"
                  }`}
                  custom={index}
                  variants={socialLinkVariants}
                >
                  <motion.a
                    className="text-sm text-muted underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2"
                    href={link.url}
                    target="_blank"
                    whileHover="hover"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
}
