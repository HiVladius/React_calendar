import { useDispatch, useSelector } from "react-redux";

import calendarAPI from "../api/calendarAPI";

import { onCheking, onLogin, onLogOut } from "../store";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const useAuthStore = () => {
  const { status, user, errorMessage, clearErrorMessage } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const starLogin = async ({ email, password }) => {
    console.log({ email, password });

    dispatch(onCheking());

    try {
      const { data } = await calendarAPI.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogOut("Revisar password o email"));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 100);
    }
  };

  const starRegister = async ({ name, email, password, password2 }) => {
    dispatch(onCheking());

    try {
      const { data } = await calendarAPI.post("/auth/new", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogOut(error.response.data?.msg || "Datos no validos"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 100);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogOut("Token no encontrado"));
    
    try {
      const { data } = await calendarAPI.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
      
    }catch (error) {
      localStorage.clear();
      dispatch(onLogOut())
    }
    
  };

  return {
    //* Properties
    status,
    user,
    errorMessage,
    clearErrorMessage,

    //* Methods
    starLogin,
    starRegister,
    checkAuthToken,
  };
};
