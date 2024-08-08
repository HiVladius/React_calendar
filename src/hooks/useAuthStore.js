import { useDispatch, useSelector } from "react-redux";

import calendarAPI from "../api/calendarAPI";

import { onCheking, onLogin, onLogOut } from "../store";

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

  return {
    //* Properties
    status,
    user,
    errorMessage,
    //* Methods
    starLogin,
  };
};
