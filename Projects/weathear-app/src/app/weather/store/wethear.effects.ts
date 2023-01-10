import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { switchMap, map, catchError, of } from "rxjs";

import * as fromApp from '../../store/app.reducer';
import * as WeatherActions  from '../store/weather.actions';

@Injectable()
export class WeatherEffects {
  private PATH: string = 'http://api.weatherapi.com/v1/current.json';
  private KEY: string = 'fe77753338cd4271be5182046222712';

  getWeather$ = createEffect(() => this.actions$.pipe(
    ofType<WeatherActions.AddWeather>(WeatherActions.ADD_WEATHER),
    switchMap(
      (payload:any) => {
        return this.http
        .get<any>(`${this.PATH}?key=${this.KEY}&q=${payload.payload.city}&aqi=no`)
        .pipe(
          catchError((err) => {
            return of(new WeatherActions.AddWeatherFail());
          })
        );
      }
    ),
    map(
      resp => {
        return new WeatherActions.AddWeatherFinish({city: resp.location.name, weather: `${resp.current.temp_c}~C`});
      }
    )
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}
}
