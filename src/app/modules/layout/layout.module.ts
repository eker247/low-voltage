import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  exports: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule {}
