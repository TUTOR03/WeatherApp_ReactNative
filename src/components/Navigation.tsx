import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Weather from '@screens/Weather'
import Cities from '@screens/Cities'
import { useWeather } from '@hooks/WeatherStorage'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()

const Navigation: React.FC = () => {
  const { state, dispatch } = useWeather()

  const [appReadyState, setAppReadyState] = useState<boolean>(false)

  const preloadData = async () => {
    const res = await fetch('http://10.0.2.2:8081/weather/Санкт-Петербург')
    const json = await res.json()
    dispatch({ type: 'SET_WEATHER_STATE', new_state: json })
  }

  const appReady = () => {
    setAppReadyState(() => true)
  }

  if (!appReadyState) {
    return (
      <AppLoading
        startAsync={preloadData}
        onFinish={appReady}
        onError={console.warn}
      />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen
          name="Weather"
          options={{ headerShown: false }}
          component={Weather}
        />
        <Stack.Screen
          name="Cities"
          options={{ headerShown: false }}
          component={Cities}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
