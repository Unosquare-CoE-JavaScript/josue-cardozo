import { Action } from "@ngrx/store";

export const ADD_WEATHER = '[Weather] Add Weather';
export const ADD_WEATHER_START = '[Weather] Add Weather start';
export const ADD_WEATHER_FINISH = '[Weather] Add Weather finish';
export const ADD_WEATHER_FAIL = '[Weather] Add Weather fail';

export class AddWeatherStart implements Action {
  readonly type: string = ADD_WEATHER_START;
}

export class AddWeatherFail implements Action {
  readonly type: string = ADD_WEATHER_FAIL;
}

export class AddWeatherFinish implements Action {
  readonly type: string = ADD_WEATHER_FINISH;
  constructor(public payload: { city: string, weather: string }) { }
}

export class AddWeather implements Action {
  readonly type: string = ADD_WEATHER;
  constructor(public payload: { city: string, weather: string }) { }
}

export type WeatherAction = AddWeatherFinish | AddWeather;
