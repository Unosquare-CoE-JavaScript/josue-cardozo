import * as WeatherActions from "./weather.actions";

export interface State {
  weathers: { city: string, weather:string }[];
  isAdding: boolean;
  currWeather: { city: string, weather:string };
  error: boolean;
}

const initialState: State = {
  weathers: [],
  isAdding: false,
  currWeather: { city: '', weather: ''},
  error: false
}

export function weatherReducer(state: State = initialState, action: WeatherActions.WeatherAction) {
  switch(action.type) {
    case WeatherActions.ADD_WEATHER_FAIL:
      return {
        ...state,
        weathers: [...state.weathers],
        isAdding: false,
        currWeather: state.weathers[state.weathers.length-1],
        error: !state.error
      };
    case WeatherActions.ADD_WEATHER_START:
      return {
        ...state,
        weathers: [...state.weathers],
        isAdding: true,
        currWeather: state.currWeather,
      };
      case WeatherActions.ADD_WEATHER:
      return {
        ...state,
        weathers: [...state.weathers],
        isAdding: false,
        currWeather: {city: action.payload.city, weather: ''},
      };
      case WeatherActions.ADD_WEATHER_FINISH:
        return {
          ...state,
          weathers: [...state.weathers, action.payload], //.push(action.payload), //[...state.weathers, action.payload] //error
          isAdding: state.isAdding,
          currWeather: action.payload // action.payload.weather
      };  
    default:
      return state;
  }
}
