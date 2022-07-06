import React from "react"
import { KeyboardAvoidingView, Image, View, StyleSheet } from "react-native"

import { Text } from "../../../components"
import { centerCenter, bgLight, fontSize3 } from "../../../assets/styles"

export const Layout = ({ children, title }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, ...centerCenter, paddingHorizontal: 18, ...bgLight }}
    >
      <View>
        <Image
          style={{ width: 129, height: 129, alignSelf: "center" }}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ width: "100%" }}>{children}</View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    ...fontSize3,
    marginVertical: 40
  }
})
