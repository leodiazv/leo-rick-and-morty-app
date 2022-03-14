import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ residents }) => {
  return (
    <div className="resident-list">
      {residents?.map((resident) => (
        <ResidentInfo residentUrl={resident} key={resident} />
      ))}
    </div>
  );
};

export default ResidentList;
