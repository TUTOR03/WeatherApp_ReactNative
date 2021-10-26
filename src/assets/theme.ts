import { Dimensions } from 'react-native'
import { WeatherStateT, WeatherThemesT } from '@type/WeatherStorage'

const { width, height } = Dimensions.get('window')

export const COLORS = {
  white: '#ffffff',
  lightBlue: '#4689D8',
  darkBlueOpacity: 'rgba(114, 166, 226, 0.3)',
  dark: '#313131',
}

export const FONTS = {
  h1: 35,
  h2: 30,
  h3: 25,
  h4: 20,
  h5: 15,
}

export const SIZES = {
  padding: 10,
  margin: 10,
  borderRadius: 30,
  width,
  height,
}

export const weatherThemes: WeatherThemesT = {
  Rain: {
    color: '#005ADE',
    opacityColot: '',
    icon: 'weather-rainy',
  },
  Clear: {
    color: '#f7b733',
    opacityColot: '',
    icon: 'weather-sunny',
  },
  Thunderstorm: {
    color: '#616161',
    opacityColot: '',
    icon: 'weather-lightning',
  },
  Clouds: {
    color: '#1C1C64',
    opacityColot: '',
    icon: 'weather-cloudy',
  },
  Snow: {
    color: '#17C0FF',
    opacityColot: '',
    icon: 'weather-snowy',
  },
  Drizzle: {
    color: '#076585',
    opacityColot: '',
    icon: 'weather-hail',
  },
  Haze: {
    color: '#798E93',
    opacityColot: '',
    icon: 'weather-hail',
  },
  Mist: {
    color: '#798E93',
    opacityColot: '',
    icon: 'weather-fog',
  },
}
