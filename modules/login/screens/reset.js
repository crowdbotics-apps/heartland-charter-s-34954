import React from "react"
import { SheetManager } from "react-native-actions-sheet"

import { Layout } from "../components"
import { Button, TextInputField } from "../../../components"

export const PasswordReset = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  }
  return (
    <Layout title="Log in to your Account">
      <TextInputField
        icon="lock"
        placeholder="Enter new password"
        style={{ marginBottom: 40 }}
      />
      <TextInputField icon="lock" placeholder="Confirm Password" secureTextEntry />
      <Button title="Save" style={{ marginVertical: 32 }} onPress={() => SheetManager.show('resetPasswordSuccess', { navigateToLogin })} />
    </Layout>
  )
}
