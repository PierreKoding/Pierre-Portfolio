import React, { useState } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  // State for theme
  const [theme, setTheme] = useState("dark");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${
        theme === "dark" ? "bg-neutral-950 text-neutral-300" : "bg-neutral-100 text-gray-900"
      }`}
    >
      <div
        className={`fixed top-0 z-[-2] h-screen w-screen ${
          theme === "dark"
            ? "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
            : "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"
        }`}
      >
        <div className="fixed top-0 -z-10 h-full w-full"></div>
      </div>

      {/* toggle to nav */}
      <NavBar toggleTheme={toggleTheme} theme={theme} />

      <div className="container mx-auto px-8">
        <section id="About-Me">
          <Hero />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="projects">
          <Projects theme={theme} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
