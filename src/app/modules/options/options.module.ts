import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';

const optionsRoutes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'options', component: OptionsMenuComponent }
];

@NgModule({
  declarations: [OptionsMenuComponent, MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(optionsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class OptionsModule {}
