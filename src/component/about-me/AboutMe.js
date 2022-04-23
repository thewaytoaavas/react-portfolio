import React from "react";
import img1 from "../../assets/Aavas.jpeg";

export default function AboutMe() {
  return (
    <section className="container">
      <div
        id="about"
        className="sec-title fs-1 fw-bolder text-center m-auto mt-5"
      >
        About Me
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={img1} alt="" className="" width="70%" />
        </div>
        <div className="col-md-7">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            corporis, maiores est laborum quod cupiditate necessitatibus numquam
            a, ea atque laboriosam, porro consequuntur. Soluta asperiores
            suscipit, eligendi assumenda commodi ut.
          </p>
        </div>
      </div>
    </section>
  );
}
