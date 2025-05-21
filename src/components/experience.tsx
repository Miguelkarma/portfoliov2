"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import SectionHeading from "@/elements/SectionHeading";
import { experiences } from "@/elements/constants";

export default function Experience() {
  return (
    <>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:translate-x-100 lg:-translate-y-70 lg:right-100 lg:top-0 w-96 h-96 skew-x-6 opacity-40 rounded-full bg-gradient-to-bl from-glow2 to-glow1 blur-3xl flex animate-pulse" />
      </div>
      <section id="experience" className="mt-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading title="Experience" />
          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>

                <div className="flex items-start">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-b from-teal-500 to-blue-500 flex items-center justify-center z-10 relative border !border-teal-500/100">
                      <Briefcase className={`w-8 h-8 text-white`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 bg-card backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-secondary flex items-center gap-2 font-display">
                        <Zap className={`w-5 h-5 text-logo`} />
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                      <span className="text-gray-500">{exp.company}</span>
                    </div>

                    <div className="space-y-4">
                      {exp.projects.map((project, i) => (
                        <motion.div
                          key={i}
                          className="bg-card-foreground p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                        >
                          <h4 className="text-lg font-semibold text-muted mb-2">
                            {project.title}
                          </h4>
                          <p className="text-muted">{project.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
