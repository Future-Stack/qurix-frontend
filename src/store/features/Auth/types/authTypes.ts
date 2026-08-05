// ─── Auth Request Types ─────────────────────────────────────────────────────

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
  totp?: string;
}

export type RegisterUserRequest = {
  email: string;
  password: string;
  name: string;
  phone: string;
};

// ─── Employee (User) Data ────────────────────────────────────────────────────

export interface Employee {
  id: string;
  tenantId: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string | null;
  designation: string;
  status: "ACTIVE" | "INACTIVE" | string;
  avatarKey: string | null;
  roles: string[];
  teamIds: string[];
  serviceLineIds: string[];
}

// ─── Login Response ──────────────────────────────────────────────────────────

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  employee: Employee;
}

export interface LoginResponse {
  success: boolean;
  data: LoginResponseData;
  timestamp: string;
}

// ─── /auth/me Response ───────────────────────────────────────────────────────

export interface MeResponse {
  success: boolean;
  data: Employee;
  timestamp: string;
}

// ─── Refresh Token ────────────────────────────────────────────────────────────

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponseData {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface RefreshTokenResponse {
  success: boolean;
  data: RefreshTokenResponseData;
  timestamp: string;
}

// ─── OTP / Verify / Forgot / Reset Password ─────────────────────────────────

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponseData {
  ok: boolean;
  resetId?: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  data: ForgotPasswordResponseData;
  timestamp: string;
}

export interface VerifyOtpRequest {
  email: string;
  code: string;
}

export interface VerifyOtpData {
  message?: string;
  resetToken: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  data: VerifyOtpData;
  timestamp: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}


// ─── Generic wrappers (kept for backward compat) ────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedApiResponse<T> {
  success: boolean;
  data: T;
  meta: PaginationMeta;
  timestamp: string;
}

/**
 * @deprecated Use Employee instead.
 * Kept here so older files referencing UserData don't break immediately.
 */
export type UserData = Employee;

export type UserProfileResponse = MeResponse;
