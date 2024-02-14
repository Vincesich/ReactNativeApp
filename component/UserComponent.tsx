import React from 'react';
import { useQuery } from 'react-query';
import { fetchUserById } from '../store/userApi'; // Adjust the path as per your folder structure

interface User {
  id: number;
  name: string;
  email: string;
  // Add more properties as needed
}

const UserComponent: React.FC<{ userId: string }> = ({ userId }) => {
  const { isLoading, error, data } = useQuery(['userData', userId], () => fetchUserById(userId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>; // Type assertion for error

  const user = data as User;

  return (
    <div>
      <h1>User Data</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user properties here */}
    </div>
  );
};

export default UserComponent;

