import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"

import { Text } from './text'

export const Link = ({ title, style = {}, ...props }) => {
  const { color = "#7E8F52", ...otherStyle } = style
  return (
    <TouchableOpacity style={otherStyle} {...props}>
      <Text
        style={[
          styles.text,
          {
            color
          }
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#7E8F52",
    fontSize: 14,
    fontWeight: "500"
  }
})
