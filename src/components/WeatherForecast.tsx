import { COLORS, FONTS, SIZES } from '@assets/theme'
import { ForecastBlockT } from '@type/WeatherStorage'
import React, { useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { weatherThemes } from '@assets/theme'
import WindInfo from './WindInfo'

type WeatherForecastProps = {
  forecast: ForecastBlockT[]
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  const scrollRef = useRef<ScrollView>(null)

  const setScrollToElement = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    if (scrollRef.current) {
      const xPos =
        event.nativeEvent.contentOffset.x +
        0.5 * SIZES.margin -
        0.25 * SIZES.width
      scrollRef.current.scrollTo({
        x:
          (Math.floor(xPos / (0.5 * SIZES.width - SIZES.margin)) + 1) *
          (0.5 * SIZES.width - SIZES.margin),
        animated: true,
      })
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onMomentumScrollEnd={setScrollToElement}
      >
        {forecast.map((ob, index) => {
          let time = new Date(ob.timestamp * 1000)
          let hours = time.getHours().toString()
          hours = hours.length === 2 ? hours : `0${hours}`
          let minutes = time.getMinutes().toString()
          minutes = minutes.length === 2 ? minutes : `0${minutes}`
          return (
            <View key={index} style={styles.forecastBlock}>
              <Text style={styles.forecastText}>
                {hours}:{minutes}
              </Text>
              <Text style={styles.forecastText}>{ob.temp}°</Text>
              <WindInfo
                wind_speed={ob.wind_speed}
                wind_deg={ob.wind_deg}
                color={COLORS.white}
                style={styles.forecastText}
              />
              <MaterialCommunityIcons
                size={64}
                name={weatherThemes[ob.type].icon}
                color={COLORS.white}
              />
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  forecastText: {
    color: COLORS.white,
    fontSize: FONTS.h4,
    textAlign: 'center',
  },
  forecastBlock: {
    borderRadius: SIZES.borderRadius,
    padding: SIZES.padding,
    width: 0.5 * SIZES.width - SIZES.margin * 2,
    backgroundColor: COLORS.darkBlueOpacity,
    marginHorizontal: SIZES.margin / 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default WeatherForecast
