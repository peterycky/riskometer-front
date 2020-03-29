import React from 'react'
import HashLoader from "react-spinners/HashLoader";

const preload = (props) => {
  let errMsg

  if(props.err === true) {
    errMsg = <p className="color--danger preloader-sub--no-margin">
      Ups... Coś poszło nie tak
    </p>;
    // console.log('error wykryty')
  } else {
    // console.log('error NIE wykryty')
  }

  return (
    <div className="preloader">
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="Logo"
        className="preloader--img"
      />
      <div className="preloader-text">
        <h1>Przetwarzamy Twoje dane</h1>
        <h2 className="color--accent">Proszę czekać</h2>
      </div>
      {/* PRELOADER ANIMATION */}
      <div className="preloader-spinner">
        <HashLoader size={120} color={"142850"} />
      </div>
      <p className="preloader-sub">
        Wynik wyświetli się tak szybko jak tylko dane będą gotowe
      </p>
      {errMsg}
    </div>
  );
}

export default preload 