let isAuthenticated = false;

const login = async (email, password) => {
  try {
    const loginData = {
      email: email,
      password: password,
    };
    const response = await fetch("https://farmen-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Check if the response contains user details
    const responseData = await response.json();
    const { token, user } = responseData;

    // Save user details to local storage or state
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    isAuthenticated = true;
    return true; // Indicate successful login
  } catch (error) {
    console.error("Error Logging In", error);
    return false; // Indicate failed login
  }
};

const logout = () => {
    //this will clear authentication state
  isAuthenticated = false;
  alert('Logged Out Successfully ');
};

const getAuthStatus = () => {
  return isAuthenticated;
};

export { login, logout, getAuthStatus };
