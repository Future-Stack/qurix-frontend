import { baseAPI } from "../BaseApi/baseAPI";
import {
  CreateCalendarEventPayload,
  CreateCalendarEventResponse,
  GetCalendarEventsParams,
  GetCalendarEventsResponse,
  GetUpcomingResponse,
  UpdateCalendarEventPayload,
  UpdateCalendarEventResponse,
} from "./types/calendarTypes";

export const calendarAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getCalendarEvents: build.query<
      GetCalendarEventsResponse,
      GetCalendarEventsParams
    >({
      query: (params) => ({
        url: `/calendar/events`,
        method: "GET",
        params: {
          from: params.from,
          to: params.to,
          scope: params.scope,
          teamId: params.teamId,
          serviceLineId: params.serviceLineId,
          cursor: params.cursor,
          limit: params.limit ?? 50,
        },
      }),
      providesTags: ["CalendarEvent"],
    }),

    createCalendarEvent: build.mutation<
      CreateCalendarEventResponse,
      CreateCalendarEventPayload
    >({
      query: (data) => ({
        url: `/calendar/events`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CalendarEvent"],
    }),

    getUpcomingEvents: build.query<GetUpcomingResponse, void>({
      query: () => ({
        url: `/calendar/upcoming`,
        method: "GET",
      }),
      providesTags: ["CalendarEvent"],
    }),

    updateCalendarEvent: build.mutation<
      UpdateCalendarEventResponse,
      { id: string; data: UpdateCalendarEventPayload }
    >({
      query: ({ id, data }) => ({
        url: `/calendar/events/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["CalendarEvent"],
    }),

    deleteCalendarEvent: build.mutation<void, string>({
      query: (id) => ({
        url: `/calendar/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CalendarEvent"],
    }),
  }),
});

export const {
  useGetCalendarEventsQuery,
  useCreateCalendarEventMutation,
  useGetUpcomingEventsQuery,
  useUpdateCalendarEventMutation,
  useDeleteCalendarEventMutation,
} = calendarAPI;
