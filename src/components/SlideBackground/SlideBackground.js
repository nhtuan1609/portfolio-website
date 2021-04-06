import "./SlideBackground.css";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function SlideBackground() {
  return (
    <div id="home" className="background">
      <a className="scroll-down-link" href="#about">
        <BsChevronDoubleDown className="scroll-down-icon"></BsChevronDoubleDown>
      </a>
    </div>
  );
}
