import React from "react";
import logo from "./Logo.png";

function infectionInfo() {
  // console.log(props);

  return (
    <div className="info">
      <img src={logo} alt="Logo" className="preloader--img" />
      <div>
        <h1>WYNIK</h1>
        <h3 className="color--primary">
          Prawdopodobnie nie miałe(a)ś kontaktu z zakażonym.
        </h3>
      </div>
      <div className="info-detail--no-detection">
        <h2>Zalecamy:</h2>
        <ul className="info-list">
          <li><p>Zostań w domu</p></li>
          <li><p>Przestrzegaj higieny</p></li>
          <li><p>Sprawdzaj wynik codziennie</p></li>
        </ul>
      </div>
    </div>
  );
};

export default infectionInfo;
