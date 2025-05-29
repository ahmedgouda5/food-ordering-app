// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  Token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  Token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
  state.Token = action.payload;
  state.isAuthenticated = !!action.payload; // true لو فيه توكن
   }}
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
