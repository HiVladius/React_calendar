import { useDispatch, useSelector } from "react-redux";

import calendarAPI from "../api/calendarAPI";
import { onChecking } from "../store/actions/authActions";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const starLogin = async ({ email, password }) => {
    console.log({ email, password });

    dispatch(onChecking());

    try {
      const resp = await calendarAPI.post("/auth", { email, password });
      console.log(resp);
    } catch (error) {}
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
