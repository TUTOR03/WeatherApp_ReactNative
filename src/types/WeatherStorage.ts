export type WeatherStateT = {
  city_name: string
  lat: number
  lon: number
  weather: {
    timestamp: number
    description: string
    temp: number
    type: keyof WeatherThemesT
    additional: WeatherAdditionalT
  }
  forecast: {
    timestamp: number
    timezone_offset: number
    hourly: ForecastBlockT[]
  }
}

export type WeatherAdditionalT = {
  pressure: number
  humidity: number
  temp_feels_like: number
  temp_min: number
  temp_max: number
  wind: {
    wind_speed: number
    wind_deg: number
  }
}

export type ForecastBlockT = {
  temp: number
  type: keyof WeatherThemesT
  timestamp: number
  wind_speed: number
  wind_deg: number
}

export type WeatherThemesT = {
  Rain: {
    color: string
    opacityColot: string
    icon: 'weather-rainy'
  }
  Clear: {
    color: string
    opacityColot: string
    icon: 'weather-sunny'
  }
  Thunderstorm: {
    color: string
    opacityColot: string
    icon: 'weather-lightning'
  }
  Clouds: {
    color: string
    opacityColot: string
    icon: 'weather-cloudy'
  }
  Snow: {
    color: string
    opacityColot: string
    icon: 'weather-snowy'
  }
  Drizzle: {
    color: string
    opacityColot: string
    icon: 'weather-hail'
  }
  Haze: {
    color: string
    opacityColot: string
    icon: 'weather-hail'
  }
  Mist: {
    color: string
    opacityColot: string
    icon: 'weather-fog'
  }
}

export type WeatherStorageAction = SetWeatherStateAction

type SetWeatherStateAction = {
  type: 'SET_WEATHER_STATE'
  new_state: WeatherStateT
}

export type avaliableCitiesT = string[]
