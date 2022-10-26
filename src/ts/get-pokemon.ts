import axios from "axios";
import { Pokemon } from "./interface/pokemon";

const fetchPokemon = async (idPokemon: number) => {
  let pokemon: any;
  const API_URL: string = "https://pokeapi.co/api/v2/pokemon/";
  // const { data } = await axios.get<Pokemon>(`${API_URL}${idPokemon}`);
  // return data;
  await axios
    .get<Pokemon>(`${API_URL}${idPokemon}`)
    .then((resp) => {
      pokemon = resp.data;
    })
    .catch((error) => {
      pokemon = error;
    });
  return pokemon;
};

export { fetchPokemon };
