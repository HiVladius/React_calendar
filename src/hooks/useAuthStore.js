import { useDispatch, useSelector } from "react-redux";

import calendarAPI from "../api/calendarAPI";

import { clearErrorMessage, onCheking, onLogin, onLogOut, onLogoutCalendar } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const starLogin = async ({ email, password }) => {
    dispatch(onCheking());
    try {
      const { data } = await calendarAPI.post("/auth/", { email, password });
      console.log(data);
      
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

  const starRegister = async ({ name, email, password }) => {
    dispatch(onCheking());

    try {
      const { data } = await calendarAPI.post("/auth/new", {
        email,
        name,
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
    if (!token) return dispatch(onLogOut());

    try {
      const { data } = await calendarAPI.get("auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogOut());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogoutCalendar());
    dispatch(onLogOut());
    
  };

  return {
    //* Properties
    clearErrorMessage,
    errorMessage,
    status,
    user,

    //* Methods
    checkAuthToken,
    starLogin,
    starRegister,
    startLogout,
  };
};
