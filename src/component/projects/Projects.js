import React from "react";
import P1 from "../../assets/small-business-concept-diagram-hand-260nw-264529766.jpeg";
import P2 from "../../assets/business.jpeg";
import P3 from "../../assets/money.jpeg";

export default function () {
  return (
    <div>
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
                  src={P1}
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
                  Gadgets like smartphones, laptops, computers, Smart TVs, Smart
                  watch, Smart Speakers and all kind of electronics accessories
                  are available online only.
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6 order-md-1">
                <img
                  src={P2}
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
                  src={P3}
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
    </div>
  );
}
