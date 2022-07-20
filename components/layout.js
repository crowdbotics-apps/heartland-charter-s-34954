import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { Title } from './title'
import { bgLight } from '../assets/styles';

export const Layout = ({ children, title, }) => {
  return <SafeAreaView style={{ flex: 1}}>
    <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 18, ...bgLight }}>
      <Title title={title} style={{ marginBottom: 28 }} />
      {children}
    </ScrollView>
  </SafeAreaView>
}