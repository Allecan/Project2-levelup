import React, { useState, useEffect } from "react";
import PokeCard from "../components/pokecard";
import "../css/pokedex.css";
import { fetchPokemon } from "../ts/get-pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const handleGetPokemonByID = async () => {
      for (let i = 1; i < 7; i++) {
        let random = Math.floor(Math.random() * (905 - 1 + 1) + 1);
        let response = await fetchPokemon(random);
        setPokemons((oldArray) => [...oldArray, response]);
      }
    };
    handleGetPokemonByID();
  }, []);

  return (
    <div className="flex flex-col mx-[156px] place-content-center min-h-screen">
      <a href="/" className="fixed left-16 top-16">
        <h3 id="navhome">
          <span className="text-[#F18522]">← </span>Return to home
        </h3>
      </a>
      <div className="grid grid-cols-3 gap-10 items-center mx-auto">
        {pokemons.map(function (pokemon) {
          let img = pokemon.sprites.front_default;
          if (pokemon.sprites.front_default === null) {
            img = pokemon.sprites.other["official-artwork"].front_default;
          }
          return (
            <PokeCard key={pokemon.id} pokeimg={img} pokename={pokemon.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Pokedex;
