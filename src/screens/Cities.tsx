import React from 'react'
import { Text } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@type/Navigation'

type CitiesProps = {
  text: string
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cities'>
}

const Cities: React.FC<CitiesProps> = ({ text }) => {
  return <Text>{text}</Text>
}

export default Cities
