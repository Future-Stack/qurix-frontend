export type NotificationType =
  | "PROJECT"
  | "ISSUE"
  | "MESSAGE"
  | "MENTION"
  | "DEADLINE"
  | "CALL"
  | "ADMIN";

export interface NotificationResource {
  type: string;
  id: string;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  resource: NotificationResource | null;
  readAt: string | null;
  createdAt: string;
}

export interface GetNotificationsParams {
  unread?: boolean;
  type?: NotificationType[];
  cursor?: string;
  limit?: number;
}

export interface GetNotificationsResult {
  items: Notification[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface UnreadCountResult {
  unreadCount: number;
}

export interface NotificationChannels {
  PRIVATE_CHAT: boolean;
  GROUP_CHAT: boolean;
  CALLS: boolean;
  REPLY_AND_MENTIONS: boolean;
}

export interface NotificationPreferences {
  desktopEnabled: boolean;
  soundEnabled: boolean;
  channels: NotificationChannels;
}

export type UpdateNotificationPreferencesPayload = NotificationPreferences;

export interface MarkAllReadResult {
  markedRead: number;
  unreadCount: number;
}

// ---- Response envelopes ----
// This API wraps responses as { success, data, timestamp } — not the
// { statusCode, success, message, data } shape used elsewhere, so a
// dedicated envelope type is used here instead of the shared ApiResponse.

export interface QurixApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export type GetNotificationsResponse = QurixApiResponse<GetNotificationsResult>;
export type UnreadCountResponse = QurixApiResponse<UnreadCountResult>;
export type GetNotificationPreferencesResponse =
  QurixApiResponse<NotificationPreferences>;
export type UpdateNotificationPreferencesResponse =
  QurixApiResponse<NotificationPreferences>;
export type MarkAllReadResponse = QurixApiResponse<MarkAllReadResult>;
export type MarkOneReadResponse = QurixApiResponse<Notification>;
