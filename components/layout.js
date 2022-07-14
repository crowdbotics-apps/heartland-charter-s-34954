import React from 'react';
import { SafeAreaView } from 'react-native';

import { Title } from './title'
import { bgLight } from '../assets/styles';
import { ScrollView } from 'react-native-gesture-handler';

export const Layout = ({ children, title, }) => {
  return <SafeAreaView style={{ flex: 1}}>
    <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 18, ...bgLight }}>
      <Title title={title} />
      {children}
    </ScrollView>
  </SafeAreaView>
}