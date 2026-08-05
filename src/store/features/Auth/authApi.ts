import { baseAPI } from "../BaseApi/baseAPI";
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  MeResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RegisterUserRequest,
  ResetPasswordRequest,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from "./types/authTypes";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    // ─── POST /auth/login ──────────────────────────────────────────────────
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),

    // ─── GET /auth/me ──────────────────────────────────────────────────────
    getMe: build.query<MeResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    // ─── POST /auth/refresh ────────────────────────────────────────────────
    refreshToken: build.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (data) => ({
        url: "/auth/refresh",
        method: "POST",
        body: data,
      }),
    }),

    // ─── POST /auth/register ───────────────────────────────────────────────
    registerUser: build.mutation<void, RegisterUserRequest>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    // ─── POST /auth/forgot-password ────────────────────────────────────────
    forgotPassword: build.mutation<
      ForgotPasswordResponse,
      ForgotPasswordRequest
    >({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    // ─── POST /auth/verify-reset-code ──────────────────────────────────────
    verify: build.mutation<VerifyOtpResponse, VerifyOtpRequest>({
      query: (data) => ({
        url: "/auth/verify-reset-code",
        method: "POST",
        body: data,
      }),
    }),

    // ─── POST /auth/reset-password ─────────────────────────────────────────
    resetPassword: build.mutation<void, ResetPasswordRequest>({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    // ─── POST /auth/change-password ────────────────────────────────────────
    changePassword: build.mutation<
      void,
      { oldPassword: string; newPassword: string }
    >({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
  useRefreshTokenMutation,
  useRegisterUserMutation,
  useForgotPasswordMutation,
  useVerifyMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authAPI;
