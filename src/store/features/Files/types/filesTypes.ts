export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// 1. Upload File (Multipart) - POST /files/upload
export interface UploadFilePayload {
  file: File | Blob;
  purpose: string;
}

export interface UploadFileData {
  uploadId: string;
  attachmentId: string;
  scanStatus: string;
  storageKey: string;
}

export type UploadFileResponse = ApiResponse<UploadFileData>;

// 2. Create Signed Upload URL - POST /files/upload-url
export interface CreateUploadUrlPayload {
  filename: string;
  mimeType: string;
  sizeBytes: number;
  purpose: string;
}

export interface CreateUploadUrlData {
  uploadId: string;
  attachmentId: string;
  uploadUrl: string;
  expiresAt: string;
  headers: {
    'Content-Type': string;
  };
}

export type CreateUploadUrlResponse = ApiResponse<CreateUploadUrlData>;

// 3. Upload Avatar (Multipart) - POST /files/avatar
export interface UploadAvatarPayload {
  file: File | Blob;
}

export interface UploadAvatarData {
  uploadId: string;
  attachmentId: string;
  scanStatus: string;
  storageKey: string;
  avatarKey: string;
}

export type UploadAvatarResponse = ApiResponse<UploadAvatarData>;

// 4. Finalize Signed-URL Upload - POST /files/{uploadId}/finalize
export interface FinalizeUploadData {
  attachmentId: string;
  scanStatus: string;
}

export type FinalizeUploadResponse = ApiResponse<FinalizeUploadData>;

// 5. Download URL - GET /files/{attachmentId}/download-url
export interface GetDownloadUrlData {
  attachmentId: string;
  downloadUrl: string;
  expiresAt: string;
}

export type GetDownloadUrlResponse = ApiResponse<GetDownloadUrlData>;

// 6. Delete Attachment - DELETE /files/{attachmentId}
export interface DeleteAttachmentData {
  id: string;
  deletedAt: string;
}

export type DeleteAttachmentResponse = ApiResponse<DeleteAttachmentData>;

// 7. Create Link - POST /links
export interface CreateLinkPayload {
  url: string;
  parentType: 'PROJECT' | 'ISSUE' | 'MESSAGE' | string;
  parentId: string;
  label?: string;
}

export interface CreateLinkData {
  linkId: string;
  url: string;
  kind: string;
  title: string;
  label: string;
  parentType: string;
  parentId: string;
}

export type CreateLinkResponse = ApiResponse<CreateLinkData>;
