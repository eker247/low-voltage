import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './modules/layout/layout.module';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'options' },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/options/options.module').then(mod => mod.OptionsModule)
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./modules/player/player.module').then(mod => mod.PlayerModule)
  },
  {
    path: 'station',
    loadChildren: () =>
      import('./modules/station/station.module').then(mod => mod.StationModule)
  },
  {
    path: 'house',
    loadChildren: () =>
      import('./modules/house/house.module').then(mod => mod.HouseModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
