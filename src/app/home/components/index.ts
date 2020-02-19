import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material';
import { HomeComponent } from './home.component';


export const COMPONENTS = [
  HomeComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
