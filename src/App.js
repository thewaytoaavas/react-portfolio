import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";

// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <div className="wrappper">
        {/* <!-- =========navbar=========  --> */}
        <div id="top-nav" className="top-nav">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <a className="navbar-brand" href="logo">
                <img
                  src="./assets/logonew.png"
                  className="figure-img img-fluid rounded img-thumbnail"
                  alt="Aavas"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#skills"
                    >
                      Skill
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="hero">
            <div className="container">
              <div className="row mt-5 py-3">
                {/* <!-- =====below md takes 12 grid=====  --> */}
                <div className="col-md-6 order-md-2 text-center">
                  <img src="./assets/Aavas.jpeg" alt="my photo" width="50%" />
                </div>

                <div className="col-md-6 pt-5">
                  <h4>Hi ✌️I am Aavas Kunwar</h4>
                  <h1>Full Stack Developer</h1>
                  <p className="mt-5">
                    Full Stack Developer with over 10 years of experience in
                    Java/JS and their frameworks, HTML and CSS. Developed over
                    20+ websites from scratch at carroll, created more than 50
                    technical design documents for different companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- =============Skill Section  ==========  --> */}

        <section className="container skill mt-5 py-5">
          <div
            id="skills"
            className="sec-title fs-1 fw-bolder text-center m-auto"
          >
            Skills
          </div>
          <div className="sec-content fs-1 mt-5 d-flex justify-content-between flex-wrap">
            <span className="d-flex flex-column d-flex align-items-center">
              <i className="fab fa-html5 text-danger"></i>HTML
            </span>
            <span className="d-flex flex-column d-flex align-items-center">
              <i className="fab fa-css3 text-primary"></i>CSS
            </span>
            <span className="d-flex flex-column d-flex align-items-center">
              <i className="fab fa-js-square text-warning"></i>JAVA
            </span>
          </div>
        </section>
        {/* <!-- =============Project Section ==========  --> */}
        <section className="projects py-5">
          <div
            id="projects"
            className="sec-title fs-1 fw-bolder text-center m-auto mt-5"
          >
            Projects
          </div>

          <div className="proj-content">
            <div className="container">
              <div className="row mt-5 py-5">
                <div className="col-md-6">
                  <img
                    src="./assets/small-business-concept-diagram-hand-260nw-264529766.jpeg"
                    alt="portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Hamro Gadgets</h2>
                  <div className="links">
                    <a href="#" target="blank">
                      <i className="fab fa-github-alt"></i>
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-chrome"></i>{" "}
                    </a>
                  </div>
                  <div className="mt-3">Tech:HTML, CSS</div>
                  <p className="mt-1">
                    Hamro Gadgets is the perfect destination for all kind of
                    latest gadgets.
                  </p>
                  <p>
                    Gadgets like smartphones, laptops, computers, Smart TVs,
                    Smart watch, Smart Speakers and all kind of electronics
                    accessories are available online only.
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6 order-md-1">
                  <img
                    src="./assets/business.jpeg"
                    alt="portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Hamro Business</h2>
                  <div className="links">
                    <a href="#" target="blank">
                      <i className="fab fa-github-alt"></i>
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-chrome"></i>{" "}
                    </a>
                  </div>
                  <div className="mt-3">Tech:HTML, CSS</div>
                  <p className="mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officia qui iste provident natus laboriosam earum quibusdam
                    deserunt sit quidem fuga commodi consectetur eius, quae
                    ratione ullam neque eum illo harum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    soluta ut minus alias saepe voluptates delectus suscipit
                    magnam quis porro, sed sint tempora enim assumenda accusamus
                    placeat quam quas nam.
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <img
                    src="./assets/money.jpeg"
                    alt="portfolio"
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Hamro Finance</h2>
                  <div className="links">
                    <a href="#" target="blank">
                      <i className="fab fa-github-alt"></i>
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-chrome"></i>{" "}
                    </a>
                  </div>
                  <div className="mt-3">Tech:HTML, CSS</div>
                  <p className="mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officia qui iste provident natus laboriosam earum quibusdam
                    deserunt sit quidem fuga commodi consectetur eius, quae
                    ratione ullam neque eum illo harum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    soluta ut minus alias saepe voluptates delectus suscipit
                    magnam quis porro, sed sint tempora enim assumenda accusamus
                    placeat quam quas nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============About me ==========  --> */}
        <section className="container">
          <div
            id="about"
            className="sec-title fs-1 fw-bolder text-center m-auto mt-5"
          >
            About Me
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="./assets/Aavas.jpeg" alt="" className="" width="70%" />
            </div>
            <div className="col-md-7">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam corporis, maiores est laborum quod cupiditate
                necessitatibus numquam a, ea atque laboriosam, porro
                consequuntur. Soluta asperiores suscipit, eligendi assumenda
                commodi ut.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- =============Contact me ==========  --> */}
        <section className="container">
          <div id="contact" className="contact-icons rounded py-3">
            <div className="sec-title fs-1 bolder m-auto">Contact Me</div>
            <div className="icons-mt-5 fs-1 d-flex align-items-center justify-content-between px-5">
              <a href="mailto:myemail@gmail.com" target="blank">
                <i className="fas fa-mail-bulk"></i>
              </a>
              <a href="" target="blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" target="blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="tel: 1234567890" target="blank">
                <i className="fas fa-phone-volume"></i>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- ============= Footter ==========  --> */}

        <footer className="container text-center py-5 mt-5 bg-dark text-light">
          &copy;copy right, all right reserved || Made with 💓 by Aavas
          <a href="#top-nav">
            <div className="up">
              <i className="fas fa-arrow-alt-circle-up"></i>
            </div>
          </a>
        </footer>
      </div>
      Hello World
    </div>
  );
}

export default App;
