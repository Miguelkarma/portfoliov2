import profile from "@/assets/profile.jpg";

export default function AboutMe() {
  return (
    <div className="bg-transparent text-white p-8 mt-30 relative ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none min-h-screen ">
        <svg
          className="absolute md:top-60 lg:top-20   left-0 w-full h-full"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 400 Q200 300 400 400 T800 350 Q900 380 1100 400"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            className="opacity-100"
          />

          <circle
            cx="150"
            cy="380"
            r="4"
            fill="#ff6b9d"
            className="opacity-80"
          />
          <circle
            cx="600"
            cy="360"
            r="3"
            fill="#ff6b9d"
            className="opacity-60"
          />
          <circle
            cx="850"
            cy="390"
            r="2"
            fill="#ff6b9d"
            className="opacity-40"
          />

          <g transform="translate(300, 420)">
            <path
              d="M0,-8 L2.4,-2.4 L8,0 L2.4,2.4 L0,8 L-2.4,2.4 L-8,0 L-2.4,-2.4 Z"
              fill="#ff6b9d"
              className="opacity-70"
            />
          </g>

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1f7373" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#9f75fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#70e0e0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
