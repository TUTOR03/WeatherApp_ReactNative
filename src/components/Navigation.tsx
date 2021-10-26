import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Weather from '@screens/Weather'
import Cities from '@screens/Cities'
import { useWeather } from '@hooks/WeatherStorage'
import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { WeatherStateT } from '@type/WeatherStorage'

const Stack = createNativeStackNavigator()

const Navigation: React.FC = () => {
  const { state, dispatch } = useWeather()
  const [appReadyState, setAppReadyState] = useState<boolean>(false)

  const preloadData = async () => {
    try {
      const prevData = await AsyncStorage.getItem('prevWeather')
      if (prevData) {
        const prevDataJson: WeatherStateT = JSON.parse(prevData)
        const res = await fetch(
          `http://10.0.2.2:8081/weather/${prevDataJson.city_name}`
        )
        const json = await res.json()
        AsyncStorage.setItem('prevWeather', JSON.stringify(json))
        dispatch({ type: 'SET_WEATHER_STATE', new_state: json })
      }
    } catch (error) {}
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
      <Stack.Navigator
        initialRouteName={state.city_name ? 'Weather' : 'Cities'}
      >
        <Stack.Screen
          name="Weather"
          options={{ headerShown: false }}
          component={Weather}
        />
        <Stack.Screen
          name="Cities"
          options={{
            headerShown: false,
          }}
          component={Cities}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
