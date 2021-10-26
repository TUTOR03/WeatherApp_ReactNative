import { COLORS, FONTS, SIZES } from '@assets/theme'
import { weatherThemes } from '@assets/theme'
import CustomSafeAreaView from '@components/CustomSafeAreaView'
import WeatherForecast from '@components/WeatherForecast'
import WeatherInfoExpanded from '@components/WeatherInfoExpanded'
import WeatherInfoMain from '@components/WeatherInfoMain'
import { useWeather } from '@hooks/WeatherStorage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@type/Navigation'
import React, { useEffect } from 'react'
import { GestureResponderEvent, StyleSheet, Text } from 'react-native'

type WeatherProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Weather'>
}

const Weather: React.FC<WeatherProps> = ({ navigation }) => {
  const { state } = useWeather()

  const changeSity = (e: GestureResponderEvent) => {
    navigation.navigate('Cities')
  }

  return (
    <CustomSafeAreaView
      style={[
        styles.mainContainer,
        { backgroundColor: weatherThemes[state.weather.type].color },
      ]}
    >
      <WeatherInfoMain
        city_name={state.city_name}
        temp={state.weather.temp}
        description={state.weather.description}
        type={state.weather.type}
        onListButtonPress={changeSity}
      />
      <WeatherInfoExpanded additional={state.weather.additional} />
      <WeatherForecast forecast={state.forecast.hourly} />
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  mainContainerNoSity: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
  },
  noSityText: {
    fontSize: FONTS.h4,
  },
})

export default Weather
