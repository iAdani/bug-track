import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


/** Example of an API call for later use **/
// export const getBugs = async () => {
//     try {
//       const response = await axiosInstance.get('/bugs');
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching bugs:', error);
//       throw error;
//     }
//   };

export default axiosInstance;
