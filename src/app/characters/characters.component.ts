import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
