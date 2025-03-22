const apiUrl = import.meta.env.VITE_API_BASE_URL;

// const headers = {
//   'Content-Type': 'application/json',
// };

export const userServices = {
  fetchUserData: async () => {
    try {
      const response = await fetch(`${apiUrl}/users`);

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return await response.json(); // return fetched data in promise
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
  fetchAboutData: async () => {
    try {
      const response = await fetch(`${apiUrl}/about`);

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      return response.json(); // return fetched data in promise
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
  getExperienceData: async () => {
    try {
      const response = await fetch(`${apiUrl}/experience`);

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      return response.json(); // return fetched data in promise
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
};
