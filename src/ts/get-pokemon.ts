import axios from "axios";

export const getPokemon = async (idPokemon: number) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
  );
  return response;
};

// export default async function getPokemon() {
//     console.log("Aqui es typescript");
//     return 1;
//   };
