// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Experience from "../components/Experience";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Scroller from "../components/Scroller";
// import Loadable from "../components/Loader";
// export default function Home() {
//   return (
//     <main style={{ background:'#f0f7ff', overflow:'hidden' }}>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//       <Footer />
//       <Scroller />
//       <Loadable />
//     </main>
//   );
// }
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Scroller from "../components/Scroller";
import Loadable from "../components/Loader";

export default function Home() {
  return (
    <main style={{ background: "#f0f7ff", overflow: "hidden" }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Scroller />
      <Loadable />
    </main>
  );
}