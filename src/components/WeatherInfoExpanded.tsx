import { COLORS, FONTS, SIZES } from '@assets/theme'
import { WeatherAdditionalT } from '@type/WeatherStorage'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type WeatherInfoExpandedProps = {
  additional: WeatherAdditionalT
}

const WeatherInfoExpanded: React.FC<WeatherInfoExpandedProps> = ({
  additional,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <Text style={styles.infoBlockName}>Влажность</Text>
        <Text style={styles.infoBlockText}>{additional.humidity}%</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.infoBlockName}>Давление</Text>
        <Text style={styles.infoBlockText}>{additional.pressure}mmHg</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.infoBlockName}>Ощущается</Text>
        <Text style={styles.infoBlockText}>{additional.temp_feels_like}°C</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.infoBlockName}>Мин. температура</Text>
        <Text style={styles.infoBlockText}>{additional.temp_min}°C</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.infoBlockName}>Макс. температура</Text>
        <Text style={styles.infoBlockText}>{additional.temp_max}°C</Text>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.infoBlockName}>Ветер</Text>
        <Text style={styles.infoBlockText}>
          {additional.wind.wind_speed} m/s
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkBlueOpacity,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.padding * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '30%',
    justifyContent: 'center',
    alignContent: 'space-between',
    marginBottom: SIZES.margin,
  },
  infoBlock: {
    width: '50%',
  },
  infoBlockName: {
    fontSize: FONTS.h5,
    color: COLORS.white,
  },
  infoBlockText: {
    fontSize: FONTS.h4,
    color: COLORS.white,
  },
})

export default WeatherInfoExpanded
