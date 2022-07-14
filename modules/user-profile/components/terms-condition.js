import React from "react"
import { View, StyleSheet } from "react-native"
import { centerCenter } from "../../../assets/styles"

import { CheckBox } from "../../../components"

export const TermsConditions = () => {
  return (
    <View style={styles.container}>
      <View>
        <CheckBox label="I agree with Term & Conditions" look="radio" checked style={{ marginBottom: 30 }} />
        <CheckBox label="I agree with Privacy Policy" look="radio" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 70,
    ...centerCenter
  }
})
