import React, { useState, useContext, Context } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { context, createStore, Action, Reducer } from './GlobalContext/GlobalContext1'
import { IGlobalContext } from './App'
type Screen = {
  value: ScreenNames,
  label: string
}

export type ScreenNames = "PAD" | "KEY" | "SET"

export interface NavState {
  screen: Screen;
  screens: Screen[];
}

const initilaState: NavState = {
  screen: {
    label: "TRACKPAD",
    value: "PAD"
  },
  screens: [
    {
      label: "TRACKPAD",
      value: "PAD"
    },
    {
      label: "KEYBOARD",
      value: "KEY"
    },
    {
      label: "SETTINGS",
      value: "SET"
    }
  ]
}

interface SetScreenData {
  type: 'SET_SCREEN',
  screen: Screen
}

type NavActionData = SetScreenData

export const setScreen = (screen: ScreenNames) => ({
  type: 'SET_SCREEN',
  data: {
    screen
  }
})

const reducer: Reducer<NavState, NavActionData> = (state, action) => {
  const { type, data } = action
  switch (type) {
    case 'SET_SCREEN':
      const { screen } = data
      return { ...state, screen }
    default:
      return state
  }
}

export const NavStore = createStore('nav', initilaState, reducer)

const Nav = () => {
  const { nav } = useContext<IGlobalContext>(context as Context<IGlobalContext>)
  console.log(nav)
  const [open, setOpen] = useState(false)
  const handlePressNav = () => {
    setOpen(!open)
  }
  const handlePressLink = (screenName: ScreenNames) => () => {
    setScreen(screenName)
  }

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={handlePressNav}
      >
        <View style={styles.navButton}>
          <Text>{nav.screen.value}</Text>
        </View>
      </TouchableOpacity>
      {open && <View style={styles.navListContainer}>
        {nav.screens.map(({ label, value }) =>
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
    position: "absolute",
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
    flexDirection: 'row',
    position: "absolute",
    top: 45,
    width: 75
  }
})

export default Nav