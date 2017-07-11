import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {

  players: Player[] = [];

  constructor() { }

  addPlayer(newPlayer: Player)  {
    this.players.push(newPlayer);
  }

}
