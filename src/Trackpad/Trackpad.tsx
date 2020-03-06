import React, { FunctionComponent } from 'react'
import { View, StyleSheet, GestureResponderEvent, PanResponderGestureState } from 'react-native'
import MultiTouches from './MultiTouches'
import * as Events from './Events'
interface TrackpadProps {
  socket: SocketIOClient.Socket
}

const Trackpad: FunctionComponent<TrackpadProps> = ({ socket }) => {
  let oldPosition: { x: number, y: number } = { x: 0, y: 0 }
  const onLeftPress = (e: GestureResponderEvent) => {
    socket.emit('trackpad', Events.clickEvent('left'))
    console.log('left Press')
  }
  const onRightPress = (e: GestureResponderEvent) => {
    socket.emit('trackpad', Events.clickEvent('right'))
    console.log("right Press")
  }
  const onMove = (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    const { vx, vy } = gestureState

    socket.emit('trackpad', Events.moveEvent({
      x: vx * 20,
      y: vy * 20
    }))

    console.log('mouse move')
  }
  const onScroll = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent
    if (oldPosition.x === 0 && oldPosition.y === 0) {
      oldPosition = {
        x: locationX,
        y: locationY
      }
    }
    socket.emit('trackpad', Events.scrollEvent({
      x: locationX - oldPosition.x,
      y: locationY - oldPosition.y
    }))
    oldPosition = {
      x: locationX,
      y: locationY
    }
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