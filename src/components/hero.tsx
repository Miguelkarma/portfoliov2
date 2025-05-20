import HeroButton from "@/components/ui/get-started-btn";

export default function HeroSection() {
  return (
    <>
      <main>
        <section className="relative bg-transparent pt-32 lg:pt-24 pb-32 lg:pb-24 ">
          <p className=" text-sm uppercase tracking-wider bg-transparent border text-primary max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-2xl  mb-1 before:absolute before:left-1/2 before:translate-x-[-50%] before:bottom-[-1px] before:w-[66%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-logo before:to-transparent before:rounded-full">
            Hi! My Name is
          </p>
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-50 lg:-translate-y-24 lg:left-0 lg:top-10 w-96 h-96 skew-x-6 opacity-40 rounded-full bg-gradient-to-bl from-glow2 to-glow1 blur-3xl flex animate-pulse" />
            <div className="absolute top-50 -right-20 w-96 h-96 skew-x-6 opacity-40 rounded-full bg-gradient-to-bl from-glow2 to-glow1 blur-3xl flex animate-pulse hidden lg:block" />
            <div className="flex text-center lg:text-left flex-col lg:items-center lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative max-w-4xl lg:max-w-none">
              <div className="space-y-8 xl:space-y-10 lg:py-12 flex-1 lg:w-1/2">
                <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-bold">
                  Paul Miguel Santos Web{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-dev to-dev2">
                    Developer
                  </span>{" "}
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto lg:max-w-none">
                  Crafting modern web experiences with React, Node.js, and
                  cutting-edge technologies. Transforming ideas into scalable,
                  user-friendly applications.
                </p>
                <div className="flex flex-wrap items-center gap-4 z-30 sm:w-max sm:flex-nowrap mx-auto lg:mx-0">
                  <HeroButton className="px-5 h-12 flex items-center sm:w-max w-full justify-center text-primary-foreground rounded-lg ease-linear transition hover:opacity-90">
                    Explore My Work
                  </HeroButton>
                </div>
              </div>

              {/* Code snippet */}
              <div className="flex-1 lg:w-1/2 relative mt-6">
                <div className="rounded-lg absolute -right-2 bottom-40 w-80 h-24 bg-cyan-950" />
                <div className="w-full h-auto relative bg-sky-950 border border-border rounded-lg shadow-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-sm text-muted-foreground">
                      portfolio.js
                    </span>
                  </div>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-blue-400">
                      <span className="text-purple-400">const</span> portfolio ={" "}
                      {"{"}
                    </div>
                    <div className="pl-4 text-green-400">
                      name:{" "}
                      <span className="text-orange-400">
                        'Paul Miguel Santos'
                      </span>
                      ,
                    </div>
                    <div className="pl-4 text-green-400">
                      role:{" "}
                      <span className="text-orange-400">
                        'Front-End Developer'
                      </span>
                      ,
                    </div>
                    <div className="pl-4 text-green-400">
                      recentTechnologiesUsed: [
                      <span className="text-orange-400">'React'</span>,{" "}
                      <span className="text-orange-400">'TypeScript'</span>,{" "}
                      <span className="text-orange-400">'Firebase'</span>],
                    </div>
                    <div className="pl-4 text-green-400">
                      passion:{" "}
                      <span className="text-orange-400">
                        'Building amazing apps'
                      </span>
                    </div>
                    <div className="text-blue-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
