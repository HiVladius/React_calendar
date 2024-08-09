import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { LoginPages } from "../auth";
import { CalendarPages } from "../calendar";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  // const authStatus = "Not-Authenticated";
  // const authStatus = "Authenticated";

useEffect(() => {
  checkAuthToken();  
}, [])


  if(status === "checking") {
    checkAuthToken();
    return <h1>Checking...</h1>
  }

  return (
    <Routes>
      {status === "Not-Authenticated" ? (
        <Route path="/auth/*" element={<LoginPages />} />
      ) : (
        <Route path="/*" element={<CalendarPages />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
