import React from "react";

export default function Hero() {
  return (
    <div>
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
    </div>
  );
}
