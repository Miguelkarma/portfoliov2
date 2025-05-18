import logo from "@/assets/logo.png";

export default function HeroSection() {
  return (
    <>
      <main>
        <section className="relative bg-background dark:bg-background pt-32 lg:pt-24 pb-32 lg:pb-4">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-32 lg:-translate-y-24 lg:left-0 lg:top-10 w-md h-96 skew-x-6 opacity-40 rounded-full bg-gradient-to-bl from-glow2 to-glow1 blur-3xl flex animate-pulse" />
            <div className="flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none">
              <div className="space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2">
                <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold">
                  The only all in one{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-destructive to-[hsl(var(--logo))]">
                    Tool
                  </span>{" "}
                  you need for your Clinic
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto lg:max-w-none">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium omnis, molestias expedita soluta facilis sapiente
                  incidunt.
                </p>
                <div className="flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0">
                  <a
                    href="#"
                    className="px-5 h-12 flex items-center sm:w-max w-full justify-center bg-gradient-to-br from-primary to-logo text-primary-foreground rounded-lg ease-linear transition"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="px-5 h-12 flex items-center sm:w-max w-full justify-center gap-x-3 border border-input rounded-lg text-accent-foreground bg-secondary"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Watch Demo
                  </a>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex-1 lg:w-1/2 relative hidden lg:flex justify-end pr-8"
              >
                <div className="rounded-lg absolute right-0 bottom-0 w-11/12 h-2/5 bg-gradient-to-tr from-muted to-accent dark:bg-gradient-to-tr dark:from-muted dark:to-accent" />
                <img
                  src={logo}
                  width={3200}
                  className="w-11/12 h-auto relative"
                  alt="portrait-of-smiling-medical-worker-girl-doctor"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
