import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form'; // For my react hook form
import AsyncStorage from '@react-native-async-storage/async-storage'; // This is storing my users data
// These are the feilds ill be having users fill in to register
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;  
  city: string;
  password: string;
  confirmPassword: string;
};

const RegistrationScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [userIdCounter, setUserIdCounter] = useState(1); // Initialize user ID counter

  useEffect(() => {
    // Load user ID counter from AsyncStorage when component mounts
    const loadUserIdCounter = async () => {
      try {
        const counter = await AsyncStorage.getItem('userIdCounter');
        if (counter) {
          setUserIdCounter(parseInt(counter, 10)); // Parse counter from string to integer
        }
      } catch (error) {
        console.error('Error loading user ID counter:', error);
      }
    };

    loadUserIdCounter(); // Call the function to load the counter
  }, []);

  const handleRegistration: SubmitHandler<FormData> = async (formData) => {
    const { password, confirmPassword, ...userData } = formData;

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      // Increment the user ID counter and save it to AsyncStorage
      const newUserIdCounter = userIdCounter + 1;
      await AsyncStorage.setItem('userIdCounter', newUserIdCounter.toString());
      setUserIdCounter(newUserIdCounter);

      // Create user object with the incremented user ID
      const user = {
        id: userIdCounter,
        ...userData,
        password
      };

      // Get existing users from AsyncStorage
      const existingUsers = await AsyncStorage.getItem('users');
      let users = [];
      if (existingUsers) {
        users = JSON.parse(existingUsers);
      }
      
      // Add new user to the array
      users.push(user);

      // Save the updated users array back to AsyncStorage
      await AsyncStorage.setItem('users', JSON.stringify(users));

      // Log user details to terminal
      console.log('User Details:', user);

      // Optionally, clear the form fields after successful registration
      reset();

      // Navigate to dashboard with user's name
      // Youll see the coresponding fuction in my dashboard screen.tsx
      navigation.navigate('Dashboard', { firstName: formData.firstName });

      // Optionally, provide feedback to the user about successful registration
      Alert.alert('Success', 'Registration successful');
    } catch (error) {
      console.error('Error saving user:', error);
      // Handle error (e.g., display an error message to the user)
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };
   // Here i put all the fields inside a controller
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Registration</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="firstName"
        rules={{ required: 'First name is required' }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="lastName"
        rules={{ required: 'Last name is required' }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            keyboardType="email-address"
          />
        )}
        name="email"
        rules={{ required: 'Email is required' }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            keyboardType="phone-pad"
          />
        )}
        name="phoneNumber"
        rules={{ required: 'Phone number is required' }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="City"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="city"
        rules={{ required: 'City is required' }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: 'Password is required' }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            secureTextEntry={true}
          />
        )}
        name="confirmPassword"
        rules={{ required: 'Password confirmation is required' }}
        defaultValue=""
      />
      {errors && Object.values(errors).map((error, index) => (
        <Text key={index} style={styles.errorText}>{error.message}</Text>
      ))}
      <Button title="Register" onPress={handleSubmit(handleRegistration)} />
    </KeyboardAvoidingView>
  );
};
   // Styling 
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegistrationScreen;



