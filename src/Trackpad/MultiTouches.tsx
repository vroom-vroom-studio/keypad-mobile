import React, { FunctionComponent } from 'react'
import { View, PanResponder, GestureResponderEvent } from 'react-native'
// import { throttle, debounce } from 'throttle-debounce'

interface MultiTouchesProps {
  onLeftPress: (evt: GestureResponderEvent) => void;
  onRightPress: (evt: GestureResponderEvent) => void;
  onMove: (evt: GestureResponderEvent) => void;
  onScroll: (evt: GestureResponderEvent) => void;
}

const MultiTouches: FunctionComponent<MultiTouchesProps> = ({ onLeftPress, onRightPress, onMove, onScroll, children }) => {
  let beginOfEvent = 0
  let numberOfTouches = 0
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      beginOfEvent = Date.now()
      numberOfTouches = gestureState.numberActiveTouches
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}

      switch (numberOfTouches) {
        case 1:
          onMove(evt)
          break;
        case 2:
          onScroll(evt)
          break;
        default:
          return
      }

    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      const timeSinceBegin = Date.now() - beginOfEvent
      if (timeSinceBegin <= 150) {
        switch (numberOfTouches) {
          case 1:
            onLeftPress(evt)
            break;
          case 2:
            onRightPress(evt)
            break;
          default:
            return
        }
      }
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },
  });

  return (
    <View
      {...panResponder.panHandlers}
    >
      {children}
    </View>
  )
}

export default MultiTouches
