import { aboutMeInfo, educationData } from "@/elements/constants";
import profile from "@/assets/profile.jpg";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutMe() {
  return (
    <div className="bg-transparent text-white p-8 mt-35 relative" id="about-me">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start md:items-center sm:items-center">
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
                {aboutMeInfo.title}
              </span>
            </h1>

            <div className="space-y-6 text-secondary-foreground leading-relaxed">
              {aboutMeInfo.paragraphs.map((paragraph, index) => {
                const parts = paragraph.split(" ");
                return (
                  <p key={index}>
                    {parts.map((word, wordIndex) => {
                      const shouldHighlight = aboutMeInfo.highlights.some(
                        (highlight) => word.includes(highlight.text)
                      );
                      return (
                        <span
                          key={wordIndex}
                          className={shouldHighlight ? "text-teal-600" : ""}
                        >
                          {word}
                          {wordIndex < parts.length - 1 ? " " : ""}
                        </span>
                      );
                    })}
                  </p>
                );
              })}
            </div>

            <div className="mt-8">
              {/* Tabs Section for Skills and Education */}
              <Tabs defaultValue="skills" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 gap-2">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>

                {/* Skills Tab Content */}
                <TabsContent value="skills" className="mt-4">
                  <div className="space-y-4 text-secondary-foreground">
                    {aboutMeInfo.skillsSection.categories.map(
                      (category, catIndex) => (
                        <div key={catIndex}>
                          <h3 className="text-lg font-medium mb-2">
                            {category.name}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                className={`${skill.color} hover:${skill.color} text-white`}
                              >
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>

                {/* Education Tab Content */}
                <TabsContent value="education" className="mt-4">
                  <div className="space-y-4 text-secondary-foreground">
                    {educationData.map((edu, index) => (
                      <div
                        key={index}
                        className="border !border-gray-500 rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-gray-500">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.period}</p>
                        {edu.description && (
                          <p className="mt-2">{edu.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-72 h-96 relative">
                <div className="absolute inset-0 border-2 !border-gray-800 rounded-lg opacity-80 transform translate-x-14 translate-y-20 shadow-md dark:shadow-primary"></div>
                <div className="relative flex items-center bg-gray-800 border-b !border-gray-800 rounded-t-xl py-2 px-4">
                  <div className="flex gap-x-1 absolute top-1/2 left-4 -translate-y-1/2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="mx-auto text-sm text-gray-300">
                    {aboutMeInfo.profileImage.browser.url}
                  </div>
                </div>
                <div className="relative w-full h-full bg-gray-700 rounded-b-lg overflow-hidden border !border-gray-800 md:flex md:justify-center">
                  <img
                    src={profile}
                    alt={aboutMeInfo.profileImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
