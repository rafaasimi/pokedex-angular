import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/Pokemon';
import { UtilsService } from '../shared/services/utils.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;

  constructor(public utilsService: UtilsService) {

  }

}
