import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Im using async storage to store the info of users whove registered

const UserListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await AsyncStorage.getItem('users');
        if (userData) {
          const parsedUsers = JSON.parse(userData);
          setUsers(parsedUsers);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

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

