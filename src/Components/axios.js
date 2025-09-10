//import axios from 'axios';
import axios from 'axios';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

const instance = axios.create({
  baseURL: 'https://ecom.kussoft.net/api/',
});

<<<<<<< HEAD
// Request interceptor to add auth token to all requests
instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error adding auth token to request:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, clear auth data
      try {
        await AsyncStorage.multiRemove(['userToken', 'userData']);
        // You can also dispatch a logout action here if using Redux
        console.log('Token expired, cleared auth data');
      } catch (clearError) {
        console.error('Error clearing auth data:', clearError);
      }
    }
    return Promise.reject(error);
  }
);

=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
export default instance;
