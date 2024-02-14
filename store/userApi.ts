export const fetchUserById = async (userId: string) => {
    // Implement your API logic here
    // For example, make a fetch request to your backend server
    const response = await fetch(`https://example.com/api/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return response.json();
  };
  