import React from "react";
import "./layout.css"
import {NavBar} from "../NavBar/NavBar"
import {Footer} from "../Footer/Footer"


export const Layout = ({ children }) => {

  //Definición de estructura del sitio
  
  return (
    <div className="containerLayout">
      <NavBar/>
      {children}
      <Footer/>
    </div>
  );
};
