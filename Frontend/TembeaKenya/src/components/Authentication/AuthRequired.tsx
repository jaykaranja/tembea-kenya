// withAuth.js

import { ReactNode } from "react";
import { isAuthenticated } from "../../utils/authentication/auth";
import { useNavigate } from "react-router-dom";

const AuthRequired = (children: ReactNode) => {
  const navigate = useNavigate();
  return () => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
    return children;
  };
};

export default AuthRequired;
