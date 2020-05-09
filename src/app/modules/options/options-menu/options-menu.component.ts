import { Component, OnInit } from '@angular/core';
import { SettingService } from 'ek-eco-game';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
  setting = SettingService;
  keys = Object.keys(SettingService);
  test = 123;

  ngOnInit(): void {}
}
