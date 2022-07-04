import React, { useState } from "react"
import ActionSheet, {
  registerSheet,
  SheetManager
} from "react-native-actions-sheet"
import { Text, StyleSheet } from "react-native"

import { Button, Link, TextInputField } from "../"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7E8E51",
    justifyContent: "center",
    paddingHorizontal: 64,
    borderTopLeftRadius: 30,
    paddingTop: 11,
    borderTopRightRadius: 30
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginTop: 22,
    textAlign: "center"
  },
  indicator: {
    backgroundColor: "#6A7747",
    width: 95
  }
})
function ForgotPassword(props) {

  const [data, setData] = useState();

  const onHide = async () => {
    await SheetManager.hide("forgotPassword");
    data.navigateToReset();
  }
  return (
    <ActionSheet
      indicatorStyle={styles.indicator}
      gestureEnabled
      containerStyle={styles.container}
      id={props.sheetId}
      onBeforeShow={(data) => setData(data)}
    >
      <TextInputField style={{ marginTop: 45 }}  placeholder="Enter email address"/>
      <Button
        title="Reset Password"
        onPress={onHide}
        style={{
          backgroundColor: "white",
          color: "#7E8E51",
          marginBottom: 45,
          marginTop: 25
        }}
      />
    </ActionSheet>
  )
}
function ResetPasswordSuccess(props) {
  const [data, setData] = useState();
  const onHide = async () => {
    await SheetManager.hide("resetPasswordSuccess");
    data.navigateToLogin();
  }
  return (
    <ActionSheet
      indicatorStyle={styles.indicator}
      gestureEnabled
      containerStyle={styles.container}
      id={props.sheetId}
      onBeforeShow={(data) => setData(data)}
    >
      <Text style={styles.title}>Your password is changed successfully</Text>
      <Button
        title="Ok"
        onPress={onHide}
        style={{
          backgroundColor: "white",
          color: "#7E8E51",
          marginVertical: 25
        }}
      />
      <Link
        title="Cancel"
        onPress={onHide}
        style={{ color: "white", alignItems: "center", marginBottom: 30 }}
      />
    </ActionSheet>
  )
}
registerSheet("forgotPassword", ForgotPassword);
registerSheet("resetPasswordSuccess", ResetPasswordSuccess)

export default ForgotPassword
