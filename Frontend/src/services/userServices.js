const apiUrl = import.meta.env.VITE_API_BASE_URL;

const headers = {
  'Content-Type': 'application/json',
};

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
        throw new Error('Failed to fetch about data');
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
        throw new Error('Failed to fetch experience data');
      }

      return response.json(); // return fetched data in promise
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
  getSkillsData: async () => {
    try {
      const response = await fetch(`${apiUrl}/skills`);

      if (!response.ok) {
        throw new Error('Failed to fetch skills data');
      }

      return response.json(); // return fetched data in promise
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
  getProjectsData: async () => {
    try {
      const response = await fetch(`${apiUrl}/projects`);

      if (!response.ok) {
        throw new Error('Failed to fetch projects data');
      }

      return response.json(); // return fetched data in promise
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
  postContact: async (contactData) => {
    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers,
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Somehting went wrong');
      }

      return response.json();
    } catch (error) {
      throw new Error(error.message); // Throw an error if the request fails
    }
  },
};
