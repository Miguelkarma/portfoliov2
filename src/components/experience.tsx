"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import SectionHeading from "../elements/SectionHeading";

export default function Experience() {
  const experiences = [
    {
      period: "January 2025 - April 2025",
      role: "Front-End Developer Intern",
      company: "Toro Cloud Philippines Pty Ltd ( lonti )",
      color: "teal",
      projects: [
        {
          title: "🔧 Full-Stack Development Training",
          description:
            "Participated in a structured internship program at Toro Cloud, studying JavaScript fundamentals along with hands-on training in React, TypeScript, Tailwind CSS, Firebase, Node.js, Express, Playwright and Jest.",
        },
        {
          title: "💻 Internship Project",
          description:
            "Designed and developed a full-stack asset tracking system with QR-based asset monitoring. Implemented CRUD operations for assets and employees using Firebase Firestore, ensuring real-time data handling.",
        },
        {
          title: "🚀 Deployment & Testing",
          description:
            "Deployed the application on Vercel with performance optimizations. Integrated third-party APIs to enhance system features and implemented comprehensive test coverage using Jest to ensure application reliability.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="mt-77 relative overflow-hidden">
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
              {/* Timeline connector */}
              {/* Uncomment these when the object is 2 or more */}
              {/* {index < experiences.length - 1 && ( */}
              <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500">
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-logo"
                  animate={{
                    y: [0, 100, 200, 300, 400, 500, 600],
                    opacity: [1, 0.8, 0.6, 0.4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
              {/* )} */}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center z-10 relative border !border-teal-500/100">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-card backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                      <Zap className={`w-5 h-5 text-${exp.color}-400`} />
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-teal-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-slate-300">{exp.company}</span>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {project.title}
                        </h4>
                        <p className="text-slate-300">{project.description}</p>
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
  );
}
