import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Im using async storage to store the info of users whove registered
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch from react-redux
import { RootState } from '../store/store'; // Assuming you have a RootState type defined


const UserListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [users, setUsers] = useState<any[]>([]);
  const dispatch = useDispatch(); // Initialize useDispatch
  const registeredUsers = useSelector((state: RootState) => state.user); // Select registered users from Redux store

  // Fetches registered users from my async storage
  // Theres also an error handler

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await AsyncStorage.getItem('users');
        if (userData) {
          const parsedUsers = JSON.parse(userData);
          setUsers(parsedUsers);
          // Dispatch users to Redux store
          dispatch({ type: 'SET_USERS', payload: parsedUsers });
          // Log users using dispatch
          dispatch({ type: 'LOG_USERS', payload: parsedUsers });
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [dispatch]); // Include dispatch as a dependency
    // Displays the registered users with a flat list
    // The button onPress returns you to the dashboardscreen
    useEffect(() => {
      // Log registered users when component mounts
      console.log('Registered Users:', registeredUsers);
    }, [registeredUsers]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Users</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userInfo}>{`ID: ${item.id}`}</Text>
            <Text style={styles.userInfo}>{`Name: ${item.firstName} ${item.lastName}`}</Text>
            <Text style={styles.userInfo}>{`Email: ${item.email}`}</Text>
            <Text style={styles.userInfo}>{`Phone: ${item.phoneNumber}`}</Text>
            <Text style={styles.userInfo}>{`City: ${item.city}`}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
     // My styling for this page 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserListScreen;

