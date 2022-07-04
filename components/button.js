import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({
  title,
  style = {},
  ...props
}) => {
  const { color = 'white', ...otherStyle } = style
  return <TouchableOpacity style={[styles.button, otherStyle]} {...props}>
    <Text style={[styles.buttonText, {
      color
    }]}>{title}</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    minHeight: 49,
    backgroundColor: '#7E8E51',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'rgb(126, 143, 82)',
    shadowOffset: {
      height: 0,
      width: 31,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 30
  },
  buttonText: {
    fontWeight: '500',
    textTransform: 'capitalize',
  }
});
