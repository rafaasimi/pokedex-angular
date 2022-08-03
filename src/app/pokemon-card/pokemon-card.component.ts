import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../shared/utils.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() numPokemon: string = '';

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
  }

}
