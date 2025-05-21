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
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-glow1 to-dev2 hover:from-glow1 hover:to-dev focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
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
