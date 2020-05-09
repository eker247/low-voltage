import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Player, PlayerService, SettingService } from 'ek-eco-game';
import { FormValidator } from '../../../utils/FormValidator';
import { NavigatorService } from '../../../shared/navigator/navigator.service';

@Component({
  selector: 'app-player-creator',
  templateUrl: './player-creator.component.html',
  styleUrls: ['./player-creator.component.scss']
})
export class PlayerCreatorComponent implements OnInit, OnDestroy {
  form = new FormGroup({});

  player: Player;

  constructor(private navigator: NavigatorService) {}

  ngOnInit(): void {
    this.form.addControl(
      'players',
      new FormArray(
        PlayerService.players.map(player => new FormControl(player.name))
      )
    );
  }

  ngOnDestroy() {}

  addPlayer() {
    (this.form.controls.players as FormArray).push(
      new FormControl('', FormValidator.notEmpty())
    );
  }

  removePlayer(index: number) {
    (this.form.controls.players as FormArray).removeAt(index);
    this.updatePlayers();
  }

  savePlayers() {
    if (this.form.valid) {
      this.updatePlayers();
      this.navigator.stationStage.goTo();
    } else {
      console.log('Player not correct');
    }
  }

  updatePlayers() {
    PlayerService.players = this.form.value.players.map(
      (name: string, i: number) =>
        new Player(i, name, SettingService.STARTING_CASH)
    );
  }
}
