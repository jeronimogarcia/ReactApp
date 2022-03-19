import React from "react";
import "../../scss/footer.scss";

const Footer = () => {
  return (
    <section className="footer__container">
      <div className="footer__title">
        <h2>Comunicate con Michi Store</h2>
      </div>
      <div className="footer__infoContainer">
        <div className="footer__detailContainer">
          <h3>Mail</h3>
          <p>michistore@gmail.com</p>
        </div>
        <div className="footer__detailContainer">
          <h3>Teléfono</h3>
          <p>+54(341)480-0000</p>
        </div>
        <div className="footer__detailContainer">
          <h3>Visitanos</h3>
          <p>Av. Rodriguez 2560</p>
          <p>2000 - Rosario</p>
          <p>Santa Fe - Argentina</p>
        </div>
      </div>
      <div className="footer__followContainer">
          <h3>Seguinos</h3>
          <div className="footer__followIcons">
          <p><i className="fa-brands fa-facebook fa-2xl"></i></p>
          <p><i className="fa-brands fa-instagram fa-2xl"></i></p>
          <p><i className="fa-brands fa-twitter fa-2xl"></i></p>
          </div>
        </div>
    </section>
  );
};

export default Footer;
