import "@/App.css";
import { NavLayout } from "./layout/nav-layout";
import Hero from "./components/hero";
import AboutMe from "./components/about-me";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavLayout />
      </div>
      <div>
        <Hero />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
