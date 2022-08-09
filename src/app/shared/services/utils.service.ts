import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  formatPokemonNumber(idPokemon: number) {
    // Preenche o número do pokemon com zero a esquerda (Formato: #001)
    return String(idPokemon).padStart(3, '0');
  }
}
