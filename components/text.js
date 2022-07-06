import React from 'react';
import { Text as DefaultText } from 'react-native';

export const Text = ({ style = {}, ...props}) => <DefaultText style={[{ fontFamily: 'Ginora-Sans-Regular'}, style]} {...props} />