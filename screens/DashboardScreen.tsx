import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HelpScreen from './HelpScreen'; 
import AboutScreen from './AboutScreen'; 

const Tab = createBottomTabNavigator();

const DashboardScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { firstName } = route.params;

  return (
    <Tab.Navigator  screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" initialParams={{ firstName }} component={DashboardContent} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>
  );
};

const DashboardContent = ({ firstName, navigation }: { firstName: string; navigation: any }) => {
  const goToUserList = () => {
    navigation.navigate('UserList');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome {firstName}!</Text>
      <Text>Lets see who else is on this app click the button below</Text>
      <Button title="View User List" onPress={goToUserList} />
    </View>
  );
};

export default DashboardScreen;


