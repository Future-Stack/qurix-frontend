/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/store/store";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logout, updateTokens } from "../Auth/authSlice";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://qurix-api.softvenceomegaforce.cloud/api/v1";

// ─── Auth-only endpoints that must NEVER trigger a token refresh ─────────────
const AUTH_SKIP_REAUTH_PATHS = [
  "/auth/login",
  "/auth/refresh",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/verify-reset-code",
  "/auth/reset-password",
];

function isAuthPath(args: string | FetchArgs): boolean {
  const url = typeof args === "string" ? args : args.url ?? "";
  return AUTH_SKIP_REAUTH_PATHS.some((path) => url.includes(path));
}

// ─── Raw base query (no interceptors) ───────────────────────────────────────
const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// ─── Error shape from the API ────────────────────────────────────────────────
interface ApiErrorData {
  message?: string;
  error?: string;
  code?: string;
  statusCode?: number;
}

// ─── Base query with toast notifications ────────────────────────────────────
const baseQueryWithToasts: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions: any) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  const method =
    typeof args === "object" && "method" in args ? args.method : "GET";

  // ── Success toast for mutating requests ──────────────────────────────────
  if (method !== "GET" && result?.data) {
    if (typeof result.data === "object" && "message" in result.data) {
      const message = (result.data as { message?: string }).message;
      if (message && !extraOptions?.silent) {
        if (method === "DELETE") {
          toast.warning(message);
        } else {
          toast.success(message);
        }
      }
    }
  }

  // ── Error toast ──────────────────────────────────────────────────────────
  if (result?.error && !extraOptions?.silent) {
    const errorData = result.error.data as ApiErrorData | undefined;
    const errorMessage =
      errorData?.message || "Something went wrong. Please try again.";
    toast.error(errorMessage);
  }

  return result;
};

// ─── Base query with automatic token refresh on 401 ─────────────────────────
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions: any) => {
  const result = await baseQueryWithToasts(args, api, extraOptions);

  // Skip re-auth for auth endpoints — a 401 there means wrong credentials,
  // NOT an expired session.
  if (result?.error?.status === 401 && !isAuthPath(args)) {
    const state = api.getState() as RootState;
    const storedRefreshToken = state.auth.refreshToken;

    if (storedRefreshToken) {
      // Try to refresh the access token silently (no toast)
      const refreshResult = await rawBaseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken: storedRefreshToken },
        },
        api,
        { silent: true }
      );

      if (refreshResult.data) {
        const refreshData = refreshResult.data as {
          data: { accessToken: string; refreshToken: string };
        };

        api.dispatch(
          updateTokens({
            accessToken: refreshData.data.accessToken,
            refreshToken: refreshData.data.refreshToken,
          })
        );

        // Retry the original request (no extra toast — it already fired above)
        return baseQueryWithToasts(args, api, { ...extraOptions, silent: true });
      } else {
        // Refresh failed — session truly expired
        api.dispatch(logout());
        toast.error("Your session has expired. Please log in again.");
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

// ─── RTK Query API slice ─────────────────────────────────────────────────────
export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "Auth",
    "CalendarEvent",
    "Notification",
    "NotificationPreferences",
    "File",
    "Link",
  ],
  endpoints: () => ({}),
});
