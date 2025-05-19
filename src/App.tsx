import "@/App.css";
import { NavLayout } from "./layout/nav-layout";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";

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
        <div>
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
