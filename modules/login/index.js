import React from "react"
import { SafeAreaView, View, Image } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

import { slice } from "./auth"
import { Login, PasswordReset } from "./screens"

const Stack = createStackNavigator()

const Auth = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default {
  title: "Auth",
  navigator: Auth,
  slice: slice
}
