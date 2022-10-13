import { useState } from "react";
import PokeCard from "../components/pokecard";
import PikachuIMG from "../assets/imgs/pikachu2.png";
import "../css/pokedex.css";

function Pokedex() {
  return (
    <div className="flex flex-col mx-[156px] place-content-center min-h-screen">
      <a href="/" className="fixed left-16 top-16">
        <h3 id="navhome">
          <span className="text-[#F18522]">← </span>Return to home
        </h3>
      </a>
      <div className="grid grid-cols-3 gap-10 items-center mx-auto">
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
      </div>
    </div>
  );
}

export default Pokedex;
