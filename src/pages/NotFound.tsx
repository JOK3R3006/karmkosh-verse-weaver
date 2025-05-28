
import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Redirecting from unknown route:", location.pathname);
  }, [location.pathname]);

  // Instead of showing 404, redirect to home
  return <Navigate to="/" replace />;
};

export default NotFound;
