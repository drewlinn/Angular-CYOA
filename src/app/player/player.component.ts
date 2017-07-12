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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, body: number, heart: number, mind: number, spirit: number, gold: number)
  {
    var newPlayer: Player = new Player(name, body, heart, mind, spirit, gold);
    this.playerService.addPlayer(newPlayer);
    console.log(newPlayer);
  }
}
