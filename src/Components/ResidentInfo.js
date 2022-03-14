import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState({});

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResidentInfo(res.data));
  }, []);

  console.log(residentInfo.status);

  return (
    <div className="resident-card">
      <img src={residentInfo.image} />
      <div className="status">
        <div className={residentInfo.status}></div>
        <p>{residentInfo.status?.toUpperCase()}</p>
      </div>
      <div className="resident-info">
        <h1 className="resident-name">{residentInfo.name}</h1>
        <h2>SPECIES</h2>
        <p>{residentInfo.species}</p>
        <h2>ORIGIN</h2>
        <p>{residentInfo.origin?.name}</p>
        <h2>APARENCE IN EPISODES</h2>
        <p>{residentInfo.episode?.length}</p>
      </div>
    </div>
  );
};

export default ResidentInfo;
