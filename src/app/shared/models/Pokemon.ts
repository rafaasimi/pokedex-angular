import { PokemonTypes } from "./PokemonTypes";

export interface Pokemon {
    id: number,
    name: string,
    image: string,
    types: PokemonTypes[]
  }