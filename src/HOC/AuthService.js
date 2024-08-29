import axios from 'axios';
import { toast } from 'react-toastify';

let isAuthenticated = false;

const login = async (email, password) => {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    // Axios POST request
    const response = await axios.post("https://farmen.onrender.com/login", loginData);

    const { token, user } = response.data;

    // Save user details to local storage or state
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    isAuthenticated = true;
    return true; // Indicate successful login
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Login failed";
    console.error("Error Logging In:", errorMessage);
    return false; // Indicate failed login
  }
};

const logout = () => {
  // Clear authentication state
  isAuthenticated = false;

  // Remove user details from local storage or state
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  toast.success('Logged Out Successfully');
};

const getAuthStatus = () => {
  return isAuthenticated;
};

export { login, logout, getAuthStatus };
