import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@type/Navigation'
import CustomSafeAreaView from '@components/CustomSafeAreaView'
import { COLORS, FONTS, SIZES } from '@assets/theme'
import { AntDesign } from '@expo/vector-icons'
import { avaliableCities } from '@assets/WeatherStorage'
import { useWeather } from '@hooks/WeatherStorage'
import Loader from '@components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'

type CitiesProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cities'>
}

const Cities: React.FC<CitiesProps> = ({ navigation }) => {
  const { state, dispatch } = useWeather()
  const [loading, setLoading] = useState<boolean>(false)

  const navigateBack = () => {
    navigation.navigate('Weather')
  }

  const changeSity = async (cityName: string) => {
    setLoading(true)
    try {
      const res = await fetch(`http://10.0.2.2:8081/weather/${cityName}`)
      const json = await res.json()
      AsyncStorage.setItem('prevWeather', JSON.stringify(json))
      dispatch({ type: 'SET_WEATHER_STATE', new_state: json })
      setLoading(false)
      navigation.navigate('Weather')
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <CustomSafeAreaView style={styles.mainContainer}>
      <Loader loading={loading} />
      <View style={styles.headerBlock}>
        {state.city_name ? (
          <TouchableOpacity onPress={navigateBack} style={styles.closeButton}>
            <AntDesign size={32} name="close" color={COLORS.white} />
          </TouchableOpacity>
        ) : (
          <View style={styles.fakeBlock} />
        )}
        <Text style={styles.headerText}>Управление городами</Text>
        <View style={styles.fakeBlock} />
      </View>
      <ScrollView
        style={styles.avaliableCities}
        contentContainerStyle={styles.avaliableCitiesContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {avaliableCities.map((cityName, index) => (
          <TouchableOpacity
            onPress={() => {
              changeSity(cityName)
            }}
            style={styles.cityBlock}
            key={cityName}
          >
            <Text style={styles.cityText}>{cityName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
  },
  headerBlock: {
    width: '95%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    flex: 0,
  },
  headerText: {
    color: COLORS.white,
    fontSize: FONTS.h3,
    textAlign: 'center',
    flex: 1,
  },
  fakeBlock: {
    flex: 0,
    width: 32,
    height: 32,
  },
  avaliableCities: {
    width: '100%',
    marginTop: SIZES.margin * 2,
  },
  avaliableCitiesContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cityBlock: {
    padding: SIZES.padding * 2,
    borderRadius: SIZES.borderRadius,
    backgroundColor: COLORS.darkBlueOpacity,
    marginRight: SIZES.margin * 2,
    marginBottom: SIZES.margin * 2,
  },
  cityText: {
    fontSize: FONTS.h5,
    color: COLORS.white,
  },
})

export default Cities
