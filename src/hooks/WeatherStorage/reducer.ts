import { WeatherStateT, WeatherStorageAction } from '@type/WeatherStorage'
import produce from 'immer'

export const reducer = produce(
  (draft: WeatherStateT, action: WeatherStorageAction): WeatherStateT => {
    switch (action.type) {
      case 'SET_WEATHER_STATE': {
        draft = action.new_state
        break
      }
    }
    return draft
  }
)
