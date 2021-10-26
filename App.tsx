import Loader from '@components/Loader'
import Navigation from '@components/Navigation'
import { WeatherContextProvider } from '@hooks/WeatherStorage'
import React from 'react'

const App: React.FC = () => {
  return (
    <WeatherContextProvider>
      <Navigation />
    </WeatherContextProvider>
  )
}

export default App
