import React from 'react'
import HashLoader from "react-spinners/HashLoader"
import logo from './Logo.png'

const preload = (props) => {

  return (
    <div className="preloader">
      <img src={logo} alt="Logo" className="preloader--img" />
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
      {
        props.err && <p className="color--danger preloader-sub--no-margin">Ups... Coś poszło nie tak</p>
      }
    </div>
  )
}

export default preload 