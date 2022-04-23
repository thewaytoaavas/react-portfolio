import React from "react";

export default function Contact() {
  return (
    <div>
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
    </div>
  );
}
