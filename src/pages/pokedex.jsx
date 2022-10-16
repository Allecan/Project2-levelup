import React, { useEffect } from "react";
import PokeCard from "../components/pokecard";
import "../css/pokedex.css";
import getPokemons from "../ts/get-pokemon";

function Pokedex() {
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className="flex flex-col mx-[156px] place-content-center min-h-screen">
      <a href="/" className="fixed left-16 top-16">
        <h3 id="navhome">
          <span className="text-[#F18522]">← </span>Return to home
        </h3>
      </a>
      <div className="grid grid-cols-3 gap-10 items-center mx-auto">
        <div className="poke-card flex flex-col items-center justify-center gap-6">
          <img id="pokecard-img-1" className="w-40 h-40" src={""} alt={""} />
          <h2 id="pokecard-title-1"></h2>
        </div>
        <div className="poke-card flex flex-col items-center justify-center gap-6">
          <img id="pokecard-img-2" className="w-40 h-40" src={""} alt={""} />
          <h2 id="pokecard-title-2"></h2>
        </div>
        <div className="poke-card flex flex-col items-center justify-center gap-6">
          <img id="pokecard-img-3" className="w-40 h-40" src={""} alt={""} />
          <h2 id="pokecard-title-3"></h2>
        </div>
        <div className="poke-card flex flex-col items-center justify-center gap-6">
          <img id="pokecard-img-4" className="w-40 h-40" src={""} alt={""} />
          <h2 id="pokecard-title-4"></h2>
        </div>
        <div className="poke-card flex flex-col items-center justify-center gap-6">
          <img id="pokecard-img-5" className="w-40 h-40" src={""} alt={""} />
          <h2 id="pokecard-title-5"></h2>
        </div>
        <div className="poke-card flex flex-col items-center justify-center gap-6">
          <img id="pokecard-img-6" className="w-40 h-40" src={""} alt={""} />
          <h2 id="pokecard-title-6"></h2>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
