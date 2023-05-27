import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Works from "./pages/Works";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import { works } from "./utils/works";
import { useState } from "react";

function App() {
  //cermuel portfolio
  const [owner, setOwner] = useState("CERMUEL GITHUB STREAK RUNNING");
  return (
    <div className="w-screen justify-center flex font-poppins max-sm:px-2 overflow-hidden px-4">
      <div className="max-w-[1024px] w-full">
        <Navbar />
        <Home />
        {/* <Hero /> */}
        <AboutMe />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
