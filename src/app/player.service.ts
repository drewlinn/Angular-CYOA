import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {

  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('albums');
  }

  getPlayers(){
    return this.players;
  }

  addPlayer(newPlayer: Player)  {
    this.players.push(newPlayer);
  }

}
