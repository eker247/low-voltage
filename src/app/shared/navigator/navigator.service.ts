import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {
  playerCreator = new Nav(this.router, '/player');
  menu = new Nav(this.router, '/menu');
  options = new Nav(this.router, '/menu/options');
  stationStage = new Nav(this.router, '/station');
  houseStage = new Nav(this.router, '/house');

  constructor(private router: Router) {}
}

export class Nav {
  url: string;

  constructor(private router: Router, url: string) {
    this.url = url;
  }

  goTo() {
    this.router.navigate([this.url]);
  }
}

