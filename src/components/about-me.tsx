import { aboutMeInfo, educationData } from "@/elements/constants";
import profile from "@/assets/profile.jpg";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInRight,
  fadeInLeft,
  fadeInScale,
  staggerContainer,
  lazyLoad,
  containerVariants,
  badgeVariants,
} from "@/animation/motion-variant";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div
      className="bg-transparent text-white p-8 mt-35 relative"
      id="about-me"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-12 items-start md:items-center sm:items-center"
        >
          {/* Content Section */}
          <motion.div variants={fadeInRight} className="flex-1 space-y-6">
            <motion.h1 variants={fadeInUp} className="text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
                {aboutMeInfo.title}
              </span>
            </motion.h1>

            <motion.div
              variants={containerVariants}
              className="space-y-6 text-secondary-foreground leading-relaxed"
            >
              {aboutMeInfo.paragraphs.map((paragraph, index) => {
                const parts = paragraph.split(" ");
                return (
                  <motion.p key={index} variants={fadeIn}>
                    {parts.map((word, wordIndex) => {
                      const shouldHighlight = aboutMeInfo.highlights.some(
                        (highlight) => word.includes(highlight.text)
                      );
                      return (
                        <motion.span
                          key={wordIndex}
                          className={shouldHighlight ? "text-teal-600" : ""}
                          whileHover={shouldHighlight ? { scale: 1.05 } : {}}
                        >
                          {word}
                          {wordIndex < parts.length - 1 ? " " : ""}
                        </motion.span>
                      );
                    })}
                  </motion.p>
                );
              })}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              {/* Tabs Section for Skills and Education */}
              <Tabs defaultValue="skills" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 gap-2">
                  <TabsTrigger value="skills" className=" cursor-pointer">
                    Skills
                  </TabsTrigger>
                  <TabsTrigger value="education" className=" cursor-pointer">
                    Education
                  </TabsTrigger>
                </TabsList>

                {/* Skills Tab Content */}
                <TabsContent value="skills" className="mt-4">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 text-secondary-foreground"
                  >
                    {aboutMeInfo.skillsSection.categories.map(
                      (category, catIndex) => (
                        <motion.div
                          key={catIndex}
                          variants={fadeIn}
                          custom={catIndex}
                        >
                          <h3 className="text-lg font-medium mb-2">
                            {category.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                variants={badgeVariants}
                                custom={skillIndex}
                                whileHover={{
                                  scale: 1.1,
                                  transition: { duration: 0.2 },
                                }}
                              >
                                <Badge
                                  className={`${skill.color} hover:${skill.color} text-white`}
                                >
                                  {skill.name}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </TabsContent>

                {/* Education Tab Content */}
                <TabsContent value="education" className="mt-4">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 text-secondary-foreground"
                  >
                    {educationData.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={lazyLoad}
                        custom={index}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                        className="border !border-gray-500 rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-gray-500">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.period}</p>
                        {edu.description && (
                          <p className="mt-2">{edu.description}</p>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInLeft} className="flex-shrink-0">
            <div className="relative">
              <motion.div variants={fadeInScale} className="w-72 h-96 relative">
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 10 }}
                  animate={{ opacity: 0.8, x: 14, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute inset-0 border-2 !border-gray-800 rounded-lg opacity-80 transform translate-x-14 translate-y-20 shadow-md dark:shadow-primary"
                />
                <div className="relative flex items-center bg-gray-800 border-b !border-gray-800 rounded-t-xl py-2 px-4">
                  <div className="flex gap-x-1 absolute top-1/2 left-4 -translate-y-1/2">
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-red-500 rounded-full"
                    />
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-amber-500 rounded-full"
                    />
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mx-auto text-sm text-gray-300"
                  >
                    {aboutMeInfo.profileImage.browser.url}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="relative w-full h-full bg-gray-700 rounded-b-lg overflow-hidden border !border-gray-800 md:flex md:justify-center"
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    src={profile}
                    alt={aboutMeInfo.profileImage.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
