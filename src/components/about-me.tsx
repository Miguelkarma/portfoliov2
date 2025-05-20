import profile from "@/assets/profile.jpg";
import { Badge } from "@/components/ui/badge";

export default function AboutMe() {
  const skills = {
    languages: [
      { name: "JavaScript", color: "bg-yellow-600" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "HTML", color: "bg-orange-600" },
      { name: "CSS", color: "bg-blue-500" },
      { name: "PHP", color: "bg-indigo-500" },
    ],
    frontend: [
      { name: "React", color: "bg-cyan-600" },
      { name: "Tailwind CSS", color: "bg-cyan-800" },
      { name: "Vite", color: "bg-teal-600" },
      { name: "Bootstrap", color: "bg-purple-600" },
      { name: "shadcn/ui", color: "bg-gray-950" },
    ],
    backend: [
      { name: "Firebase", color: "bg-amber-600" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Express", color: "bg-gray-600" },
    ],
    tools: [
      { name: "Git", color: "bg-red-500" },
      { name: "GitHub", color: "bg-black" },
      { name: "BitBucket", color: "bg-sky-700" },
      { name: "Figma", color: "bg-purple-500" },
      { name: "VS Code", color: "bg-blue-600" },
      { name: "Vercel", color: "bg-gray-800" },
      { name: "Xampp", color: "bg-yellow-700" },
      { name: "Laragon", color: "bg-indigo-600" },
      { name: "Composer", color: "bg-amber-800" },
    ],
  };

  return (
    <div className="bg-transparent text-white p-8 mt-30 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start md:items-center sm:items-center">
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
                About Me
              </span>
            </h1>

            <div className="space-y-6 text-secondary-foreground leading-relaxed">
              <p>
                I'm a web developer passionate about building real-world
                applications. My journey into web development began with
                curiosity and the drive to solve problems through code — and
                it's been an exciting learning experience ever since.
              </p>

              <p>
                Over time, I've worked on several personal and academic
                projects, including an{" "}
                <span className="text-teal-600">
                  IT Equipment Asset Management system
                </span>{" "}
                and a{" "}
                <span className="text-teal-600">
                  Veterinary Clinic Management app
                </span>
                . These projects helped me gain hands-on experience in both
                front-end and back-end development.
              </p>

              <p>
                My current focus is on developing modern, responsive web apps
                using <span className="text-teal-600">React</span>,{" "}
                <span className="text-teal-600">Firebase</span>, and{" "}
                <span className="text-teal-600">Tailwind CSS</span>. I'm also
                exploring new technologies like{" "}
                <span className="text-teal-600">TypeScript </span>and external
                APIs to expand my skills and build more advanced features.
              </p>
            </div>

            {/* Skills Section with badges */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
                Skills & Technologies
              </h2>

              <div className="space-y-4">
                {/* Languages */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-300">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge
                        key={index}
                        className={`${skill.color} hover:${skill.color} text-white`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-300">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <Badge
                        key={index}
                        className={`${skill.color} hover:${skill.color} text-white`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-300">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <Badge
                        key={index}
                        className={`${skill.color} hover:${skill.color} text-white`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-300">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        className={`${skill.color} hover:${skill.color} text-white`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 ">
            <div className="relative">
              <div className="w-72 h-96 relative ">
                <div className="absolute inset-0 border-2 !border-gray-800 rounded-lg opacity-80 transform translate-x-14 translate-y-20 shadow-md dark:shadow-primary"></div>
                <div className="relative flex items-center bg-gray-800 border-b !border-gray-800 rounded-t-xl py-2 px-4">
                  <div className="flex gap-x-1 absolute top-1/2 left-4 -translate-y-1/2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="mx-auto text-sm text-gray-300">
                    www.miguelkarma.com
                  </div>
                </div>
                <div className="relative w-full h-full bg-gray-700 rounded-b-lg overflow-hidden border !border-gray-800  md:flex md:justify-center ">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover "
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
