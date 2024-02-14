import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // For my stack navigator
import RegistrationScreen from './screens/registration'; // My registration screen
import DashboardScreen from './screens/DashboardScreen'; //My dashboard screen
import UserListScreen from './screens/UserListScreen'; // My Userlist screen
import LoginScreen from './screens/LoginScreen'; // Import the LoginScreen component

const Stack = createStackNavigator();
// This is where all my screens are declared in my navigation container (use <Stack.Screen>) everytime i add one 
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: 'Registration' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen name="UserList" 
        component={UserListScreen} 
        />
        <Stack.Screen name="LoginScreen" 
        component={LoginScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// This what is displayed on the home screen once you open the app
// The first button onPress takes you to the Registration screen
// The second one takes you to the login screen where returning users can stil login and go to the dashboard
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to my simple react native application</Text>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      {/* Button to navigate to the login screen */}
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
}
// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


