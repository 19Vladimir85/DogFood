import { useState } from "react";
import React from "react";
import "./index.css";
import { ReactComponent as SearchIcon } from "./img/ic-search.svg";
import { ReactComponent as CloseSearch } from "./img/ic-close-input.svg";

const Search = ({ onChange, onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Поиск"
        className="search__input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <button className="search__btn">
        <SearchIcon
          onClick={() => {
            setValue(e.target.value);
          }}
        />
        {value.length > 0 && (
          <CloseSearch
            onClick={() => {
              setValue("");
              onChange("");
            }}
          />
        )}
      </button>
    </form>
  );
};

export default Search;
