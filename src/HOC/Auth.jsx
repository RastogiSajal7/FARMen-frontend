
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus } from "./AuthService";

const Auth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!getAuthStatus()) {
        navigate("/register");
        alert('Please register first to proceed')
      }
    }, []); // Empty dependency array to ensure it runs only once

    if (getAuthStatus()) {
      return <WrappedComponent {...props} />;
    } else {
      return null; // Or render a loading spinner or an error message
    }
  };
};

export default Auth;
