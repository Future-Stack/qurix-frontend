import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "./types/authTypes";
import { RootState } from "@/store/store";

import { setAuthCookies, clearAuthCookies } from "@/lib/auth-utils";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  restToken: string | null; // password-reset flow
  user: Employee | null;
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  restToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Called after a successful login — stores both tokens + employee
    setCredentials: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        user: Employee;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      setAuthCookies(action.payload.accessToken, action.payload.user?.roles || []);
    },

    // Called after a successful token refresh
    updateTokens: (
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      if (state.user?.roles) {
        setAuthCookies(action.payload.accessToken, state.user.roles);
      }
    },

    // Store employee profile fetched from /auth/me
    setUser: (state, action: PayloadAction<Employee>) => {
      state.user = action.payload;
      if (state.accessToken) {
        setAuthCookies(state.accessToken, action.payload?.roles || []);
      }
    },

    // Password-reset flow helpers
    addResetToken: (state, action: PayloadAction<string>) => {
      state.restToken = action.payload;
    },
    clearResetToken: (state) => {
      state.restToken = null;
    },

    // Full logout — clear everything
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.restToken = null;
      state.user = null;
      clearAuthCookies();
    },
  },
});

export const {
  setCredentials,
  updateTokens,
  setUser,
  addResetToken,
  clearResetToken,
  logout,
} = authSlice.actions;

// Selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectResetToken = (state: RootState) => state.auth.restToken;
export const selectIsAuthenticated = (state: RootState) => !!state.auth.accessToken;

const authReducer = authSlice.reducer;
export default authReducer;



// DLEVELOPER NOTE  
// Use User  anywher like this
//  const user = useAppSelector(selectUser);