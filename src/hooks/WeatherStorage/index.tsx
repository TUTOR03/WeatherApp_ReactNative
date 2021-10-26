import {
  getInitialWeatherState,
  initialWeatherState,
} from '@assets/WeatherStorage'
import { WeatherStateT, WeatherStorageAction } from '@type/WeatherStorage'
import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducer'

const WeatherContext = createContext<{
  state: WeatherStateT
  dispatch: React.Dispatch<WeatherStorageAction>
}>({
  state: getInitialWeatherState(),
  dispatch: () => {},
})

export const useWeather = () => {
  const { state, dispatch } = useContext(WeatherContext)
  return { state, dispatch }
}

export const WeatherContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<typeof reducer>(
    reducer,
    getInitialWeatherState()
  )

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  )
}
