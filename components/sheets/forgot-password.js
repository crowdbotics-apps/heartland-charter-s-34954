import React, { useState } from "react"
import ActionSheet, {
  registerSheet,
  SheetManager
} from "react-native-actions-sheet"
import { StyleSheet } from "react-native"

import { Button, Link, TextInputField, Text } from "../"
import {
  justifyCenter,
  bgPrimary,
  borderRadiusLg,
  textWhite,
  fontSize2,
  bgWhite,
  textPrimary,
  itemsCenter,
  bgLightDarkGreen
} from "../../assets/styles"

const styles = StyleSheet.create({
  container: {
    ...justifyCenter,
    ...bgPrimary,
    paddingHorizontal: 64,
    paddingTop: 11,
    ...borderRadiusLg({
      bottom: 0,
      left: 0
    })
  },
  title: {
    ...fontSize2,
    fontWeight: "500",
    ...textWhite,
    marginTop: 22,
    textAlign: "center"
  },
  indicator: {
    ...bgLightDarkGreen,
    width: 95
  }
})
function ForgotPassword(props) {
  const [data, setData] = useState()

  const onHide = async () => {
    await SheetManager.hide("forgotPassword")
    data.navigateToReset()
  }
  return (
    <ActionSheet
      indicatorStyle={styles.indicator}
      gestureEnabled
      containerStyle={styles.container}
      id={props.sheetId}
      onBeforeShow={data => setData(data)}
    >
      <TextInputField
        style={{ marginTop: 45 }}
        placeholder="Enter email address"
      />
      <Button
        title="Reset Password"
        onPress={onHide}
        style={{
          ...bgWhite,
          ...textPrimary,
          marginBottom: 45,
          marginTop: 25
        }}
      />
    </ActionSheet>
  )
}
function ResetPasswordSuccess(props) {
  const [data, setData] = useState()
  const onHide = async () => {
    await SheetManager.hide("resetPasswordSuccess")
    data.navigateToLogin()
  }
  return (
    <ActionSheet
      indicatorStyle={styles.indicator}
      gestureEnabled
      containerStyle={styles.container}
      id={props.sheetId}
      onBeforeShow={data => setData(data)}
    >
      <Text style={styles.title}>Your password is changed successfully</Text>
      <Button
        title="Ok"
        onPress={onHide}
        style={{
          ...bgWhite,
          ...textPrimary,
          marginVertical: 25
        }}
      />
      <Link
        title="Cancel"
        onPress={onHide}
        style={{ ...textWhite, ...itemsCenter, marginBottom: 30 }}
      />
    </ActionSheet>
  )
}
registerSheet("forgotPassword", ForgotPassword)
registerSheet("resetPasswordSuccess", ResetPasswordSuccess)

export default ForgotPassword
