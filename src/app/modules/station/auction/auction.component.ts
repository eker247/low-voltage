import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player, StationStage } from 'ek-eco-game';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {
  @Input() stationStage: StationStage;
  @Output() stageFinished = new EventEmitter<Player>();
  players: Player[];
  currentPlayer: Player;

  constructor() {}

  ngOnInit(): void {
    this.players = this.stationStage.stagePlayers;
    this.currentPlayer = this.getCurrentPlayer();
  }

  outbid(price: number) {
    this.stationStage.outbidAuction(this.currentPlayer, +price);
    this.updatePlayersWithActualPrice();
    this.isAuctionFinished();
    this.currentPlayer = this.getCurrentPlayer();
  }

  updatePlayersWithActualPrice() {
    this.players = this.players.filter(
      (player) => player.cash > this.stationStage.actualPrice
    );
  }

  skipPlayer() {
    this.players = this.players.filter(
      (player) => player.id !== this.currentPlayer.id
    );
    if (!this.isAuctionFinished()) {
      this.currentPlayer = this.getCurrentPlayer();
    }
  }

  getCurrentPlayer() {
    const highestIdx = this.players.findIndex(
      (pl) => pl.id === this.stationStage.playerWithHighestWage.id
    );
    return highestIdx < this.players.length - 1
      ? this.players[highestIdx + 1]
      : this.players[0];
  }

  isAuctionFinished(): boolean {
    if (this.players.length < 2) {
      this.stationStage.buyStation();
      this.stageFinished.emit(this.currentPlayer);
      return true;
    }
    return false;
  }
}
