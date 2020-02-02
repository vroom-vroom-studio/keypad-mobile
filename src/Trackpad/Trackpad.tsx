import React, { FunctionComponent } from 'react'
import { View, StyleSheet, GestureResponderEvent } from 'react-native'
import MultiTouches from './MultiTouches'

interface TrackpadProps {
  socket: SocketIOClient.Socket
}

const Trackpad: FunctionComponent<TrackpadProps> = ({ socket }) => {
  const onLeftPress = (e: GestureResponderEvent) => {
    console.log('ping')
    socket.emit('ping')

    console.log('left Press')
  }
  const onRightPress = (e: GestureResponderEvent) => {
    console.log("right Press")
  }
  const onMove = (e: GestureResponderEvent) => {
    console.log('mouse move')
  }
  const onScroll = (e: GestureResponderEvent) => {
    console.log('mouse scroll')
  }
  return (
    <MultiTouches
      onRightPress={onRightPress}
      onLeftPress={onLeftPress}
      onMove={onMove}
      onScroll={onScroll}
    >
      <View style={styles.trackpadContainer} />
    </MultiTouches>
  )
}

const styles = StyleSheet.create({
  trackpadContainer: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default Trackpad