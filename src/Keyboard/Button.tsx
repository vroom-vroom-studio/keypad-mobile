import React, { FunctionComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

interface ButtonProps {
  label: string
  type?: "STRING" | "IMG"
}

const Button: FunctionComponent<ButtonProps> = ({ label, type }) => {
  return (
    <View
      style={[
        styles.buttonContainer,
        { width: label.length === 1 ? 40 : 'auto' }
      ]}
    >
      {/* {type === "IMG" ?
        <Image width={30} height={30} source={{ uri: label }} /> :
        <Text>{label}</Text>
      } */}
      <Text>{label}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Button