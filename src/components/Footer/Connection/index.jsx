import React from "react";
import "./index.css";

const Network = ({ src, srcImg }) => {
  return (
    <a src={src}>
      <img src={srcImg}></img>
    </a>
  );
};

const Connection = ({ title, phone, site, socialNetworks }) => {
  return (
    <div className="connection">
      <div className="title">{title}</div>
      <div className="phone">{phone}</div>
      <div className="site">{site}</div>
      {socialNetworks.map((network) => (
        <Network key={network.src} srcImg={network.srcImg} />
      ))}
    </div>
  );
};

export default Connection;