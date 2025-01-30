export const fetchUserData = async () => {
  try {
    const response = await fetch('http://localhost:8000/users');

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = response.json();
    return data; // Return the fetched data
  } catch (error) {
    throw new Error(error.message); // Throw an error if the request fails
  }
};
