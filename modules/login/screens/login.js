import React from "react"
import { SheetManager } from "react-native-actions-sheet"

import { Layout } from "../components"
import { Button, TextInputField, Link, CheckBox } from "../../../components"

export const Login = ({ navigation }) => {
  const navigateToReset = () => {
    navigation.navigate('PasswordReset');
  }
  return (
    <Layout title="Log in to your Account">
      <TextInputField
        icon="mail"
        placeholder="Email"
        style={{ marginBottom: 40 }}
      />
      <TextInputField icon="lock" placeholder="Password" secureTextEntry />
      <CheckBox
        checked
        label="Remember me"
        style={{ alignSelf: "flex-end", marginTop: 13 }}
      />
      <Button onPress={() => navigation.navigate('userProfile')} title="Log in" style={{ marginVertical: 32 }} />
      <Link
        title="Forgot Password?"
        onPress={() => SheetManager.show("forgotPassword", { navigateToReset })}
        style={{ alignSelf: "center" }}
      />
    </Layout>
  )
}
