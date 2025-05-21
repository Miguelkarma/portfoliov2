import { Mail } from "lucide-react";
import { contactInfo } from "@/elements/constants";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
} from "@/animation/motion-variant";

export default function Contact() {
  return (
    <>
      <motion.div
        className="relative overflow-hidden mt-55 h-[40em]"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-53 pb-10 hex">
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
              href={contactInfo.badge.link}
            >
              {contactInfo.badge.text}
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                  {contactInfo.badge.cta}
                </span>
                <svg
                  className="shrink-0 size-4 text-blue-600"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-5 max-w-xl text-center mx-auto"
            variants={fadeInUp}
          >
            <motion.h1
              className="block font-bold text-primary text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {contactInfo.title}
            </motion.h1>
          </motion.div>

          <motion.div
            className="mt-5 max-w-3xl text-center mx-auto"
            variants={fadeInUp}
          >
            <p className="text-lg text-muted">{contactInfo.description}</p>
          </motion.div>

          <motion.div
            className="mt-8 gap-3 flex justify-center"
            variants={fadeInScale}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-dev to-dev2 hover:from-violet-600 hover:to-blue-600 focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=santos.p.miguel46@gmail.com"
              target="_blank"
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Mail className="shrink-0 size-4" />
              {contactInfo.ctaButton.text}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
