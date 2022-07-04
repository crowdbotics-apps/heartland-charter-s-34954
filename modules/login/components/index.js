import React from "react"
import { Text, KeyboardAvoidingView, Image, View, StyleSheet } from "react-native"

export const Layout = ({ children, title }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, backgroundColor: '#F9F9F9' }}>
      <View>
        <Image
          style={{ width: 129, height: 129, alignSelf: "center" }}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ width: '100%'}}>
       {children}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 40
  }
});
