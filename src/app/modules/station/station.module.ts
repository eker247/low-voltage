import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StationStageComponent } from './station-stage/station-stage.component';
import { AuctionComponent } from './auction/auction.component';

const stationRoutes: Routes = [
  { path: '', component: StationStageComponent }
]

@NgModule({
  declarations: [StationStageComponent, AuctionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(stationRoutes)
  ]
})
export class StationModule { }
