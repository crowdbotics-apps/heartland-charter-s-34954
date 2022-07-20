import React from 'react'; 
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';

import { COLORS, centerCenter, borderRadius, rowBetween, itemsCenter, fontSize3, bgDarkGreen, bgWhite } from '../assets/styles';
import { Text } from './text';
 
export const Title = ({
  title,
  style
}) => {
  const navigation = useNavigation();
  const onBack = () => {
    if(navigation.canGoBack()) {
      navigation.goBack()
    }
  }
  return <View style={[styles.container, style]}>
    <TouchableOpacity style={styles.button} onPress={onBack}> 
      <Icon name="chevron-left" size={20} color={COLORS.white} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <View />
  </View>
}

const styles = StyleSheet.create({
  button: {
    ...bgDarkGreen,
    height: 34,
    width: 34,
    ...borderRadius(),
    ...centerCenter,
  },
  container: {
    ...rowBetween,
    ...itemsCenter,
    paddingVertical: 9,
    ...bgWhite
  },
  title: {
    ...fontSize3,
    fontWeight: '500'
  }
})