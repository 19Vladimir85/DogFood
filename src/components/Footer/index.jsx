import React from "react";
import Connection from "./Connection";
import Menu from "./Menu";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import viber from "./img/viber.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import logo from "./img/logo.svg";

import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column left">
        <a href="#" className="logo">
          <img src={logo} alt="logo" className="logo__pic" />
        </a>
        <p className="footer__copyright">© «Интернет-магазин DogFood.ru»</p>
      </div>
      <div className="footer__column center">
        <Menu />
      </div>
      <div className="footer__column right">
        <Connection
          title={"Мы на связи"}
          phone={"8 (999) 00-00-00"}
          site={"dogfood.ru@gmail.com"}
          socialNetworks={[
            { src: "telegram", srcImg: telegram },
            { src: "instagram", srcImg: instagram },
            { src: "viber", srcImg: viber },
            { src: "whatsapp", srcImg: whatsapp },
            { src: "vk", srcImg: vk },
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
