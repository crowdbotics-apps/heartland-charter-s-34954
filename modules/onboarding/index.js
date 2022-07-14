import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/Feather"

import { slides } from "./slides"
import {
  bgPrimary,
  bgWhite,
  centerCenter,
  fontSize3,
  textWhite,
  borderRadiusMd,
  bgGrey,
  textDarkGreen,
  fontSize5,
  COLORS
} from "../../assets/styles"
import { Text } from "../../components"

const REDIRECT_SCREEN_NAME = "Auth"

const Onboarding = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide]}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>Heartland Charter School</Text>
        <Text style={styles.text}>
          Stay healthy with health seek app frequently and easy app for use, it
          give many facilities from good doctors.
        </Text>
      </View>
    )
  }

  const onDone = () => {
    navigation.navigate(REDIRECT_SCREEN_NAME)
  }

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showSkipButton
        skipLabel="Skip Now"
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        renderDoneButton={() => (
          <View style={styles.navigationBtn}>
            <Icon name="chevron-right" color={COLORS.primary} size={25} />
          </View>
        )}
        renderNextButton={() => (
          <View style={styles.navigationBtn}>
            <Icon name="chevron-right" color={COLORS.primary} size={25} />
          </View>
        )}
        renderSkipButton={() => (
          <View style={styles.skipButton}>
            <Text style={{ ...textDarkGreen, ...fontSize5 }}>Skip Now</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    ...centerCenter,
    ...bgPrimary,
    paddingHorizontal: 38
  },
  image: {
    width: 320,
    height: hp("50%"),
    marginVertical: 20,
    ...borderRadiusMd()
  },
  text: {
    ...textWhite,
    textAlign: "center"
  },
  title: {
    ...textWhite,
    textAlign: "center",
    ...fontSize3,
    fontWeight: "700",
    marginBottom: 9
  },
  logo: {
    width: 129,
    height: 129,
    alignSelf: "center",
    borderRadius: 129,
    ...bgWhite
  },
  activeDotStyle: {
    height: 5,
    width: 9,
    ...bgWhite
  },
  dotStyle: {
    ...bgGrey,
    height: 5,
    width: 21
  },
  navigationBtn: {
    ...centerCenter,
    ...bgWhite,
    height: 40,
    width: 40,
    borderRadius: 40
  },
  skipButton: {
    height: 40,
    ...centerCenter
  }
})

export default {
  title: "Onboarding",
  navigator: Onboarding
}
