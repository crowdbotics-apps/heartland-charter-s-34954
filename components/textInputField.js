import React, { useState } from "react"
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather"

export const TextInputField = ({
  style,
  icon,
  secureTextEntry,
  placeholderTextColor = "#ACACAC",
  ...props
}) => {
  const [isSecured, setSecure] = useState(secureTextEntry);

  const toggleSecurity = () => {
    setSecure((isSecured) =>  !isSecured)
  }
  return (
    <View style={[styles.container, style]}>
      <Icon size={16} name={icon} color="#ACACAC" />
      <TextInput
        style={[styles.textInput]}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isSecured}
        {...props}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleSecurity}>
          <Icon size={16} name={isSecured ? "eye" : "eye-off" } color="#ACACAC" />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 49,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      height: 0,
      width: 5
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  textInput: {
    flex: 1,
    paddingLeft: 12,
    height: "100%",
  }
})
