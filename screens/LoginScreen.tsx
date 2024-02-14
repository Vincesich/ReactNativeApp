import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // refers to the async storage to check if the user exists

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    // This handles the login after the button at the button is pressed
  const handleLogin = async () => {
    // Retrieve user data from AsyncStorage
    const userData = await AsyncStorage.getItem('users');
    if (!userData) {
      Alert.alert('Error', 'No registered users found.');
      return;
    }

    // Parse user data
    const users = JSON.parse(userData);
    
    // Find user with matching email and password
    const user = users.find((user: any) => user.email === email && user.password === password);
    if (!user) {
      Alert.alert('Error', 'Invalid email or password.');
      return;
    }

    // Navigate to dashboard with user's name
    navigation.navigate('Dashboard', { firstName: user.firstName });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
     // My styling for this tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
