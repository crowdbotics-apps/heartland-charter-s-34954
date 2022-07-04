import React from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Feather"

export const CheckBox = ({ checked, onChange, style, label }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onChange={onChange}>
      {checked && (
        <View style={styles.checkbox}>
          <Icon name="check" color="#7E8F52" size={16} />
        </View>
      )}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    borderColor: "#7E8F52",
    borderStyle: "solid",
    borderWidth: 0.5,
    marginRight: 7
  },
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    fontSize: 16,
    color: "#7E8F52"
  }
})
