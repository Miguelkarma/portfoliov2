import "@/App.css";
import { NavLayout } from "@/layout/nav-layout";
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import ProjectShowcase from "@/components/project-showcase";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Loader from "./animation/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="bg-grid"></div>
      <div className="container mx-auto ">
        <NavLayout />
      </div>
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <ProjectShowcase />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
