import { useEffect, useState } from "react";
import About from "./Components/About"
import Header from "./Components/Header"
import Scroll from "./Components/Scroll"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {

  const [showScroll, setShowScroll] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "light");

  useEffect(() => {
    const scrollHandle = () => {
      setShowScroll(window.scrollY <= 100);
    };

    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <Header isDark={theme === "dark"} onToggleTheme={toggleTheme}></Header>
      <About></About>
      {showScroll && <Scroll></Scroll>}
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </>
  )
}

export default App
