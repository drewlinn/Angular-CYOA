import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [ PlayerService]
})

export class PlayerComponent implements OnInit {
  name: string;

  abilityPoints: number = 8;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, gender: string, body: number, heart: number, mind: number, spirit: number, inventory: string[], gold: number = 0)
  {
    var newPlayer: Player = new Player(name, gender, body, heart, mind, spirit, inventory, gold);
    this.playerService.addPlayer(newPlayer);
    console.log(newPlayer);
  }
}
