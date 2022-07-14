import React from "react"
import { TouchableOpacity, StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/Feather"

import { Text } from './text';
import { borderPrimary, centerCenter } from '../assets/styles';
import { COLORS, SIZES } from '../assets/styles';

export const CheckBox = ({ checked, onChange, style, label, look = "checkbox" }) => {
  const isRadio = look === "radio";
  return (
    <TouchableOpacity style={[styles.container, style]} onChange={onChange}>
      <View style={[styles.checkbox, {
        borderRadius: isRadio ? 16 : 0
      }]}>
        {checked &&
          <Icon name="check" color={COLORS.primary} size={SIZES.font4} />
        }
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    ...borderPrimary,
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 7,
    width: 16,
    height: 16,
    ...centerCenter
  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontSize: 16,
  }
})
