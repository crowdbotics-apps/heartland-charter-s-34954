import React, { useState } from "react"
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native"
import Icon from "react-native-vector-icons/Feather"

import {
  bgDarkGreen,
  bgGreyGreen,
  fontSize2,
  fontSize3,
  fontSize5,
  centerBetween,
  textWhite,
  COLORS,
  borderRadius,
  rowBetween,
  bgPrimary,
  centerCenter
} from "../../assets/styles"
import { Card, Text } from "../../components"
import logo from "../../assets/logo.png"
import logAttendance from "../../assets/img/log-attendance.png"
import parentResources from "../../assets/img/parent-resources.png"
import procurement from "../../assets/img/procurement.png"
import studentResources from "../../assets/img/student-resources.png"
import parentPortal from "../../assets/img/parents-portal.png"
import ripple from "../../assets/img/ripple.png"

const categories = [
  {
    title: "Heartland School Website",
    image: logo
  },
  {
    title: "Parent Portal",
    image: parentPortal
  },
  {
    title: "Log Attendance",
    image: logAttendance
  },
  {
    title: "Procurement",
    image: procurement
  },
  {
    title: "Student Educational Resources",
    image: studentResources,
    link: "studentResources"
  },
  {
    title: "Parent Educational Resources",
    image: parentResources,
    link: "parentResources"
  }
]

const CategoryCard = ({ title, image, onPress }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  let style = {}
  let textStyle = {}
  if (active) {
    style = {
      ...bgPrimary
    }
    textStyle = {
      ...textWhite
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{ width: "48%" }}
      onPressIn={toggleActive}
      onPressOut={toggleActive}
    >
      <Card style={[styles.categoryCard, style]}>
        <Image source={image} style={styles.cardImage} />
        <Text style={[styles.categoryTitle, textStyle]}>{title}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default Home = ({
  navigation
}) => {

  const handleNaviagtion = (link) => {
    if(link) {
      navigation.navigate(link);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 18 }}>
        <Card style={styles.topCard}>
          <Text style={styles.name}>Hello Alex,</Text>
          <Text style={styles.greeting}>Good Morning</Text>
          <Image style={styles.rippleEffect} source={ripple} />
        </Card>
        <View style={centerBetween}>
          <Text style={styles.categoryTitle}>Explore Categories</Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name="sliders" color={COLORS.white} size={18} />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryList}>
          {categories.map((category, index) => (
            <CategoryCard
              active={index === 0}
              key={category.title}
              title={category.title}
              image={category?.image}
              onPress={() => handleNaviagtion(category.link)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topCard: {
    ...bgDarkGreen,
    marginTop: 10,
    marginBottom: 12
  },
  name: {
    ...textWhite,
    fontSize: 30,
    marginBottom: 8,
    fontWeight: "700"
  },
  greeting: {
    ...textWhite,
    fontWeight: "500",
    ...fontSize3
  },
  categoryTitle: {
    ...fontSize2,
    fontWeight: "500"
  },
  btn: {
    ...bgGreyGreen,
    padding: 7,
    ...borderRadius()
  },
  categoryTitle: {
    ...fontSize5,
    fontWeight: "500",
    textAlign: "center"
  },
  categoryCard: {
    marginBottom: 16,
    ...centerCenter,
    padding: 20,
    flex: 1
  },
  categoryList: {
    flexWrap: "wrap",
    ...rowBetween,
    marginTop: 10
  },
  cardImage: {
    width: 77,
    height: 77,
    resizeMode: "contain",
    marginBottom: 20
  },
  rippleEffect: {
    position: "absolute",
    right: 0
  }
})
