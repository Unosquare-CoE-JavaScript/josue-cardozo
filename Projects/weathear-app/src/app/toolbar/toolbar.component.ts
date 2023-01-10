import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as WeatherActions from '../weather/store/weather.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private store: Store<fromApp.AppState>) { }

  addWeather() {    
    this.store.dispatch(new WeatherActions.AddWeatherStart())
  }
}
