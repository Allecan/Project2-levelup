// import axios from "axios";
// import { Pokemon } from './interface/pokemon';

// export const foo = async (idPokemon: number): Promise<Pokemon> => {
//   const API_URL: string = "https://pokeapi.co/api/v2/pokemon/";
//   const {data} = await axios.get<Pokemon>(`${API_URL}${idPokemon}`);
//   return data;
// };

// import { useEffect, useState } from "react";
// import { Pokemon } from "./interface/pokemon";
// import axios from "axios";

// const getPokemon = () => {
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     const pokemon = async (idPokemon: number) => {
//       const API_URL: string = "https://pokeapi.co/api/v2/pokemon/";
//       const { data } = await axios.get<Pokemon>(`${API_URL}${idPokemon}`);
//       setPokemons(data);
//     };
//   }, []);
//   return pokemons;
// };


