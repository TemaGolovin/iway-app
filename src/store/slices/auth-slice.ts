import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { login } from "@/api/fetchers";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { login: string; password: string }, { rejectWithValue }) => {
    try {
      const { result } = await login(credentials);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.error?.message || "Ошибка при авторизации");
      }
      return rejectWithValue("Ошибка при авторизации");
    }
  }
);

interface AuthState {
  user: { token: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserToken(state, action: { payload: { user: { token: string } } }) {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setUserToken } = authSlice.actions;
