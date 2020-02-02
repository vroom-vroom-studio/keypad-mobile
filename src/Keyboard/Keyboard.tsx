import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Keyboard = () => {
  return (
    <View style={styles.keyboardContainer}>
      <Text>KEYBOARD</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  keyboardContainer: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default Keyboard