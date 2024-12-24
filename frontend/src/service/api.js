const api = require('./api/v1'); // Assuming `api` is your Axios instance or API client

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    } else {
      // Clear any existing Authorization header if no token exists
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear user data if token is invalid/expired
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

// Auth API calls
exports.login= async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials);
    console.log('Raw login response:', response.data);
    
    // Check the structure of the response and handle it accordingly
    const userData = {
      token: response.data.token,
      _id: response.data._id || response.data.user?._id,
      email: response.data.email || response.data.user?.email,
      ...(response.data.user || response.data)
    };
    
    console.log('Processed user data:', userData);
    
    if (!userData.token || !userData._id) {
      throw new Error('Invalid response format from server');
    }
    
    localStorage.setItem('user', JSON.stringify(userData));
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};

exports.signup = async (userData) => {
   try {
     const response = await api.post('/users/register', userData);
     return response.data;
   } catch (error) {
     console.error(
       'Error during signup:',
       error.response ? error.response.data : error.message
     );
     throw error;
   }
 };