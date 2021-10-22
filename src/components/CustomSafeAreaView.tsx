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
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  )
}

export default CustomSafeAreaView
