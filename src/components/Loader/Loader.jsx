import React from "react";
import "./Loader.css";
import { CgPokemon } from "react-icons/cg";

const Loader = () => {
  return (
    <div className="loader-container">
      <CgPokemon color={"var(--primary)"} size={80} className="loader" />
    </div>
  );
};

export default Loader;
