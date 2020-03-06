import React, { FunctionComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import keys, { Key } from './keys'

interface KeyboardProps {
  socket: SocketIOClient.Socket
}

const Keyboard: FunctionComponent<KeyboardProps> = ({ socket }) => {
  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.lineContainer}>
        {keys.utils.map(({ value, label, labelType }: Key) =>
          <Button key={value} label={label} type={labelType} />)}
      </View>
      <View style={styles.lineContainer}>
        {keys.numbers.map(({ value, label, labelType }: Key) =>
          <Button key={value} label={label} type={labelType} />)}
      </View>
      <View style={styles.lineContainer}>
        {keys.letters.map(({ value, label, labelType }: Key) =>
          <Button key={value} label={label} type={labelType} />)}
      </View>
      <View style={styles.lineContainer}>
        {keys.controls.map(({ value, label, labelType }: Key) =>
          <Button key={value} label={label} type={labelType} />)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: "column",
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "stretch"
  }
})

export default Keyboard