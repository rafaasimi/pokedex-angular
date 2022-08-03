import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  formatPokemonNumber(numPokemon: string) {
    // Preenche o número do pokemon com zero a esquerda (Formato: #001)
    return numPokemon.padStart(3, '0');
  }
}
