import React from 'react';
import { View, Text } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, Im Vince</Text>
      <Text>I built this app to demonstrate my competence in react native</Text>
    </View>
  );
};

export default AboutScreen;
