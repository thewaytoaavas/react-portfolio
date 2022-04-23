import "./App.css";
import TopNav from "./component/top-nav/TopNav";
import Hero from "./component/hero/Hero";
import Skills from "./component/skills/Skills";
import Projects from "./component/projects/Projects";
import AboutMe from "./component/about-me/AboutMe";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <div className="wrappper">
        {/* <!-- =========navbar=========  --> */}
        <div id="top-nav" className="top-nav">
          <TopNav />
          <Hero />
        </div>

        {/* <!-- =============Skill Section  ==========  --> */}

        <Skills />
        {/* <!-- =============Project Section ==========  --> */}
        <Projects />
        {/* <!-- =============About me ==========  --> */}
        <AboutMe />
        {/* <!-- =============Contact me ==========  --> */}
        <Contact />
        {/* <!-- ============= Footter ==========  --> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
