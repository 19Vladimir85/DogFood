import React from "react";
import "./index.css";

const column_1 = [
  { src: "/catalogue", text: "Каталог" },
  { src: "/catalogue", text: "Акции" },
  { src: "/catalogue", text: "Новости" },
  { src: "/catalogue", text: "Отзывы" },
];
const column_2 = [
  { src: "/catalogue", text: "Оплата и доставка" },
  { src: "/catalogue", text: "Часто спрашивают" },
  { src: "/catalogue", text: "Обратная связь" },
  { src: "/catalogue", text: "Контакты" },
];

const Bottom = ({ src, text }) => {
  return (
    <a href={src} className="menu-column__item">
      {text}
    </a>
  );
};

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__column">
        {column_1.map((bottom) => (
          <Bottom key={bottom.text} src={bottom.src} text={bottom.text} />
        ))}
      </div>
      <div className="menu__column">
        {column_2.map((bottom) => (
          <Bottom key={bottom.text} src={bottom.src} text={bottom.text} />
        ))}
      </div>
    </nav>
  );
};

export default Menu;
