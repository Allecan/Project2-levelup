import React from "react";
import PokeCard from "../components/pokecard";
import useGetPokemons from "../js/pokemonHook";
import PikachuIMG from "../assets/imgs/pikachu2.png";
import "../css/pokedex.css";
// import suma from "../ts/test";
// import getPokemon from "../ts/get-pokemon";
// import { getPokemon } from "../ts/get-pokemon";

function Pokedex() {
  //   function setSixPokemons() {
  //     console.log("suma: " + suma(100, 3));
  //     let pokemones = [];
  //     const maxPokemons = 6;
  //     let rand = Math.floor(Math.random() * (905 - 1 + 1) + 1);
  //     getPokemon(rand)
  //       .then((pokemon) => console.log(pokemon.sprites.front_default))
  //       .catch((error) => console.log(error));
  //   }
  const pokemons = useGetPokemons(2);
  function test() {
    console.log(typeof(pokemons));
    console.log(pokemons.length);
  }
  return (
    <div className="flex flex-col mx-[156px] place-content-center min-h-screen">
      <a href="/" className="fixed left-16 top-16">
        <h3 id="navhome">
          <span className="text-[#F18522]">← </span>Return to home
        </h3>
      </a>
      <div className="grid grid-cols-3 gap-10 items-center mx-auto">
        {/* {pokemons.map((pokemon) => (
          <PokeCard
            pokeimg={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
            }
            pokename={"Pikachu"}
          />
        ))} */}
      </div>
      <button
        className="mt-12 w-14 h-14 mx-auto"
        onClick={() => {
          test();
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Pokedex;
