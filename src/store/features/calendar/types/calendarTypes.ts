import { QurixApiResponse } from "../../notification/types/notificationTypes";

export type CalendarEventType =
  | "PROJECT_DEADLINE"
  | "MEETING"
  | "REMINDER"
  | string;

export interface CalendarEvent {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string | null;
  eventType: CalendarEventType;
  projectId: string | null;
  projectStatus: string | null;
}

export interface CalendarEventWithParticipants extends CalendarEvent {
  participantIds: string[];
  createdBy: string;
}

export interface GetCalendarEventsParams {
  from: string;
  to: string;
  scope?: "me" | string;
  teamId?: string;
  serviceLineId?: string;
  cursor?: string;
  limit?: number;
}

export interface GetCalendarEventsResult {
  items: CalendarEvent[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface CreateCalendarEventPayload {
  title: string;
  startsAt: string;
  endsAt?: string;
  eventType: CalendarEventType;
  projectId?: string;
  participantIds?: string[];
}

export type UpdateCalendarEventPayload = Partial<CreateCalendarEventPayload>;

export interface GetUpcomingResult {
  from: string;
  to: string;
  items: CalendarEvent[];
}

// ---- Response envelopes ----

export type GetCalendarEventsResponse =
  QurixApiResponse<GetCalendarEventsResult>;
export type CreateCalendarEventResponse =
  QurixApiResponse<CalendarEventWithParticipants>;
export type UpdateCalendarEventResponse =
  QurixApiResponse<CalendarEventWithParticipants>;
export type GetUpcomingResponse = QurixApiResponse<GetUpcomingResult>;
