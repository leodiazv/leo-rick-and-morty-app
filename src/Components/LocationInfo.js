import React from "react";

const LocationInfo = ({ apiData }) => {
  console.log(apiData.residents?.length);

  return (
    <div className="location-info">
      <p>
        <span>Type:</span>
        <br></br> {apiData.type}
      </p>
      <p>
        <span>Dimension:</span>
        <br></br> {apiData.dimension}
      </p>
      <p>
        <span>Residents:</span>
        <br></br> {apiData.residents?.length}
      </p>
    </div>
  );
};

export default LocationInfo;
