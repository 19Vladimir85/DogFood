import React from "react";
import Card from "../Card";
import "./index.css";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;