import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Feather';

import { Text } from './text'
import { COLORS, rowCenter, bgWhite, borderRadius, centerBetween } from '../assets/styles';

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

export const StyledLink = ({
  title, 
  style
}) => {
  return <TouchableOpacity style={[styles.styledLink, style]}>
    <Text>{title}</Text>
    <Icon name="chevron-right" color={COLORS.primary}  size={25} />
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  text: {
    color: "#7E8F52",
    fontSize: 14,
    fontWeight: "500"
  },
  styledLink: {
    ...bgWhite,
    height: 49,
    ...borderRadius(),
    ...centerBetween,
    paddingHorizontal: 15,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      height: 0,
      width: 5
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  }
})
