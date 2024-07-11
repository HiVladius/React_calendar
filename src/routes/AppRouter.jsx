import { Navigate, Route, Routes } from "react-router";
import { LoginPages } from "../auth";
import { CalendarPages } from "../calendar";

export const AppRouter = () => {
  // const authStatus = "Not-Authenticated";
  const authStatus = "Authenticated";


  return (
    <Routes>
        {
            authStatus === 'Not-Authenticated'
            ? <Route path="/auth/*" element={<LoginPages />} />
            : <Route path="/*" element={<CalendarPages />} />
        }
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
