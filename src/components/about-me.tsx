import profile from "@/assets/profile.jpg";

export default function AboutMe() {
  return (
    <div className="bg-transparent text-white min-h-screen p-8 mt-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-teal-400">01.</span> About Me
            </h1>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a web developer passionate about building real-world
                applications. My journey into web development began with
                curiosity and the drive to solve problems through code — and
                it's been an exciting learning experience ever since.
              </p>

              <p>
                Over time, I've worked on several personal and academic
                projects, including an{" "}
                <span className="text-teal-400">
                  IT Equipment Asset Management system
                </span>{" "}
                and a{" "}
                <span className="text-teal-400">
                  Veterinary Clinic Management app
                </span>
                . These projects helped me gain hands-on experience in both
                front-end and back-end development.
              </p>

              <p>
                My current focus is on developing modern, responsive web apps
                using <span className="text-teal-400">React</span>,{" "}
                <span className="text-teal-400">Firebase</span>, and{" "}
                <span className="text-teal-400">Tailwind CSS</span>. I'm also
                exploring new technologies like TypeScript, Supabase, and
                external APIs to expand my skills and build more advanced
                features.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-72 h-96 relative">
                <div className="absolute inset-0 bg-teal-400 rounded-lg opacity-80 transform translate-x-4 translate-y-4"></div>

                <div className="relative w-full h-full bg-gray-700 rounded-lg overflow-hidden border-2 border-teal-400 transform hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
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
