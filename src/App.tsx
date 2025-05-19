import "@/App.css";
import { NavLayout } from "./layout/nav-layout";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavLayout />
      </div>
      <div>
        <Hero />
        <AboutMe />
        <Experience />
      </div>
    </>
  );
}

export default App;
