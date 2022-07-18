import React from 'react';
import { View, StyleSheet } from 'react-native';
import { bgWhite, borderRadius } from '../assets/styles';

export const Card = ({
  children,
  style
}) => {
  return <View style={[styles.card, style]}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  card: {
    ...borderRadius(),
    ...bgWhite,
    padding: 15
  }
});