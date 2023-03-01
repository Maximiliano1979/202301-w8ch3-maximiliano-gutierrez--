import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initUserState: User = {
  username: "",
  email: "",
  isLogged: false,
  token: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: initUserState,
  reducers: {
    loginUser: (currentState, action: PayloadAction<User>) => ({
      ...currentState,
      username: action.payload.username,
      email: action.payload.email,
      isLogged: action.payload.isLogged,
      token: action.payload.token,
    }),
    logOutUser: () => ({
      ...initUserState,
    }),
  },
});

export const usersReducer = usersSlice.reducer;
export const { logOutUser: logOutUserActionCreator } = usersSlice.actions;
export const { loginUser: loginUserActionCreator } = usersSlice.actions;
