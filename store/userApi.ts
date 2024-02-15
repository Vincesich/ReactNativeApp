export const fetchUserById = async (userId: string) => {
    // My API logic here
    //  Make a fetch request to my backend server
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return response.json();
  };
  
  