import React from 'react';
import { useQuery } from 'react-query';
import { fetchUserById } from '../store/userApi'; 

interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  password: string;
  confirmPassword: string;
  // Here i can add more properties as needed
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
      <p>phoneNumber: {user.phoneNumber}</p>
      {/* Add more user properties here */}
    </div>
  );
};

export default UserComponent;

