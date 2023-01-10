import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import * as WeatherActions from './store/weather.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  city: any;
  displayedColumns: string[] = ['city', 'weather'];
  private addWeatherSub: Subscription = Subscription.EMPTY;
  weathers: any;
  currWeather: any;
  error: any;
  
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.addWeatherSub = this.store.select('weather').subscribe(weatherState => {
      this.isAdd = weatherState.isAdding;
      this.weathers = weatherState.weathers;
      this.currWeather = weatherState.currWeather;
      this.error = weatherState.error;
    })
  }

  AddWeather() {
    this.store.dispatch(new WeatherActions.AddWeather({city:this.city, weather:''}));
  }

  quitError() {
    this.store.dispatch(new WeatherActions.AddWeatherFail());
  }
  
  ngOnDestroy(): void {
    this.addWeatherSub.unsubscribe();
  }
}
