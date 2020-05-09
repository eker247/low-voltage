import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../../../shared/navigator/navigator.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  constructor(public navigator: NavigatorService) {}

  ngOnInit(): void {}
}
