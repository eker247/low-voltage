import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCreatorComponent } from './player-creator/player-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const playerRoutes: Routes = [
  { path: '', component: PlayerCreatorComponent }
];

@NgModule({
  declarations: [
    PlayerCreatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlayerModule { }
