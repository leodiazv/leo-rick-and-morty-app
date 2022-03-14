import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBox";
import LocationInfo from "./Components/LocationInfo";

import ResidentList from "./Components/ResidentList";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)

      .then((res) => setApiData(res.data));
  }, []);

  console.log(apiData);

  return (
    <div className="App">
      <header>
        <SearchBox setApiData={setApiData} />
      </header>
      <h1>{apiData.name}</h1>
      <LocationInfo apiData={apiData} />

      <ResidentList residents={apiData.residents} />
    </div>
  );
}

export default App;
