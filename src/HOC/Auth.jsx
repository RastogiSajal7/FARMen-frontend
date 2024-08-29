import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus } from "./AuthService";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Auth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null indicates loading state
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        const authStatus = await getAuthStatus();
        if (!authStatus) {
          navigate("/register");
          toast.warning('Please register first to proceed');
        }
        setIsAuthenticated(authStatus); // Set the authentication status
      };

      checkAuth();
    }, [navigate]);

    if (isAuthenticated === null) {
      return <Loader/>;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default Auth;
