import axios from "axios";
import React, { useState } from "react";

const SearchBox = ({ setApiData }) => {
  const [search, setSearch] = useState("");

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((res) => setApiData(res.data));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="TYPE LOCATION ID 1-126"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={searchLocation}>SEARCH</button>
    </div>
  );
};

export default SearchBox;
