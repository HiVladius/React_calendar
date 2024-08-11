import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";

import { LoginPages } from "../auth";
import { CalendarPages } from "../calendar";
import { useAuthStore } from "../hooks/";
import { CirculeLoader } from "../styles/CirculeLoader";




export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <CirculeLoader />;
  }

  return (
    <Routes>
      {
      (status === "not-authenticated" )
      
      ? (
        <>
          <Route path="/auth/*" element={<LoginPages />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPages />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
      
    </Routes>
  );
};