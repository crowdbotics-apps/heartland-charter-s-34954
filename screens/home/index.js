import React from "react"
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, SafeAreaView } from "react-native"
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
  bgWhite,
  rowBetween,
  bgPrimary,
  centerCenter
} from "../../assets/styles"
import { Card, Text } from "../../components"
import logo from '../../assets/logo.png';
import logAttendance from '../../assets/img/log-attendance.png';
import parentResources from '../../assets/img/parent-resources.png';
import procurement from '../../assets/img/procurement.png';
import studentResources from '../../assets/img/student-resources.png';
import parentPortal from '../../assets/img/parents-portal.png';

const categories = [
  {
    title: 'Heartland School Website',
    image: logo,
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
    title:  "Procurement",
    image: procurement,
  },
  {
    title: "Student Educational Resources",
    image: studentResources
  },
  {
    title: "Parent Educational Resources",
    image: parentResources
  }
]

const CategoryCard = ({
  title,
  active,
  image
}) => {
  let style = {};
  let textStyle = {};
  if(active) {
    style = {
      ...bgPrimary
    }
    textStyle = {
      ...textWhite
    }
  }
  return (
    <Card style={[styles.categoryCard, style]}>
      <Image source={image} style={styles.cardImage} />
      <Text style={[styles.categoryTitle, textStyle]}>{title}</Text>
    </Card>
  )
}

export default Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView style={{ flex: 1, paddingHorizontal: 18 }}>
      <Card style={styles.topCard}>
        <Text style={styles.name}>Hello Alex,</Text>
        <Text style={styles.greeting}>Good Morning</Text>
      </Card>
      <View style={centerBetween}>
        <Text style={styles.categoryTitle}>Explore Categories</Text>
        <TouchableOpacity style={styles.btn}>
          <Icon name="sliders" color={COLORS.white} size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryList}>
        {categories.map((category, index) => (
          <CategoryCard active={index === 0} key={category.title} title={category.title} image={category?.image} />
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
    textAlign: "center",
  },
  categoryCard: {
    width: '48%',
    marginBottom: 16,
    ...centerCenter,
    padding: 20
  },
  categoryList: {
    flexWrap: 'wrap',
    ...rowBetween,
    marginTop: 10
  },
  cardImage: {
    width: 77,
    height: 77,
    resizeMode: 'contain',
    marginBottom: 20
  }
})
