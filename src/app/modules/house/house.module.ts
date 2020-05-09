import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseStageComponent } from './house-stage/house-stage.component';
import { RouterModule, Routes } from '@angular/router';
import { HouseStage } from 'ek-eco-game';

const routes: Routes = [
  { path: '', component: HouseStageComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [HouseStageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HouseModule { }
