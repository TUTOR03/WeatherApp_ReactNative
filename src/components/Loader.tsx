import { COLORS, SIZES } from '@assets/theme'
import React from 'react'
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'

type LoaderProps = {
  loading: boolean
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.white} />
      </View>
    )
  }
  return null
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: SIZES.width,
    height: SIZES.height,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    zIndex: 10,
  },
})

export default Loader
