import "@/App.css";
import { NavLayout } from "./layout/nav-layout";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import ProjectShowcase from "./components/project-showcase";

function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="container mx-auto ">
        <NavLayout />
      </div>
      <div className="">
        <Hero />
        <AboutMe />
        <Experience />
        <ProjectShowcase />
      </div>
    </>
  );
}

export default App;
