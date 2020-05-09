import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from 'ek-eco-game';

@Component({
  selector: 'app-house-stage',
  templateUrl: './house-stage.component.html',
  styleUrls: ['./house-stage.component.scss']
})
export class HouseStageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    PlayerService.setPlayers(
      new Array(2).fill(null).map(
        (name: string, id: number) => new Player(id + 1, `Player ${id + 1}`, 100)
      )
    );
    console.log('REMOVE TMP PLAYERS');

  }

}
