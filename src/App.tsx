import "@/App.css";
import { NavLayout } from "./layout/nav-layout";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavLayout />
      </div>
      <div>
        <Hero />
      </div>
    </>
  );
}

export default App;
