import { useState } from "react";
import PokeCard from "../components/pokecard";
import PikachuIMG from "../assets/imgs/pikachu2.png";
import "../css/pokedex.css";
import suma from "../ts/test";
// import getPokemon from "../ts/get-pokemon";
import { getPokemon } from "../ts/get-pokemon";

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
        <PokeCard
          pokeimg={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
          }
          pokename={"Pikachu"}
        />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
        <PokeCard pokeimg={PikachuIMG} pokename={"Pikachu"} />
      </div>
      <button
        className="mt-12 w-14 h-14 mx-auto"
        onClick={() => {
          console.log("suma: " + suma(100, 3));
          getPokemon(1)
            .then((resp) => console.log(resp))
            .catch((error) => console.log(error))
            .finally(() => console.log("fin de getpokemn"));
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Pokedex;
