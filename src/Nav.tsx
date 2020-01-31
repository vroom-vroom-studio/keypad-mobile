import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScreensName } from './App'

interface NavProps {
  currentScreen: ScreensName,
  setCurrentScreen: (screenName: ScreensName) => void
}

type Screen = {
  value: ScreensName,
  label: string
}

const Nav = ({ currentScreen, setCurrentScreen }: NavProps) => {
  const [open, setOpen] = useState(false)
  const screens: Screen[] = [
    {
      label: "TRACKPAD",
      value: "PAD"
    },
    {
      label: "KEYBOARD",
      value: "KEY"
    }
  ]
  const handlePressNav = () => {
    setOpen(!open)
  }
  const handlePressLink = (screenName: ScreensName) => () => {
    setCurrentScreen(screenName)
    setOpen(false)
  }
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={handlePressNav}
      >
        <View style={styles.navButton}>
          <Text>{currentScreen}</Text>
        </View>
      </TouchableOpacity>
      {open && <View style={styles.navListContainer}>
        {screens.map(({ label, value }) =>
          <TouchableOpacity
            key={value}
            onPress={handlePressLink(value)}
          >
            <Text>{label}</Text>
          </TouchableOpacity>
        )}
      </View>}
    </View>


  )
}

const styles = StyleSheet.create({
  navContainer: {
    position: "relative",
    top: 15,
    left: 15,
  },
  navButton: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  navListContainer: {
    position: "absolute",
    top: 45,
    width: 75
  }
})

export default Nav