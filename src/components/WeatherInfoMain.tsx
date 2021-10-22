import { COLORS, FONTS, SIZES, weatherThemes } from '@assets/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { WeatherThemesT } from '@type/WeatherStorage'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type WeatherInfoMainProps = {
  city_name: string
  temp: number
  description: string
  type: keyof WeatherThemesT
}

const WeatherInfoMain: React.FC<WeatherInfoMainProps> = ({
  city_name,
  temp,
  description,
  type,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.townBlock}>
        <Text style={styles.townText}>{city_name}</Text>
      </View>
      <View style={styles.temperatureBlock}>
        <Text style={styles.temperatureText}>{temp}</Text>
        <Text style={styles.temperatureSign}>°C</Text>
        <MaterialCommunityIcons
          size={90}
          name={weatherThemes[type].icon}
          color={COLORS.white}
        />
      </View>
      <View style={styles.descriptionBlock}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: SIZES.margin,
  },
  townBlock: {},
  townText: {
    color: COLORS.white,
    fontSize: FONTS.h3,
  },
  temperatureBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90,
  },
  temperatureText: {
    color: COLORS.white,
    fontSize: FONTS.h4 * 5,
    lineHeight: FONTS.h4 * 5,
  },
  temperatureSign: {
    color: COLORS.white,
    fontSize: FONTS.h4 * 2,
    lineHeight: FONTS.h4 * 2,
  },
  descriptionBlock: {},
  descriptionText: {
    color: COLORS.white,
    fontSize: FONTS.h3,
    lineHeight: FONTS.h3,
  },
})

export default WeatherInfoMain
