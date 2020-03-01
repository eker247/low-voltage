import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  location1 = { price: 10 };
  location2 = { price: 15 };
  location3 = { price: 20 };

  constructor() { }

  ngOnInit() {
  }

}
