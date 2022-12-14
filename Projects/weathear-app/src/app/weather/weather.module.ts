import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    RouterModule.forChild([{ path:'', component: WeatherComponent}]),
    MaterialModule,
    CommonModule,
    FormsModule,
  ]
})
export class WeatherModule { }
