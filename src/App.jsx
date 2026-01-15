import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import BackToTop from "./components/BackToTop";



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
