import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, View, StyleProp, TextStyle } from 'react-native'
import { COLORS } from '@assets/theme'

type WindInfoProps = {
  wind_speed: number
  wind_deg: number
  style?: StyleProp<TextStyle>
  color: string
}

const WindInfo: React.FC<WindInfoProps> = ({
  wind_speed,
  wind_deg,
  style,
  color,
}) => {
  return (
    <View style={styles.windContainer}>
      <FontAwesome
        style={{
          textAlign: 'center',
          transform: [{ rotateZ: `${wind_deg - 45}deg` }],
        }}
        name="location-arrow"
        size={32}
        color={color}
      />
      <Text style={style}>{wind_speed} m/s</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  windContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
})

export default WindInfo
