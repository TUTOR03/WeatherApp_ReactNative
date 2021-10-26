import { COLORS, FONTS, SIZES, weatherThemes } from '@assets/theme'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { WeatherThemesT } from '@type/WeatherStorage'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'

type WeatherInfoMainProps = {
  city_name: string
  temp: number
  description: string
  type: keyof WeatherThemesT
  onListButtonPress: (event: GestureResponderEvent) => void
}

const WeatherInfoMain: React.FC<WeatherInfoMainProps> = ({
  city_name,
  temp,
  description,
  type,
  onListButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.townBlock}>
        <TouchableOpacity onPress={onListButtonPress} style={styles.listButton}>
          <Entypo size={32} name="add-to-list" color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.townText}>{city_name}</Text>
        <View style={styles.fakeBlock} />
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
    height: '26%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.margin,
  },
  listButton: {
    flex: 0,
  },
  fakeBlock: {
    width: 32,
    height: 32,
    flex: 0,
  },
  townBlock: {
    width: '95%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  townText: {
    color: COLORS.white,
    fontSize: FONTS.h3,
    textAlign: 'center',
    flex: 1,
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
