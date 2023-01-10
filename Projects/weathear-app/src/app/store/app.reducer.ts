import { ActionReducerMap } from '@ngrx/store';

import * as fromWeather from '../weather/store/weather.reducer';

export interface AppState {
  weather: fromWeather.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  weather: fromWeather.weatherReducer
}
