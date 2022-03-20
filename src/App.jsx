import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Cards from "./components/Cards";
import data from "./data.json";

const App = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Search onChange={setSearch} />
      </Header>
      <Body>
        <div className="search__text">
          По запросу <b>{search || "Ваш запрос"}</b> найдено <b>{count}</b>{" "}
          товаров
        </div>
        <Sort />
        <Cards data={data} />
      </Body>
      <Footer />
    </>
  );
};

export default App;
