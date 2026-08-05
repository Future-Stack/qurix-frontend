import { baseAPI } from "../BaseApi/baseAPI";
import {
  GetNotificationPreferencesResponse,
  GetNotificationsParams,
  GetNotificationsResponse,
  MarkAllReadResponse,
  MarkOneReadResponse,
  UnreadCountResponse,
  UpdateNotificationPreferencesPayload,
  UpdateNotificationPreferencesResponse,
} from "./types/notificationTypes";

export const notificationAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<
      GetNotificationsResponse,
      GetNotificationsParams | void
    >({
      query: (params) => ({
        url: `/notifications`,
        method: "GET",
        params: {
          unread: params?.unread,
          type: params?.type,
          cursor: params?.cursor,
          limit: params?.limit ?? 30,
        },
      }),
      providesTags: ["Notification"],
    }),

    getUnreadCount: build.query<UnreadCountResponse, void>({
      query: () => ({
        url: `/notifications/unread-count`,
        method: "GET",
      }),
      providesTags: ["Notification"],
    }),

    getNotificationPreferences: build.query<
      GetNotificationPreferencesResponse,
      void
    >({
      query: () => ({
        url: `/notifications/preferences`,
        method: "GET",
      }),
      providesTags: ["NotificationPreferences"],
    }),

    updateNotificationPreferences: build.mutation<
      UpdateNotificationPreferencesResponse,
      UpdateNotificationPreferencesPayload
    >({
      query: (data) => ({
        url: `/notifications/preferences`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["NotificationPreferences"],
    }),

    markAllNotificationsRead: build.mutation<MarkAllReadResponse, void>({
      query: () => ({
        url: `/notifications/mark-all-read`,
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["Notification"],
    }),

    markNotificationRead: build.mutation<MarkOneReadResponse, string>({
      query: (id) => ({
        url: `/notifications/${id}/read`,
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["Notification"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useGetUnreadCountQuery,
  useGetNotificationPreferencesQuery,
  useUpdateNotificationPreferencesMutation,
  useMarkAllNotificationsReadMutation,
  useMarkNotificationReadMutation,
} = notificationAPI;
