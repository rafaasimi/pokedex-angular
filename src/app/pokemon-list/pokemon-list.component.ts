import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../shared/models/Pokemon';
import { PokemonTypes } from '../shared/models/PokemonTypes';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {

  pokemonsList: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      image: 'https://cdn.traction.one/pokedex/pokemon/1.png',
      types: [
        PokemonTypes.Grass,
        PokemonTypes.Poison
      ]
    },
    {
      id: 2,
      name: 'Ivysaur',
      image: 'https://cdn.traction.one/pokedex/pokemon/2.png',
      types: [
        PokemonTypes.Grass,
        PokemonTypes.Poison
      ]
    },
    {
      id: 3,
      name: 'Venusaur',
      image: 'https://cdn.traction.one/pokedex/pokemon/3.png',
      types: [
        PokemonTypes.Grass,
        PokemonTypes.Poison
      ]
    },
    {
      id: 4,
      name: 'Charmander',
      image: 'https://cdn.traction.one/pokedex/pokemon/4.png',
      types: [
        PokemonTypes.Fire,
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
