import { SIZES } from '@assets/theme'
import React from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native'

type CustomSafeAreaViewProps = {
  style?: StyleProp<ViewStyle>
}

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({
  children,
  style = {},
}) => {
  return (
    <SafeAreaView
      style={[
        {
          paddingTop:
            Platform.OS === 'android' && StatusBar.currentHeight
              ? StatusBar.currentHeight + SIZES.padding
              : SIZES.padding,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  )
}

export default CustomSafeAreaView
