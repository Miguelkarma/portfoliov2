import HeroButton from "@/components/ui/get-started-btn";
import { Download } from "lucide-react";
import resumePdf from "@/assets/resume.pdf";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInLeft,
  fadeInScale,
  staggerContainer,
} from "@/animation/motion-variant";

export default function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <main id="home">
        <section className="relative bg-transparent pt-37 lg:pt-54 pb-32 lg:pb-24">
          <motion.p
            initial="start"
            animate="end"
            variants={fadeInUp}
            className="text-sm uppercase tracking-wider bg-transparent border text-primary max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-2xl mb-1 before:absolute before:left-1/2 before:translate-x-[-50%] before:bottom-[-1px] before:w-[66%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-logo before:to-transparent before:rounded-full"
          >
            Hi! My Name is
          </motion.p>

          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.9, 1.05, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-50 lg:-translate-y-24 lg:left-0 lg:top-10 w-96 h-96 skew-x-6 opacity-40 rounded-full bg-gradient-to-bl from-glow2 to-glow1 blur-3xl flex"
            />

            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.9, 1.05, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
              className="absolute top-50 -right-20 w-96 h-96 skew-x-6 opacity-40 rounded-full bg-gradient-to-bl from-glow2 to-glow1 blur-3xl flex hidden lg:block"
            />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none"
            >
              <div className="space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2">
                <motion.h1
                  variants={fadeInUp}
                  className="text-foreground text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold"
                >
                  Paul Miguel Santos Web{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
                    Developer
                  </span>{" "}
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-muted-foreground max-w-md mx-auto lg:max-w-none"
                >
                  Crafting modern web experiences with React, Node.js, and
                  cutting-edge technologies. Transforming ideas into scalable,
                  user-friendly applications.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 z-30 mx-auto lg:mx-0 w-full sm:w-max"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <HeroButton className="px-5 h-12 flex items-center justify-center text-primary-foreground rounded-lg ease-linear transition hover:opacity-90 w-full">
                      <a href="#about-me" onClick={handleSmoothScroll}>
                        Explore
                      </a>
                    </HeroButton>
                  </motion.div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={resumePdf}
                    download
                    className="text-lg h-12 flex items-center justify-center text-primary rounded-lg ease-linear transition hover:opacity-90 w-full sm:w-auto"
                  >
                    <Download className="mr-2" />
                    Resume
                  </motion.a>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInLeft}
                className="flex-1 lg:w-1/2 relative mt-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="rounded-lg absolute -right-2 bottom-40 w-80 h-24 bg-cyan-950"
                />

                <motion.div
                  variants={fadeInScale}
                  className="w-full h-auto relative bg-sky-950 border border-border rounded-lg shadow-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 rounded-full bg-red-500"
                    />
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 rounded-full bg-yellow-500"
                    />
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 rounded-full bg-green-500"
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="ml-4 text-sm text-muted-foreground"
                    >
                      portfolio.js
                    </motion.span>
                  </div>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-2 text-sm font-mono"
                  >
                    <motion.div variants={fadeIn} className="text-blue-400">
                      <span className="text-purple-400">const</span> portfolio ={" "}
                      {"{"}
                    </motion.div>
                    <motion.div
                      variants={fadeIn}
                      className="pl-4 text-green-400"
                    >
                      name:{" "}
                      <span className="text-orange-400">
                        'Paul Miguel Santos'
                      </span>
                      ,
                    </motion.div>
                    <motion.div
                      variants={fadeIn}
                      className="pl-4 text-green-400"
                    >
                      role:{" "}
                      <span className="text-orange-400">
                        'Front-End Developer'
                      </span>
                      ,
                    </motion.div>
                    <motion.div
                      variants={fadeIn}
                      className="pl-4 text-green-400"
                    >
                      recentTechnologiesUsed: [
                      <span className="text-orange-400">'React'</span>,{" "}
                      <span className="text-orange-400">'TypeScript'</span>,{" "}
                      <span className="text-orange-400">'Firebase'</span>],
                    </motion.div>
                    <motion.div
                      variants={fadeIn}
                      className="pl-4 text-green-400"
                    >
                      passion:{" "}
                      <span className="text-orange-400">
                        'Building amazing apps'
                      </span>
                    </motion.div>
                    <motion.div variants={fadeIn} className="text-blue-400">
                      {"}"}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
