import axios from "axios";
import { Pokemon } from "./interface/pokemon";

async function fetchData(idPokemon: number) {
  const API_URL: string = "https://pokeapi.co/api/v2/pokemon/";
  const { data } = await axios.get<Pokemon>(`${API_URL}${idPokemon}`);
  return data;
}

export default function getPokemons() {
  for (let i = 1; i < 7; i++) {
    let random: number = Math.floor(Math.random() * (905 - 1 + 1) + 1);
    fetchData(random).then(function (pokemonRes) {
      let pokemonName: string = pokemonRes.name;
      let pokemonImg: string = pokemonRes.sprites.front_default;
      document.getElementById(`pokecard-img-${i}`).src = pokemonImg;
      document.getElementById(`pokecard-img-${i}`).alt = pokemonName;
      document.getElementById(`pokecard-title-${i}`).innerHTML = pokemonName;
    });
  }
}
