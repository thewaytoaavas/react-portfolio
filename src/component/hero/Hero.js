import React from "react";
import img2 from "../../assets/Aavas.jpeg";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row mt-5 py-3">
            {/* <!-- =====below md takes 12 grid=====  --> */}
            <div className="col-md-6 order-md-2 text-center">
              <img src={img2} alt="my photo" width="50%" />
            </div>

            <div className="col-md-6 pt-5">
              <h4>Hi ✌️I am Aavas Kunwar</h4>
              <h1>Full Stack Developer</h1>
              <p className="mt-5">
                Full Stack Developer with over 10 years of experience in Java/JS
                and their frameworks, HTML and CSS. Developed over 20+ websites
                from scratch at carroll, created more than 50 technical design
                documents for different companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      Hero
    </div>
  );
}
