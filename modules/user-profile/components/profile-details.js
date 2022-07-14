import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from "react-native-vector-icons/Feather"
import { faker } from '@faker-js/faker';

import { borderPrimary, SIZES, COLORS, bgDarkGreen, centerCenter } from '../../../assets/styles';
import { TextInputField } from '../../../components';

const ProfileImage = () => {
  return <TouchableOpacity style={styles.profileImage}>
    <Image style={styles.image} source={{ uri: faker.image.avatar()}} />
    <View style={styles.camera}>
      <Icon name="camera" size={SIZES.font4} color={COLORS.white} />
    </View>
  </TouchableOpacity>
}

export const ProfileDetails = () => {
  return <View style={styles.container}>
    <ProfileImage />
    <TextInputField style={styles.input} icon="user" value="Alex Halex"/>
    <TextInputField style={styles.input} icon="mail" value="domain@gmail.com" />
    <TextInputField style={styles.input} icon="phone" value="123456789"/>
  </View>
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 22,
  },
  container: {
    marginBottom: 18,
    marginTop: 30,
  },
  profileImage: {
    width: 106,
    height: 106,
    borderRadius: 106,
    ...borderPrimary,
    borderWidth: 3,
    alignSelf: 'center',
    marginBottom: 32,
  },
  camera: {
    width: 26,
    height: 26,
    borderRadius: 26,
    ...bgDarkGreen,
    ...centerCenter,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 106
  }
})
