import { useEffect, useState } from "react";
import axios from "axios";

const useGetPokemons = (idPokemon) => {
  const [pokemons, setPokemons] = useState([]);
  const API_URL = "https://pokeapi.co/api/v2/pokemon/";


  useEffect(()=>{
		async function fetchData(){
      const response = await axios.get(API_URL + idPokemon);
      setPokemons(response.data);
		}		
		fetchData()
	}, [])
  return pokemons;
};
export default useGetPokemons;
