import { Component, OnInit } from '@angular/core';
import {
  Player,
  PlayerService,
  Station,
  StationService,
  StationStage,
} from 'ek-eco-game';
import { NavigatorService } from '../../../shared/navigator/navigator.service';

@Component({
  selector: 'app-station-stage',
  templateUrl: './station-stage.component.html',
  styleUrls: ['./station-stage.component.scss'],
})
export class StationStageComponent implements OnInit {
  players: Player[];
  player: Player;
  currentStations: Station[];
  nextStations: Station[];
  playerWithHighestPrice: Player;
  currentStation: Station;
  stationStage: StationStage;
  substage: string;
  nextStageLink: string;

  constructor(private navigator: NavigatorService) {}

  ngOnInit(): void {
    this.initPlayers();
    this.initStage();
    this.setStations();
    this.substage = 'Choosing';
    this.nextStageLink = this.navigator.houseStage.url;
  }

  initPlayers() {
    if (!PlayerService.players.length) {
      this.navigator.playerCreator.goTo();
    }
    PlayerService.setOrder();
    this.players = PlayerService.getPlayersDescending();
  }

  initStage() {
    this.stationStage = new StationStage();
    this.player = this.stationStage.getCurrentPlayer();
  }

  setStations() {
    this.currentStations = this.stationStage.getStationsToBuy();
    this.nextStations = StationService.getNextStations();
  }

  chooseStation(station: Station) {
    this.stationStage.setActualStation(station, this.player);
    if (this.players.length > 1) {
      this.substage = 'Auction';
    } else {
      this.stationStage.buyStation();
      this.substage = 'End';
    }
  }

  skipChoosingStation() {
    try {
      this.stationStage.removePlayer(this.player);
      this.player = this.stationStage.getCurrentPlayer();
    } catch {
      this.substage = 'End';
    }
  }

  prepareNextPlayerAndStations(auctionWinner: Player) {
    this.players = this.stationStage.stagePlayers;
    if (!this.stationStage.isStageFinished()) {
      this.setStations();
      this.player = this.stationStage.getCurrentPlayer();
      this.substage = 'Choosing';
    } else {
      this.substage = 'End';
    }
  }
}
