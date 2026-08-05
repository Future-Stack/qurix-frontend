import { baseAPI } from "../BaseApi/baseAPI";
import {
  CreateLinkPayload,
  CreateLinkResponse,
  CreateUploadUrlPayload,
  CreateUploadUrlResponse,
  DeleteAttachmentResponse,
  FinalizeUploadResponse,
  GetDownloadUrlResponse,
  UploadAvatarPayload,
  UploadAvatarResponse,
  UploadFilePayload,
  UploadFileResponse,
} from "./types/filesTypes";

export const filesAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // 1. POST /files/upload - Upload a file (multipart)
    uploadFile: builder.mutation<UploadFileResponse, UploadFilePayload>({
      query: ({ file, purpose }) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("purpose", purpose);
        return {
          url: "/files/upload",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["File"],
    }),

    // 2. POST /files/upload-url - Create a signed S3 upload URL (JSON)
    createUploadUrl: builder.mutation<
      CreateUploadUrlResponse,
      CreateUploadUrlPayload
    >({
      query: (body) => ({
        url: "/files/upload-url",
        method: "POST",
        body,
      }),
      invalidatesTags: ["File"],
    }),

    // 3. POST /files/avatar - Upload avatar via multipart
    uploadAvatar: builder.mutation<
      UploadAvatarResponse,
      UploadAvatarPayload | File
    >({
      query: (payload) => {
        const formData = new FormData();
        const file =
          payload instanceof File || payload instanceof Blob
            ? payload
            : payload.file;
        formData.append("file", file);
        return {
          url: "/files/avatar",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["File", "Auth"],
    }),

    // 4. POST /files/{uploadId}/finalize - Finalize signed-URL upload
    finalizeUpload: builder.mutation<FinalizeUploadResponse, string>({
      query: (uploadId) => ({
        url: `/files/${uploadId}/finalize`,
        method: "POST",
      }),
      invalidatesTags: ["File"],
    }),

    // 5. GET /files/{attachmentId}/download-url - Create signed download URL
    getDownloadUrl: builder.query<GetDownloadUrlResponse, string>({
      query: (attachmentId) => ({
        url: `/files/${attachmentId}/download-url`,
        method: "GET",
      }),
      providesTags: ["File"],
    }),

    // 6. DELETE /files/{attachmentId} - Soft-delete an attachment
    deleteAttachment: builder.mutation<DeleteAttachmentResponse, string>({
      query: (attachmentId) => ({
        url: `/files/${attachmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["File"],
    }),

    // 7. POST /links - Validate and store Figma/Drive/GitHub link
    createLink: builder.mutation<CreateLinkResponse, CreateLinkPayload>({
      query: (body) => ({
        url: "/links",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Link"],
    }),
  }),
});

export const {
  useUploadFileMutation,
  useCreateUploadUrlMutation,
  useUploadAvatarMutation,
  useFinalizeUploadMutation,
  useGetDownloadUrlQuery,
  useLazyGetDownloadUrlQuery,
  useDeleteAttachmentMutation,
  useCreateLinkMutation,
} = filesAPI;
