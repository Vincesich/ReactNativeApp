import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { firstName } = route.params;

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

