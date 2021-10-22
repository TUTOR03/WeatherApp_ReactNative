import { WeatherStateT } from '@type/WeatherStorage'

export const initialWeatherState: WeatherStateT = {
  city_name: '',
  lon: -1,
  lat: -1,
  weather: {
    description: '',
    temp: -1,
    type: 'Clear',
    timestamp: -1,
    additional: {
      humidity: -1,
      pressure: -1,
      temp_feels_like: -1,
      temp_min: -1,
      temp_max: -1,
      wind: {
        wind_deg: -1,
        wind_speed: -1,
      },
    },
  },
  forecast: {
    hourly: [],
    timestamp: -1,
    timezone_offset: -1,
  },
}
