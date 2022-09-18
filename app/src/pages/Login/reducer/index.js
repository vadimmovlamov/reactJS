import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn as signInRequest } from "../api/config";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {}, // что мы передаем в userInfo???
  accessToken: {},
};

export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  const response = await signInRequest(data);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = false;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload;
      state.isLoading = false; // выключаем спиннер
      state.userInfo = userInfo;
      state.accessToken = accessToken;

      localStorage.setItem("accessToken", accessToken);
      // сохраняем токен в localStorage, чтобы после перезагрузки страницы или
      // закрытия страницы токен не пропал
    },
    [signIn.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default authSlice.reducer;
