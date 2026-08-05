# API Endpoint Test Report

| Field | Value |
| --- | --- |
| Base URL | `http://localhost:3000` |
| API prefix | `/api/v1` |
| Ran at | 2026-08-01T15:21:37.499Z |
| Total | **95** |
| Passed | **95** |
| Failed | **0** |
| Auth | Bearer JWT (seed admin `admin@qurix.local`) |
| OpenAPI ops documented | 122 |
| OpenAPI ops not hit | 33 |

## Summary

| # | Result | Method | Status | Duration | Endpoint |
| --- | --- | --- | --- | --- | --- |
| 1 | PASS | `GET` | 200 | 4055ms | Landing page — `/` |
| 2 | PASS | `GET` | 200 | 4ms | Swagger UI — `/docs` |
| 3 | PASS | `GET` | 200 | 4ms | OpenAPI JSON — `/docs-json` |
| 4 | PASS | `GET` | 200 | 7ms | Health (v1) — `/api/v1/health` |
| 5 | PASS | `POST` | 404 | 19ms | Verify employee (unknown) — `/api/v1/auth/verify-employee` |
| 6 | PASS | `POST` | 200 | 177ms | Forgot password — `/api/v1/auth/forgot-password` |
| 7 | PASS | `POST` | 401 | 198ms | Login — bad password — `/api/v1/auth/login` |
| 8 | PASS | `POST` | 200 | 211ms | Login as admin — `/api/v1/auth/login` |
| 9 | PASS | `POST` | 200 | 202ms | Login as employee — `/api/v1/auth/login` |
| 10 | PASS | `GET` | 200 | 6ms | GET auth/me — `/api/v1/auth/me` |
| 11 | PASS | `PATCH` | 200 | 8ms | PATCH auth/me — `/api/v1/auth/me` |
| 12 | PASS | `GET` | 200 | 6ms | List sessions — `/api/v1/auth/sessions` |
| 13 | PASS | `POST` | 200 | 14ms | Refresh token — `/api/v1/auth/refresh` |
| 14 | PASS | `GET` | 200 | 8ms | List employees — `/api/v1/employees?limit=10` |
| 15 | PASS | `GET` | 200 | 11ms | Employee station — `/api/v1/employees/station?limit=5` |
| 16 | PASS | `GET` | 200 | 6ms | Get employee by id — `/api/v1/employees/b03df988-bc8a-4834-94a7-5046798932ea` |
| 17 | PASS | `GET` | 200 | 17ms | Employee activity — `/api/v1/employees/b03df988-bc8a-4834-94a7-5046798932ea/activity?limit=5` |
| 18 | PASS | `PATCH` | 200 | 18ms | Patch employee — `/api/v1/employees/3c10609f-0896-4280-bbc5-ee9198bf9ea0` |
| 19 | PASS | `PATCH` | 200 | 11ms | Patch employee privacy — `/api/v1/employees/3c10609f-0896-4280-bbc5-ee9198bf9ea0/privacy` |
| 20 | PASS | `GET` | 200 | 6ms | List service lines — `/api/v1/service-lines?limit=10` |
| 21 | PASS | `POST` | 201 | 11ms | Create service line — `/api/v1/service-lines` |
| 22 | PASS | `PATCH` | 200 | 11ms | Patch service line — `/api/v1/service-lines/9df24165-0dac-49f8-a806-7a319e805983` |
| 23 | PASS | `GET` | 200 | 6ms | List teams — `/api/v1/teams?limit=10` |
| 24 | PASS | `POST` | 201 | 15ms | Create team — `/api/v1/teams` |
| 25 | PASS | `PATCH` | 200 | 9ms | Patch team — `/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f` |
| 26 | PASS | `GET` | 200 | 5ms | List team members — `/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members` |
| 27 | PASS | `POST` | 200 | 14ms | Add team member — `/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members` |
| 28 | PASS | `PATCH` | 409 | 10ms | Patch team member role — `/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members/b03df988-bc8a-4834-94a7-5046798932ea` |
| 29 | PASS | `DELETE` | 409 | 7ms | Remove team member — `/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members/b03df988-bc8a-4834-94a7-5046798932ea` |
| 30 | PASS | `GET` | 200 | 22ms | List projects — `/api/v1/projects?limit=10` |
| 31 | PASS | `POST` | 201 | 25ms | Create project — `/api/v1/projects` |
| 32 | PASS | `GET` | 200 | 11ms | Get project — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8` |
| 33 | PASS | `PATCH` | 200 | 17ms | Patch project — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8` |
| 34 | PASS | `GET` | 200 | 5ms | List project members — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members` |
| 35 | PASS | `GET` | 200 | 5ms | Project activities — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/activities?limit=10` |
| 36 | PASS | `POST` | 400 | 4ms | Mark project urgent — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/mark-urgent` |
| 37 | PASS | `POST` | 200 | 14ms | Add project link — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/links` |
| 38 | PASS | `DELETE` | 200 | 18ms | Delete project link — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/links/56aad6a1-b773-43aa-8cd9-740025a36194` |
| 39 | PASS | `POST` | 200 | 16ms | Add project member — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members` |
| 40 | PASS | `PATCH` | 200 | 13ms | Patch project member — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members/b03df988-bc8a-4834-94a7-5046798932ea` |
| 41 | PASS | `DELETE` | 200 | 13ms | Remove project member — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members/b03df988-bc8a-4834-94a7-5046798932ea` |
| 42 | PASS | `GET` | 200 | 8ms | List project issues — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/issues?limit=10` |
| 43 | PASS | `POST` | 201 | 14ms | Create issue — `/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/issues` |
| 44 | PASS | `GET` | 200 | 8ms | Get issue — `/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de` |
| 45 | PASS | `PATCH` | 200 | 16ms | Patch issue — `/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de` |
| 46 | PASS | `PATCH` | 200 | 16ms | Patch issue status — `/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/status` |
| 47 | PASS | `POST` | 200 | 9ms | Add issue link — `/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/links` |
| 48 | PASS | `POST` | 201 | 9ms | Add issue comment — `/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/comments` |
| 49 | PASS | `GET` | 200 | 6ms | List issue comments — `/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/comments` |
| 50 | PASS | `GET` | 200 | 12ms | List conversations — `/api/v1/conversations?limit=10` |
| 51 | PASS | `POST` | 200 | 12ms | Open direct conversation — `/api/v1/conversations/direct` |
| 52 | PASS | `POST` | 201 | 17ms | Create group conversation — `/api/v1/conversations` |
| 53 | PASS | `GET` | 200 | 5ms | Get conversation — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2` |
| 54 | PASS | `PATCH` | 200 | 13ms | Patch conversation — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2` |
| 55 | PASS | `PATCH` | 200 | 10ms | Patch conversation preferences — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/preferences` |
| 56 | PASS | `POST` | 201 | 18ms | Send conversation message — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/messages` |
| 57 | PASS | `GET` | 200 | 8ms | List conversation messages — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/messages?limit=20` |
| 58 | PASS | `POST` | 200 | 8ms | Mark conversation read — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/read` |
| 59 | PASS | `PATCH` | 200 | 14ms | Edit message — `/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3` |
| 60 | PASS | `POST` | 200 | 13ms | Pin message — `/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3/pin` |
| 61 | PASS | `POST` | 200 | 10ms | React to message — `/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3/reactions` |
| 62 | PASS | `DELETE` | 200 | 14ms | Unpin message — `/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3/pin` |
| 63 | PASS | `POST` | 201 | 24ms | Send direct message shortcut — `/api/v1/messages/direct` |
| 64 | PASS | `POST` | 200 | 45ms | Mark all conversations read — `/api/v1/conversations/mark-all-read` |
| 65 | PASS | `GET` | 200 | 5ms | List notifications — `/api/v1/notifications?limit=10` |
| 66 | PASS | `GET` | 200 | 4ms | Notification unread count — `/api/v1/notifications/unread-count` |
| 67 | PASS | `GET` | 200 | 4ms | Get notification preferences — `/api/v1/notifications/preferences` |
| 68 | PASS | `PATCH` | 200 | 14ms | Patch notification preferences — `/api/v1/notifications/preferences` |
| 69 | PASS | `POST` | 200 | 13ms | Mark all notifications read — `/api/v1/notifications/mark-all-read` |
| 70 | PASS | `GET` | 200 | 17ms | Call history — `/api/v1/calls/history?limit=10` |
| 71 | PASS | `POST` | 500 | 25ms | Start voice call — `/api/v1/calls` |
| 72 | PASS | `GET` | 200 | 33ms | List calendar events — `/api/v1/calendar/events?from=2026-07-02T15%3A21%3A35.617Z&to=2026-09-30T15%3A21%3A35.617Z` |
| 73 | PASS | `GET` | 200 | 23ms | Upcoming calendar — `/api/v1/calendar/upcoming` |
| 74 | PASS | `POST` | 201 | 15ms | Create calendar event — `/api/v1/calendar/events` |
| 75 | PASS | `PATCH` | 200 | 164ms | Patch calendar event — `/api/v1/calendar/events/f4e67b03-d6b6-4de2-b3f0-5181a01a602e` |
| 76 | PASS | `DELETE` | 200 | 10ms | Delete calendar event — `/api/v1/calendar/events/f4e67b03-d6b6-4de2-b3f0-5181a01a602e` |
| 77 | PASS | `GET` | 200 | 20ms | Global search — `/api/v1/search?q=E2E&limit=10` |
| 78 | PASS | `POST` | 200 | 22ms | Create upload URL — `/api/v1/files/upload-url` |
| 79 | PASS | `POST` | 200 | 950ms | Multipart file upload — `/api/v1/files/upload` |
| 80 | PASS | `GET` | 200 | 6ms | Get download URL — `/api/v1/files/6915f447-07b9-4085-8406-48c29ebe294d/download-url` |
| 81 | PASS | `POST` | 201 | 12ms | Create generic link — `/api/v1/links` |
| 82 | PASS | `GET` | 200 | 8ms | Admin audit log — `/api/v1/admin/audit?limit=10` |
| 83 | PASS | `GET` | 200 | 4ms | Admin get config — `/api/v1/admin/config` |
| 84 | PASS | `PATCH` | 200 | 10ms | Admin patch config — `/api/v1/admin/config` |
| 85 | PASS | `GET` | 200 | 11ms | Admin metrics — `/api/v1/admin/metrics` |
| 86 | PASS | `GET` | 200 | 12ms | Admin feature flags — `/api/v1/admin/feature-flags` |
| 87 | PASS | `PATCH` | 200 | 16ms | Admin patch feature flag — `/api/v1/admin/feature-flags/calendar_reminders` |
| 88 | PASS | `POST` | 200 | 13ms | Admin start impersonation — `/api/v1/admin/impersonate` |
| 89 | PASS | `POST` | 200 | 10ms | Admin end impersonation — `/api/v1/admin/impersonate/end` |
| 90 | PASS | `POST` | 200 | 7ms | Admin retention request (no approve) — `/api/v1/admin/retention/run` |
| 91 | PASS | `POST` | 200 | 10ms | Admin outbox replay — `/api/v1/admin/replay` |
| 92 | PASS | `DELETE` | 200 | 9ms | Delete created team — `/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f` |
| 93 | PASS | `DELETE` | 200 | 12ms | Delete created service line — `/api/v1/service-lines/9df24165-0dac-49f8-a806-7a319e805983` |
| 94 | PASS | `POST` | 200 | 11ms | Leave group conversation — `/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/leave` |
| 95 | PASS | `POST` | 200 | 9ms | Logout — `/api/v1/auth/logout` |

## OpenAPI coverage gaps

These documented operations were not exercised (or path shape differed):

- `DELETE /api/v1/auth/sessions/{id}`
- `DELETE /api/v1/conversations/{id}`
- `DELETE /api/v1/conversations/{id}/members/{id}`
- `DELETE /api/v1/employees/{id}/roles/{id}`
- `DELETE /api/v1/files/{id}`
- `DELETE /api/v1/issues/{id}/links/{id}`
- `DELETE /api/v1/messages/{id}`
- `DELETE /api/v1/projects/{id}`
- `DELETE /api/v1/projects/{id}/attachments/{id}`
- `PATCH /api/v1/admin/feature-flags/{id}`
- `PATCH /api/v1/calls/{id}/status`
- `PATCH /api/v1/employees/{id}/status`
- `PATCH /api/v1/projects/{id}/status`
- `POST /api/v1/auth/2fa/disable`
- `POST /api/v1/auth/2fa/enable`
- `POST /api/v1/auth/2fa/verify`
- `POST /api/v1/auth/change-password`
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/reset-password`
- `POST /api/v1/calls/{id}/end`
- `POST /api/v1/calls/{id}/participants/{id}/join`
- `POST /api/v1/calls/{id}/participants/{id}/leave`
- `POST /api/v1/conversations/{id}/clear`
- `POST /api/v1/conversations/{id}/members`
- `POST /api/v1/employees/{id}/roles`
- `POST /api/v1/files/avatar`
- `POST /api/v1/files/{id}/finalize`
- `POST /api/v1/issues/{id}/attachments`
- `POST /api/v1/issues/{id}/attachments/upload`
- `POST /api/v1/messages/{id}/forward`
- `POST /api/v1/notifications/{id}/read`
- `POST /api/v1/projects/{id}/attachments`
- `POST /api/v1/projects/{id}/attachments/upload`


## Details

### 1. Landing page — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 4055ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-1`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `text/html; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:27 GMT`
- `etag`: `W/"1c36-/BWfewLNRmaV70WPo0Mq/g9AlYY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content="Internal Softvence workspace API — authentication, projects, real-time collaboration." />
<title>Qurix API</title>
<style>
  *,*::before,*::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; height: 100%; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    background:
      radial-gradient(1200px 600px at 80% -10%, #14304a 0%, transparent 60%),
      radial-gradient(900px 500px at 0% 110%, #0f2236 0%, transparent 55%),
      #07111c;
    color: #e6edf3;
    min-height: 100%;
    display: flex;
    align-items: center;
    ju…
```

---

### 2. Swagger UI — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/docs`
- **Expected status:** 200 | 301 | 302
- **Actual status:** 200
- **Duration:** 4ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-2`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `text/html; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:27 GMT`
- `etag`: `W/"c36-CoJIbFAUj2LvfbhQh9ycBoxTpas"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-xss-protection`: `0`

#### Response body

```

<!-- HTML for static distribution bundle build -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Swagger UI</title>
  <link rel="stylesheet" type="text/css" href="./docs/swagger-ui.css" >
  <link rel="icon" type="image/png" href="./docs/favicon-32x32.png" sizes="32x32" /><link rel="icon" type="image/png" href="./docs/favicon-16x16.png" sizes="16x16" />
  <style>
    html
    {
      box-sizing: border-box;
      overflow: -moz-scrollbars-vertical;
      overflow-y: scroll;
    }
    *,
    *:before,
    *:after
    {
      box-sizing: inherit;
    }

    body {
      margin:0;
      background: #fafafa;
    }
  </style>
</head>

<body>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">…
```

---

### 3. OpenAPI JSON — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/docs-json`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 4ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-3`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:27 GMT`
- `etag`: `W/"11501-FCwO5umNVe9exK0Vu9ePqNPjiZs"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "openapi": "3.0.0",
  "paths": {
    "/api/v1/auth/verify-employee": {
      "post": {
        "operationId": "AuthController_verifyEmployee_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/VerifyEmployeeDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "summary": "Validate an (employee code, email) pairing",
        "tags": [
          "auth"
        ]
      }
    },
    "/api/v1/auth/register": {
      "post": {
        "operationId": "AuthController_register_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RegisterDto"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": ""
          }
        },
        "summary": "Complete employee registration after verify-employee",
        "tags": [
          "auth"
        ]
      }
    },
    "/api/v1/auth/login": {
      "post": {
        "operationId": "AuthController_login_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "summary": "Authenticate an employee. Returns tokens, or an mfaChallenge when 2FA is enabled.",
        "tags": [
          "auth"
        ]
      }
    },
    "/api/v1/auth/refresh": {
      "post": {
        "operationId": "AuthController_refresh_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/RefreshDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "summary": "Rotate an access/refresh token pair",
        "tags": [
          "auth"
        ]
      }
    },
    "/api/v1/auth/forgot-password": {
      "post": {
        "operationId": "AuthController_forgotPassword_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ForgotPasswordDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "summary": "Begin the password-reset flow",
        "tags": [
          "auth"
        ]
      }
    },
    "/api/v1/auth/reset-password": {
      "post": {
        "operationId": "AuthController_resetPassword_v1",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ResetPasswordDto"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": ""
          }
        },
        "summary": "Complete the password-reset flow",
        "tags": [
          "auth"
        ]
      }
    },
    "/api/v1/auth/logout": {
      "post": {
        "operationId": "AuthController_logout_v1",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "security": [
          {
            "bearer": []
          }
        ],
        "summary": "Revoke the current 
… truncated (141697 more chars)
```

---

### 4. Health (v1) — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/health`
- **Expected status:** 200 | 503
- **Actual status:** 200
- **Duration:** 7ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-4`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `cache-control`: `no-cache, no-store, must-revalidate`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:27 GMT`
- `etag`: `W/"a4-ruTqfoI56ki0OvEpeTPH6vdKwPI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "info": {
      "database": {
        "status": "up"
      }
    },
    "error": {},
    "details": {
      "database": {
        "status": "up"
      }
    }
  },
  "timestamp": "2026-08-01T15:21:27.644Z"
}
```

---

### 5. Verify employee (unknown) — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/verify-employee`
- **Expected status:** 200 | 400 | 404
- **Actual status:** 404
- **Duration:** 19ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-5`
- `Idempotency-Key`: `b8f886b6-0474-4fb7-868d-cc7a275a2a31`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "employeeCode": "NOPE-000",
  "email": "nobody@example.com"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:27 GMT`
- `etag`: `W/"c4-icismr5aHueJfRod395R4aHkj3s"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `10`
- `x-ratelimit-remaining`: `9`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "statusCode": 404,
  "code": "EMPLOYEE_NOT_FOUND",
  "message": "No employee matches that code and email.",
  "error": "NOT_FOUND",
  "path": "/api/v1/auth/verify-employee",
  "timestamp": "2026-08-01T15:21:27.683Z"
}
```

---

### 6. Forgot password — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/forgot-password`
- **Expected status:** 200 | 201 | 204
- **Actual status:** 200
- **Duration:** 177ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-6`
- `Idempotency-Key`: `529fd6eb-fb49-43ee-bb95-6e08dd5a3c16`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "email": "admin@qurix.local"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:27 GMT`
- `etag`: `W/"7b-GyDF/2KFk0piG2QnykA+nMrxyKc"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `5`
- `x-ratelimit-remaining`: `4`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "ok": true,
    "resetId": "71300a48-c04a-499b-9f6b-6462503662f2"
  },
  "timestamp": "2026-08-01T15:21:27.880Z"
}
```

---

### 7. Login — bad password — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/login`
- **Expected status:** 401
- **Actual status:** 401
- **Duration:** 198ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-7`
- `Idempotency-Key`: `78bbdd6c-83ba-4555-b9e6-d8040f091fae`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "usernameOrEmail": "admin@qurix.local",
  "password": "[REDACTED]"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"b8-K/h/VRMcBThRn59oBWeb3FRbpZ8"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `5`
- `x-ratelimit-remaining`: `4`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "statusCode": 401,
  "code": "INVALID_CREDENTIALS",
  "message": "Username or password is incorrect.",
  "error": "UNAUTHORIZED",
  "path": "/api/v1/auth/login",
  "timestamp": "2026-08-01T15:21:28.098Z"
}
```

---

### 8. Login as admin — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/login`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 211ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-8`
- `Idempotency-Key`: `137d38a3-3c62-4dbc-bfda-67fe0be75ac5`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "usernameOrEmail": "admin@qurix.local",
  "password": "[REDACTED]"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"57e-6z7A/a+ea582AzKHg0U4xM2P7UU"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `5`
- `x-ratelimit-remaining`: `3`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "accessToken": "[REDACTED]",
    "refreshToken": "[REDACTED]",
    "expiresIn": 900,
    "employee": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "tenantId": "b866d27b-c17d-4abd-a680-f3087c2e95b9",
      "employeeCode": "ADMIN-001",
      "firstName": "Admin",
      "lastName": "User",
      "username": "admin",
      "email": "admin@qurix.local",
      "phone": null,
      "designation": "Administrator",
      "status": "ACTIVE",
      "avatarKey": null,
      "roles": [
        "ADMIN",
        "SUPER_ADMIN"
      ],
      "teamIds": [
        "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
        "58df3b83-0d10-46cc-ac1d-3da5049758d9",
        "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
      ],
      "serviceLineIds": [
        "724000a3-c004-4f5b-97d1-38b1096f9ff0"
      ]
    }
  },
  "timestamp": "2026-08-01T15:21:28.329Z"
}
```

---

### 9. Login as employee — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/login`
- **Expected status:** 200 | 401
- **Actual status:** 200
- **Duration:** 202ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-9`
- `Idempotency-Key`: `80dcce2f-885a-46a7-b1b4-da9cad02a468`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "usernameOrEmail": "alex@qurix.local",
  "password": "[REDACTED]"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"67d-y3N8Xu3ToBzxdtFikVZYc+cdgv0"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `5`
- `x-ratelimit-remaining`: `2`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "accessToken": "[REDACTED]",
    "refreshToken": "[REDACTED]",
    "expiresIn": 900,
    "employee": {
      "id": "b03df988-bc8a-4834-94a7-5046798932ea",
      "tenantId": "b866d27b-c17d-4abd-a680-f3087c2e95b9",
      "employeeCode": "16058",
      "firstName": "Alex",
      "lastName": "Chen",
      "username": "alex_chen",
      "email": "alex@qurix.local",
      "phone": null,
      "designation": "Senior Frontend Engineer",
      "status": "ACTIVE",
      "avatarKey": null,
      "roles": [
        "EMPLOYEE"
      ],
      "teamIds": [
        "ad2ad12e-251f-4bb4-8086-13431ea744b9",
        "58df3b83-0d10-46cc-ac1d-3da5049758d9",
        "820bfec2-daf5-4983-a93a-6352a50073f0",
        "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
        "7491c39b-dc39-41ed-92f2-de874ca0f0f1",
        "a4d8533d-bfa9-4e29-ba2f-3310b0ca06c1"
      ],
      "serviceLineIds": [
        "724000a3-c004-4f5b-97d1-38b1096f9ff0"
      ]
    }
  },
  "timestamp": "2026-08-01T15:21:28.552Z"
}
```

---

### 10. GET auth/me — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/auth/me`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-10`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"237-mO3UQ+WnZVKFN7HIspzB4MCZdwM"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "tenantId": "b866d27b-c17d-4abd-a680-f3087c2e95b9",
    "employeeCode": "ADMIN-001",
    "firstName": "Admin",
    "lastName": "User",
    "username": "admin",
    "email": "admin@qurix.local",
    "phone": null,
    "designation": "Administrator",
    "status": "ACTIVE",
    "avatarKey": null,
    "roles": [
      "ADMIN",
      "SUPER_ADMIN"
    ],
    "teamIds": [
      "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
      "58df3b83-0d10-46cc-ac1d-3da5049758d9",
      "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
    ],
    "serviceLineIds": [
      "724000a3-c004-4f5b-97d1-38b1096f9ff0"
    ]
  },
  "timestamp": "2026-08-01T15:21:28.580Z"
}
```

---

### 11. PATCH auth/me — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/auth/me`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-11`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `76e9c315-31af-4545-9f58-fe34b408e727`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "phone": "+8801700000099"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"243-J5dlhicXtNtILZmnxrp1UUKOBWM"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "tenantId": "b866d27b-c17d-4abd-a680-f3087c2e95b9",
    "employeeCode": "ADMIN-001",
    "firstName": "Admin",
    "lastName": "User",
    "username": "admin",
    "email": "admin@qurix.local",
    "phone": "+8801700000099",
    "designation": "Administrator",
    "status": "ACTIVE",
    "avatarKey": null,
    "roles": [
      "ADMIN",
      "SUPER_ADMIN"
    ],
    "teamIds": [
      "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
      "58df3b83-0d10-46cc-ac1d-3da5049758d9",
      "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
    ],
    "serviceLineIds": [
      "724000a3-c004-4f5b-97d1-38b1096f9ff0"
    ]
  },
  "timestamp": "2026-08-01T15:21:28.608Z"
}
```

---

### 12. List sessions — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/auth/sessions`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-12`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"17e7-eC0mBMXVQGLnakz+SPAEwYhbsHE"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": [
    {
      "id": "baea0160-9d99-4eaa-ad63-d2679d0f2a02",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:172.18.0.1",
      "userAgent": "node",
      "createdAt": "2026-08-01T15:21:28.326Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T15:21:28.325Z",
      "isCurrent": true
    },
    {
      "id": "996665a1-769a-43ca-8782-4b414d2e713f",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:172.18.0.1",
      "userAgent": "curl/8.5.0",
      "createdAt": "2026-08-01T15:16:16.264Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T15:16:16.264Z",
      "isCurrent": false
    },
    {
      "id": "51db6f39-c9ad-42d7-ad55-7fc5f6c1aa2c",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:172.18.0.1",
      "userAgent": "node",
      "createdAt": "2026-08-01T15:14:00.065Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T15:14:00.064Z",
      "isCurrent": false
    },
    {
      "id": "ba29a73e-f4a1-472b-acfd-d2f4aef7a9d7",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:40.833Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:40.832Z",
      "isCurrent": false
    },
    {
      "id": "7d0d0dcb-edcc-42a4-8771-35e87881a5f8",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:39.798Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:39.798Z",
      "isCurrent": false
    },
    {
      "id": "a1521e62-b0f5-4017-9030-ec3b84111cc6",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:39.273Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:39.272Z",
      "isCurrent": false
    },
    {
      "id": "e005ecbb-cbb3-4592-802e-ef70cf743876",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:38.827Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:38.826Z",
      "isCurrent": false
    },
    {
      "id": "ebf428af-2c59-4c17-b3a8-c5f811662761",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:38.387Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:38.386Z",
      "isCurrent": false
    },
    {
      "id": "85c77d23-1072-4a7d-bb2f-bc51db9b2af0",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:24.865Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:24.864Z",
      "isCurrent": false
    },
    {
      "id": "12c7acc6-a0e4-4802-83d7-cfc51c262f31",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:24.419Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:24.419Z",
      "isCurrent": false
    },
    {
      "id": "8404c51a-1f28-437b-84cb-12936afe207c",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:24.090Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:24.089Z",
      "isCurrent": false
    },
    {
      "id": "5f04f2d0-0fc2-4088-b5a1-325692cfcdd3",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:24.069Z",
      "lastUsedAt": null,
      "expiresAt": "2026-08-31T12:43:24.068Z",
      "isCurrent": false
    },
    {
      "id": "ac39bbf2-6462-4e34-89c1-2de6fa3a7079",
      "deviceName": "Unknown device",
      "ipAddress": "::ffff:127.0.0.1",
      "userAgent": null,
      "createdAt": "2026-08-01T12:43:24.069Z",
  
… truncated (3985 more chars)
```

---

### 13. Refresh token — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/refresh`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-13`
- `Idempotency-Key`: `bca63179-a365-4fac-8df3-393c13908036`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "refreshToken": "[REDACTED]"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"58a-ysLOmzwmSvj45nrmKuHTm4rKej4"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `30`
- `x-ratelimit-remaining`: `29`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "accessToken": "[REDACTED]",
    "refreshToken": "[REDACTED]",
    "expiresIn": 900,
    "employee": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "tenantId": "b866d27b-c17d-4abd-a680-f3087c2e95b9",
      "employeeCode": "ADMIN-001",
      "firstName": "Admin",
      "lastName": "User",
      "username": "admin",
      "email": "admin@qurix.local",
      "phone": "+8801700000099",
      "designation": "Administrator",
      "status": "ACTIVE",
      "avatarKey": null,
      "roles": [
        "ADMIN",
        "SUPER_ADMIN"
      ],
      "teamIds": [
        "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
        "58df3b83-0d10-46cc-ac1d-3da5049758d9",
        "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
      ],
      "serviceLineIds": [
        "724000a3-c004-4f5b-97d1-38b1096f9ff0"
      ]
    }
  },
  "timestamp": "2026-08-01T15:21:28.668Z"
}
```

---

### 14. List employees — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/employees?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-14`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"1614-qltAOvkOlXnDSZJrY2xf94FUFLY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "0584de90-6a3b-46b3-a177-a755538f31b8",
        "displayName": "Imran Khan",
        "firstName": "Imran",
        "lastName": "Khan",
        "avatarUrl": null,
        "designation": "Operation Manager",
        "status": "ACTIVE",
        "serviceLineId": null,
        "teamIds": [
          "58df3b83-0d10-46cc-ac1d-3da5049758d9"
        ],
        "joinedAt": "2026-08-01T00:00:00.000Z",
        "lastLoginAt": null,
        "verified": false,
        "privacy": {
          "phoneVisible": true,
          "emailVisible": true,
          "usernameVisible": true,
          "employeeCodeVisible": true
        },
        "phone": "+880123456790",
        "email": "imran@qurix.local",
        "username": "imran_khan",
        "employeeCode": "16057"
      },
      {
        "id": "19f93e7c-b27a-4b5a-a5eb-1869c0186403",
        "displayName": "Omar Faruk",
        "firstName": "Omar",
        "lastName": "Faruk",
        "avatarUrl": null,
        "designation": "Junior Developer",
        "status": "INVITED",
        "serviceLineId": null,
        "teamIds": [
          "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
        ],
        "joinedAt": "2026-08-01T00:00:00.000Z",
        "lastLoginAt": null,
        "verified": false,
        "privacy": {
          "phoneVisible": true,
          "emailVisible": true,
          "usernameVisible": true,
          "employeeCodeVisible": true
        },
        "phone": "",
        "email": "invited@qurix.local",
        "username": "invited_user",
        "employeeCode": "16065"
      },
      {
        "id": "2ce01d23-4242-496b-bb63-82d5c2c973b1",
        "displayName": "Nadia Rahman",
        "firstName": "Nadia",
        "lastName": "Rahman",
        "avatarUrl": null,
        "designation": "Product Designer",
        "status": "ACTIVE",
        "serviceLineId": null,
        "teamIds": [
          "8e665b0b-8391-46f6-99ed-6d25a9be83c3"
        ],
        "joinedAt": "2026-08-01T00:00:00.000Z",
        "lastLoginAt": null,
        "verified": false,
        "privacy": {
          "phoneVisible": true,
          "emailVisible": true,
          "usernameVisible": true,
          "employeeCodeVisible": true
        },
        "phone": "+8801711002262",
        "email": "nadia@qurix.local",
        "username": "nadia_r",
        "employeeCode": "16062"
      },
      {
        "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "displayName": "Admin User",
        "firstName": "Admin",
        "lastName": "User",
        "avatarUrl": null,
        "designation": "Administrator",
        "status": "ACTIVE",
        "serviceLineId": null,
        "teamIds": [
          "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
          "58df3b83-0d10-46cc-ac1d-3da5049758d9",
          "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
        ],
        "joinedAt": "2026-08-01T00:00:00.000Z",
        "lastLoginAt": "2026-08-01T15:21:28.317Z",
        "verified": true,
        "privacy": {
          "phoneVisible": false,
          "emailVisible": true,
          "usernameVisible": true,
          "employeeCodeVisible": true
        },
        "email": "admin@qurix.local",
        "username": "admin",
        "employeeCode": "ADMIN-001"
      },
      {
        "id": "3c8832dc-5751-411e-8d5d-db89b84482c6",
        "displayName": "Lina Park",
        "firstName": "Lina",
        "lastName": "Park",
        "avatarUrl": null,
        "designation": "Designer",
        "status": "INACTIVE",
        "serviceLineId": null,
        "teamIds": [
          "8e665b0b-8391-46f6-99ed-6d25a9be83c3"
        ],
        "joinedAt": "2026-08-01T00:00:00.000Z",
        "lastLoginAt": null,
        "verified": false,
        "privacy": {
          "phoneVisible": true,
          "emailVisible": true,
          "usernameVisible": true,
          "employeeCodeVisible": true
        },
        "phone": "",
        "email": "inactive@qurix.local",
        "username": "inactive_u
… truncated (4368 more chars)
```

---

### 15. Employee station — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/employees/station?limit=5`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-15`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"31dc-eigUZz2aKpaKTMcd1QSvxnaB7Cw"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
        "serviceLineName": "E2E Line Updated msaihrks",
        "serviceLineCode": "E2EMSAIHRKS",
        "projects": [
          {
            "projectId": "ec21e249-a7d7-4f61-8ed9-e57997a36836",
            "orderCode": "E2E-msaim6we",
            "clientName": "E2E Client Updated msaim6we",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "priority": "NORMAL",
            "deadlineAt": "2026-08-08T15:17:27.393Z",
            "members": [
              {
                "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
                "displayName": "Admin User",
                "firstName": "Admin",
                "lastName": "User",
                "avatarUrl": null,
                "designation": "Administrator",
                "status": "ACTIVE",
                "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
                "teamIds": [
                  "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
                  "58df3b83-0d10-46cc-ac1d-3da5049758d9",
                  "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
                ],
                "joinedAt": "2026-08-01T00:00:00.000Z",
                "lastLoginAt": "2026-08-01T15:21:28.317Z",
                "verified": true,
                "privacy": {
                  "phoneVisible": false,
                  "emailVisible": true,
                  "usernameVisible": true,
                  "employeeCodeVisible": true
                },
                "email": "admin@qurix.local",
                "username": "admin",
                "employeeCode": "ADMIN-001"
              }
            ]
          },
          {
            "projectId": "6a3848d2-56c6-4040-9452-3af9aa3c1aec",
            "orderCode": "E2E-msaij6dk",
            "clientName": "E2E Client Updated msaij6dk",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "priority": "NORMAL",
            "deadlineAt": "2026-08-08T15:15:07.388Z",
            "members": [
              {
                "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
                "displayName": "Admin User",
                "firstName": "Admin",
                "lastName": "User",
                "avatarUrl": null,
                "designation": "Administrator",
                "status": "ACTIVE",
                "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
                "teamIds": [
                  "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
                  "58df3b83-0d10-46cc-ac1d-3da5049758d9",
                  "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
                ],
                "joinedAt": "2026-08-01T00:00:00.000Z",
                "lastLoginAt": "2026-08-01T15:21:28.317Z",
                "verified": true,
                "privacy": {
                  "phoneVisible": false,
                  "emailVisible": true,
                  "usernameVisible": true,
                  "employeeCodeVisible": true
                },
                "email": "admin@qurix.local",
                "username": "admin",
                "employeeCode": "ADMIN-001"
              }
            ]
          },
          {
            "projectId": "a7a43e39-51f7-454a-b4db-a7808ef94d7c",
            "orderCode": "E2E-msaincee",
            "clientName": "E2E Client Updated msaincee",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "priority": "NORMAL",
            "deadlineAt": "2026-08-08T15:18:21.034Z",
            "members": [
              {
                "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
                "displayName": "Admin User",
                "firstName": "Admin",
                "lastName": "User",
                "avatarUrl": null,
                "designation": "Administrator",
                "status": "ACTIVE",
                "serviceLineId": "1ec8a706-6b4b-400
… truncated (18255 more chars)
```

---

### 16. Get employee by id — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/employees/b03df988-bc8a-4834-94a7-5046798932ea`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-16`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"398-ilPr7UpZS8ydG0EBqrSqPGryMkA"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "b03df988-bc8a-4834-94a7-5046798932ea",
    "displayName": "Alex Chen",
    "firstName": "Alex",
    "lastName": "Chen",
    "avatarUrl": null,
    "designation": "Senior Frontend Engineer",
    "status": "ACTIVE",
    "serviceLineId": "40b36b85-deba-4d21-b611-963eecb4af6a",
    "teamIds": [
      "ad2ad12e-251f-4bb4-8086-13431ea744b9",
      "58df3b83-0d10-46cc-ac1d-3da5049758d9",
      "820bfec2-daf5-4983-a93a-6352a50073f0",
      "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
      "7491c39b-dc39-41ed-92f2-de874ca0f0f1",
      "a4d8533d-bfa9-4e29-ba2f-3310b0ca06c1"
    ],
    "joinedAt": "2026-08-01T00:00:00.000Z",
    "lastLoginAt": "2026-08-01T15:21:28.544Z",
    "verified": true,
    "privacy": {
      "phoneVisible": true,
      "emailVisible": true,
      "usernameVisible": true,
      "employeeCodeVisible": true
    },
    "phone": "",
    "email": "alex@qurix.local",
    "username": "alex_chen",
    "employeeCode": "16058",
    "roles": [
      {
        "id": "514f8e06-1986-45eb-8526-e69c8a366ac5",
        "key": "EMPLOYEE",
        "name": "Employee"
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:28.753Z"
}
```

---

### 17. Employee activity — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/employees/b03df988-bc8a-4834-94a7-5046798932ea/activity?limit=5`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 17ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-17`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"47f-VNDfVyxP1vwHJDPuMnx7Tx2iCSs"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "kind": "project_assigned",
        "at": "2026-08-01T12:36:37.749Z",
        "title": "Assigned to project",
        "detail": "Project fa41d51a-058d-4348-aced-d0e1b00b060f",
        "resourceType": "ProjectMember",
        "resourceId": "fa41d51a-058d-4348-aced-d0e1b00b060f"
      },
      {
        "kind": "message_sent",
        "at": "2026-08-01T10:17:13.688Z",
        "title": "Sent a message",
        "detail": "Acknowledged. Patching retry jitter now.",
        "resourceType": "Message",
        "resourceId": "319fc99f-83c4-48bb-a89c-ff58fe7c783d"
      },
      {
        "kind": "message_sent",
        "at": "2026-08-01T10:17:13.651Z",
        "title": "Sent a message",
        "detail": "On it after standup.",
        "resourceType": "Message",
        "resourceId": "bfe7157b-79ba-47d9-9cf1-c9c78076b4b3"
      },
      {
        "kind": "issue_assigned",
        "at": "2026-08-01T10:17:13.620Z",
        "title": "Portal export CSV truncates UTF-8 names",
        "detail": "Status: CLOSED",
        "resourceType": "ProjectIssue",
        "resourceId": "093fe1ae-b1bf-4682-bb07-430404d89a5a"
      },
      {
        "kind": "issue_assigned",
        "at": "2026-08-01T10:17:13.450Z",
        "title": "Landing hero video fails to load on Safari",
        "detail": "Status: RESOLVED",
        "resourceType": "ProjectIssue",
        "resourceId": "985121e2-2beb-45f0-8cae-e4dbd1cd8402"
      }
    ],
    "total": 16
  },
  "timestamp": "2026-08-01T15:21:28.790Z"
}
```

---

### 18. Patch employee — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/employees/3c10609f-0896-4280-bbc5-ee9198bf9ea0`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 18ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-18`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `73c9d51c-f4b6-49b9-b8ef-ae79bc27c53d`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "phone": "+10000000000"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"36a-5w8e7zCeKgj0bzUhBlAXYKpxmLc"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "displayName": "Admin User",
    "firstName": "Admin",
    "lastName": "User",
    "avatarUrl": null,
    "designation": "Administrator",
    "status": "ACTIVE",
    "serviceLineId": "bdbfd926-eba6-40c2-bd7f-cf0e2ca256e9",
    "teamIds": [
      "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
      "58df3b83-0d10-46cc-ac1d-3da5049758d9",
      "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
    ],
    "joinedAt": "2026-08-01T00:00:00.000Z",
    "lastLoginAt": "2026-08-01T15:21:28.317Z",
    "verified": true,
    "privacy": {
      "phoneVisible": false,
      "emailVisible": true,
      "usernameVisible": true,
      "employeeCodeVisible": true
    },
    "email": "admin@qurix.local",
    "username": "admin",
    "employeeCode": "ADMIN-001",
    "roles": [
      {
        "id": "311b5feb-d0ac-4fd4-819d-e62257fb8a8b",
        "key": "ADMIN",
        "name": "Administrator"
      },
      {
        "id": "182a5c5e-45c3-44b8-b692-3f6fe810e61d",
        "key": "SUPER_ADMIN",
        "name": "Super Admin"
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:28.829Z"
}
```

---

### 19. Patch employee privacy — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/employees/3c10609f-0896-4280-bbc5-ee9198bf9ea0/privacy`
- **Expected status:** 200 | 400 | 403
- **Actual status:** 200
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-19`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `78c5bdcb-5a0d-42c6-9516-d495ec6c192c`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "emailVisible": true,
  "phoneVisible": false
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"36a-IBRBzWEiAWC5bkCvBGI3KmkCiu8"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "displayName": "Admin User",
    "firstName": "Admin",
    "lastName": "User",
    "avatarUrl": null,
    "designation": "Administrator",
    "status": "ACTIVE",
    "serviceLineId": "bdbfd926-eba6-40c2-bd7f-cf0e2ca256e9",
    "teamIds": [
      "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
      "58df3b83-0d10-46cc-ac1d-3da5049758d9",
      "705763b1-985d-4b73-b7eb-5f88ee6f4c5d"
    ],
    "joinedAt": "2026-08-01T00:00:00.000Z",
    "lastLoginAt": "2026-08-01T15:21:28.317Z",
    "verified": true,
    "privacy": {
      "phoneVisible": false,
      "emailVisible": true,
      "usernameVisible": true,
      "employeeCodeVisible": true
    },
    "email": "admin@qurix.local",
    "username": "admin",
    "employeeCode": "ADMIN-001",
    "roles": [
      {
        "id": "311b5feb-d0ac-4fd4-819d-e62257fb8a8b",
        "key": "ADMIN",
        "name": "Administrator"
      },
      {
        "id": "182a5c5e-45c3-44b8-b692-3f6fe810e61d",
        "key": "SUPER_ADMIN",
        "name": "Super Admin"
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:28.861Z"
}
```

---

### 20. List service lines — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/service-lines?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-20`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"515-61vXv+eOTIvJbi32iCSH97OHIro"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
        "name": "E2E Line Updated msaihrks",
        "code": "E2EMSAIHRKS",
        "iconKey": null,
        "status": "ACTIVE",
        "operationManagerId": null,
        "deputyManagerId": null,
        "version": "2",
        "createdAt": "2026-08-01T15:14:00.155Z",
        "updatedAt": "2026-08-01T15:14:00.166Z"
      },
      {
        "id": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "name": "Full-Stack Development",
        "code": "FSD",
        "iconKey": null,
        "status": "ACTIVE",
        "operationManagerId": "0584de90-6a3b-46b3-a177-a755538f31b8",
        "deputyManagerId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "version": "1",
        "createdAt": "2026-08-01T10:17:13.189Z",
        "updatedAt": "2026-08-01T15:21:25.206Z"
      },
      {
        "id": "bdbfd926-eba6-40c2-bd7f-cf0e2ca256e9",
        "name": "UI/UX Design",
        "code": "UI-UX",
        "iconKey": null,
        "status": "ACTIVE",
        "operationManagerId": "716c7d2b-13d1-47c6-b399-0813881a025b",
        "deputyManagerId": null,
        "version": "1",
        "createdAt": "2026-08-01T10:17:13.189Z",
        "updatedAt": "2026-08-01T15:21:25.204Z"
      },
      {
        "id": "f7ace582-a172-4d83-a579-ac864e089827",
        "name": "Quality Assurance",
        "code": "QA",
        "iconKey": null,
        "status": "ACTIVE",
        "operationManagerId": "eb0efa9b-9765-4715-a4db-66c7b55e222b",
        "deputyManagerId": null,
        "version": "1",
        "createdAt": "2026-08-01T12:36:37.525Z",
        "updatedAt": "2026-08-01T15:21:25.208Z"
      }
    ],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:28.886Z"
}
```

---

### 21. Create service line — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/service-lines`
- **Expected status:** 200 | 201 | 403
- **Actual status:** 201
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-21`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `a1742515-0c02-40b2-a1a4-9b04a091811e`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "name": "E2E Line msairad0",
  "code": "E2EMSAIRAD0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"14a-TFQJhlyKjGAPjt/ZtAz9cpbSnQQ"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "9df24165-0dac-49f8-a806-7a319e805983",
    "name": "E2E Line msairad0",
    "code": "E2EMSAIRAD0",
    "iconKey": null,
    "status": "ACTIVE",
    "operationManagerId": null,
    "deputyManagerId": null,
    "version": "1",
    "createdAt": "2026-08-01T15:21:28.914Z",
    "updatedAt": "2026-08-01T15:21:28.914Z"
  },
  "timestamp": "2026-08-01T15:21:28.917Z"
}
```

---

### 22. Patch service line — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/service-lines/9df24165-0dac-49f8-a806-7a319e805983`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-22`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `be47a166-df4d-4b09-9d1d-c8d9237205b1`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "name": "E2E Line Updated msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"152-k+Io5v215ljP7eKs70brMRXfh5U"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "9df24165-0dac-49f8-a806-7a319e805983",
    "name": "E2E Line Updated msairad0",
    "code": "E2EMSAIRAD0",
    "iconKey": null,
    "status": "ACTIVE",
    "operationManagerId": null,
    "deputyManagerId": null,
    "version": "2",
    "createdAt": "2026-08-01T15:21:28.914Z",
    "updatedAt": "2026-08-01T15:21:28.944Z"
  },
  "timestamp": "2026-08-01T15:21:28.948Z"
}
```

---

### 23. List teams — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/teams?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-23`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:28 GMT`
- `etag`: `W/"a8d-JJ9dYVPuSaXOLGCTTg+CPHbFwkw"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
        "name": "E2E Team Updated msaihrks",
        "code": "TMSAIHRKS",
        "iconKey": null,
        "status": "ACTIVE",
        "leaderId": null,
        "coLeaderId": null,
        "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
        "serviceLine": {
          "id": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
          "name": "E2E Line Updated msaihrks",
          "code": "E2EMSAIHRKS"
        },
        "version": "2",
        "createdAt": "2026-08-01T15:14:00.182Z",
        "updatedAt": "2026-08-01T15:14:00.193Z"
      },
      {
        "id": "587c691a-74fb-4d26-9d34-7bd8e8ada588",
        "name": "QA Core",
        "code": "QA-CORE",
        "iconKey": null,
        "status": "ACTIVE",
        "leaderId": "eb0efa9b-9765-4715-a4db-66c7b55e222b",
        "coLeaderId": null,
        "serviceLineId": "f7ace582-a172-4d83-a579-ac864e089827",
        "serviceLine": {
          "id": "f7ace582-a172-4d83-a579-ac864e089827",
          "name": "Quality Assurance",
          "code": "QA"
        },
        "version": "1",
        "createdAt": "2026-08-01T12:36:37.592Z",
        "updatedAt": "2026-08-01T15:21:24.887Z"
      },
      {
        "id": "58df3b83-0d10-46cc-ac1d-3da5049758d9",
        "name": "FSD Core",
        "code": "FSD-CORE",
        "iconKey": null,
        "status": "ACTIVE",
        "leaderId": "0584de90-6a3b-46b3-a177-a755538f31b8",
        "coLeaderId": null,
        "serviceLineId": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "serviceLine": {
          "id": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
          "name": "Full-Stack Development",
          "code": "FSD"
        },
        "version": "1",
        "createdAt": "2026-08-01T10:17:13.232Z",
        "updatedAt": "2026-08-01T15:21:24.882Z"
      },
      {
        "id": "705763b1-985d-4b73-b7eb-5f88ee6f4c5d",
        "name": "API Squad",
        "code": "FSD-API",
        "iconKey": null,
        "status": "ACTIVE",
        "leaderId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "coLeaderId": null,
        "serviceLineId": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "serviceLine": {
          "id": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
          "name": "Full-Stack Development",
          "code": "FSD"
        },
        "version": "1",
        "createdAt": "2026-08-01T10:17:13.232Z",
        "updatedAt": "2026-08-01T15:21:24.886Z"
      },
      {
        "id": "820bfec2-daf5-4983-a93a-6352a50073f0",
        "name": "Future Stack",
        "code": "FSD-FUTURE",
        "iconKey": null,
        "status": "ACTIVE",
        "leaderId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "coLeaderId": null,
        "serviceLineId": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "serviceLine": {
          "id": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
          "name": "Full-Stack Development",
          "code": "FSD"
        },
        "version": "1",
        "createdAt": "2026-08-01T10:17:13.232Z",
        "updatedAt": "2026-08-01T15:21:24.884Z"
      },
      {
        "id": "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
        "name": "UI Core",
        "code": "UI-CORE",
        "iconKey": null,
        "status": "ACTIVE",
        "leaderId": "716c7d2b-13d1-47c6-b399-0813881a025b",
        "coLeaderId": null,
        "serviceLineId": "bdbfd926-eba6-40c2-bd7f-cf0e2ca256e9",
        "serviceLine": {
          "id": "bdbfd926-eba6-40c2-bd7f-cf0e2ca256e9",
          "name": "UI/UX Design",
          "code": "UI-UX"
        },
        "version": "1",
        "createdAt": "2026-08-01T10:17:13.232Z",
        "updatedAt": "2026-08-01T15:21:24.879Z"
      }
    ],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:28.974Z"
}
```

---

### 24. Create team — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/teams`
- **Expected status:** 200 | 201 | 400 | 403
- **Actual status:** 201
- **Duration:** 15ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-24`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `131dd40a-898f-4eec-9cc9-d371bacfcb8c`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "serviceLineId": "9df24165-0dac-49f8-a806-7a319e805983",
  "name": "E2E Team msairad0",
  "code": "TMSAIRAD0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"170-KjCMOfrVekvlzCyhLK1/6fcOJqY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f",
    "name": "E2E Team msairad0",
    "code": "TMSAIRAD0",
    "iconKey": null,
    "status": "ACTIVE",
    "leaderId": null,
    "coLeaderId": null,
    "serviceLineId": "9df24165-0dac-49f8-a806-7a319e805983",
    "version": "1",
    "createdAt": "2026-08-01T15:21:29.002Z",
    "updatedAt": "2026-08-01T15:21:29.002Z"
  },
  "timestamp": "2026-08-01T15:21:29.010Z"
}
```

---

### 25. Patch team — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 9ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-25`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `2255bee1-63fa-4739-841f-dc4d8f13cb99`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "name": "E2E Team Updated msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"178-0HdWGTqNVWGrOlHzeZj4iqarXAg"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f",
    "name": "E2E Team Updated msairad0",
    "code": "TMSAIRAD0",
    "iconKey": null,
    "status": "ACTIVE",
    "leaderId": null,
    "coLeaderId": null,
    "serviceLineId": "9df24165-0dac-49f8-a806-7a319e805983",
    "version": "2",
    "createdAt": "2026-08-01T15:21:29.002Z",
    "updatedAt": "2026-08-01T15:21:29.036Z"
  },
  "timestamp": "2026-08-01T15:21:29.039Z"
}
```

---

### 26. List team members — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 5ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-26`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"4b-/yekiv+VvsRHpqc+q5mPSvnQW5g"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": []
  },
  "timestamp": "2026-08-01T15:21:29.065Z"
}
```

---

### 27. Add team member — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members`
- **Expected status:** 200 | 201 | 409 | 400
- **Actual status:** 200
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-27`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `448ae817-4691-47bd-aad5-9df7c94ae4d3`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
  "role": "MEMBER"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"1b4-tZkVj95sEkik98K4dsGvDb39gyE"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "teamId": "7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f",
        "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "membershipRole": "MEMBER",
        "joinedAt": "2026-08-01T15:21:29.093Z",
        "leftAt": null,
        "employee": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "designation": "Senior Frontend Engineer",
          "status": "ACTIVE",
          "avatarUrl": null
        }
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:29.098Z"
}
```

---

### 28. Patch team member role — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members/b03df988-bc8a-4834-94a7-5046798932ea`
- **Expected status:** 200 | 404 | 400 | 409
- **Actual status:** 409
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-28`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `6f035cd7-2032-4875-9a5d-9df2c0efdb59`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "role": "MEMBER"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"150-jULrMAH5OjyYLqSdayalGYbeRjc"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "statusCode": 409,
  "code": "CONFLICT",
  "message": "A record with that value already exists.",
  "error": "Conflict",
  "details": {
    "fields": [
      "aggregate_type",
      "aggregate_id",
      "aggregate_ver",
      "event_type"
    ]
  },
  "path": "/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members/b03df988-bc8a-4834-94a7-5046798932ea",
  "timestamp": "2026-08-01T15:21:29.127Z"
}
```

---

### 29. Remove team member — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members/b03df988-bc8a-4834-94a7-5046798932ea`
- **Expected status:** 200 | 204 | 404 | 409
- **Actual status:** 409
- **Duration:** 7ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-29`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `0c8b077c-0870-4cd3-ad47-d9e2006bbc9f`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"150-Vq2i0PyYj8BDnm2RgXzPlpGeQ9Y"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "statusCode": 409,
  "code": "CONFLICT",
  "message": "A record with that value already exists.",
  "error": "Conflict",
  "details": {
    "fields": [
      "aggregate_type",
      "aggregate_id",
      "aggregate_ver",
      "event_type"
    ]
  },
  "path": "/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f/members/b03df988-bc8a-4834-94a7-5046798932ea",
  "timestamp": "2026-08-01T15:21:29.155Z"
}
```

---

### 30. List projects — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/projects?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 22ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-30`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"18cd-6kuxCgYOqvZBWTYysb0uK9XRXRk"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "orderCode": "FO63URGENT01",
        "clientName": "Initech",
        "profileName": "Initech API",
        "serviceLineId": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "serviceLineName": "Full-Stack Development",
        "teamId": "705763b1-985d-4b73-b7eb-5f88ee6f4c5d",
        "teamName": "API Squad",
        "status": "URGENT",
        "priority": "URGENT",
        "valueAmount": 8800,
        "currency": "USD",
        "startAt": "2026-07-24T15:21:24.917Z",
        "deadlineAt": "2026-08-03T15:21:24.917Z",
        "timeRemainingSeconds": 172795,
        "memberCount": 2,
        "openIssueCount": 2,
        "conversationId": "7e3ac7ee-b846-4365-bc1c-5fe2c71dc889",
        "urgent": true,
        "version": 6
      },
      {
        "id": "877402bb-fb82-41d6-9d36-837ef72396c8",
        "orderCode": "FO85DELIVERED",
        "clientName": "Umbrella",
        "profileName": "Umbrella Portal",
        "serviceLineId": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "serviceLineName": "Full-Stack Development",
        "teamId": "58df3b83-0d10-46cc-ac1d-3da5049758d9",
        "teamName": "FSD Core",
        "status": "DELIVERED",
        "priority": "NORMAL",
        "valueAmount": 9200,
        "currency": "USD",
        "startAt": "2026-06-17T15:21:24.917Z",
        "deadlineAt": "2026-07-22T15:21:24.917Z",
        "timeRemainingSeconds": -864005,
        "memberCount": 3,
        "openIssueCount": 0,
        "conversationId": "e6e0ff9f-f7d5-434b-93fd-75bae3fc91c7",
        "urgent": false,
        "version": 1
      },
      {
        "id": "283f14e0-3dae-4e82-875a-58e96b69863e",
        "orderCode": "FO97REFUND001",
        "clientName": "Stark",
        "profileName": "Stark Mobile",
        "serviceLineId": "724000a3-c004-4f5b-97d1-38b1096f9ff0",
        "serviceLineName": "Full-Stack Development",
        "teamId": "820bfec2-daf5-4983-a93a-6352a50073f0",
        "teamName": "Future Stack",
        "status": "ARCHIVED",
        "priority": "NORMAL",
        "valueAmount": 5400,
        "currency": "USD",
        "startAt": "2026-07-07T15:21:24.917Z",
        "deadlineAt": "2026-07-27T15:21:24.917Z",
        "timeRemainingSeconds": -432005,
        "memberCount": 2,
        "openIssueCount": 0,
        "conversationId": "3559e0cf-cb9f-4d20-93b6-4639be256754",
        "urgent": false,
        "version": 1
      },
      {
        "id": "60671064-4d89-4654-bbc5-718fb4ba67a7",
        "orderCode": "FO96CANCELED1",
        "clientName": "Soylent",
        "profileName": "Soylent Storefront",
        "serviceLineId": "bdbfd926-eba6-40c2-bd7f-cf0e2ca256e9",
        "serviceLineName": "UI/UX Design",
        "teamId": "8e665b0b-8391-46f6-99ed-6d25a9be83c3",
        "teamName": "UI Core",
        "status": "ARCHIVED",
        "priority": "NORMAL",
        "valueAmount": 3100,
        "currency": "USD",
        "startAt": "2026-07-12T15:21:24.917Z",
        "deadlineAt": "2026-07-31T15:21:24.917Z",
        "timeRemainingSeconds": -86405,
        "memberCount": 2,
        "openIssueCount": 0,
        "conversationId": "13eeb0b1-ebf6-47bb-ac60-6f2b0cdf9371",
        "urgent": false,
        "version": 1
      },
      {
        "id": "6a3848d2-56c6-4040-9452-3af9aa3c1aec",
        "orderCode": "E2E-msaij6dk",
        "clientName": "E2E Client Updated msaij6dk",
        "profileName": "endpoint_test",
        "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
        "serviceLineName": "E2E Line Updated msaihrks",
        "teamId": "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
        "teamName": "E2E Team Updated msaihrks",
        "status": "PLANNING",
        "priority": "NORMAL",
        "valueAmount": 100,
        "currency": "USD",
        "startAt": "2026-08-01T15:15:07.388Z",
        "deadlineAt": "2026-08-08T15:15:07.388Z",
        "timeRemainingSeconds": 604418,
        "memberCount": 1,
        "openIssue
… truncated (4587 more chars)
```

---

### 31. Create project — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/projects`
- **Expected status:** 200 | 201 | 400 | 403 | 409
- **Actual status:** 201
- **Duration:** 25ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-31`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `8e9ca1ca-fff0-4008-9910-2e07f88daa14`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "clientName": "E2E Client msairad0",
  "orderCode": "E2E-msairad0",
  "profileName": "endpoint_test",
  "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
  "teamId": "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
  "startAt": "2026-08-01T15:21:29.219Z",
  "deadlineAt": "2026-08-08T15:21:29.220Z",
  "valueAmount": 100,
  "members": [
    {
      "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "role": "OWNER"
    }
  ]
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"285-qhl4wSXnBm5zD3k4yIRYAVxi+ZE"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "orderCode": "E2E-msairad0",
    "clientName": "E2E Client msairad0",
    "profileName": "endpoint_test",
    "serviceLineId": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
    "teamId": "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
    "status": "PLANNING",
    "priority": "NORMAL",
    "valueAmount": 100,
    "currency": "USD",
    "startAt": "2026-08-01T15:21:29.219Z",
    "deadlineAt": "2026-08-08T15:21:29.220Z",
    "timeRemainingSeconds": 604799,
    "conversationId": "a384b6d7-1bb3-464e-9185-08d554c539c0",
    "memberIds": [
      "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
    ],
    "version": 1,
    "createdAt": "2026-08-01T15:21:29.230Z"
  },
  "timestamp": "2026-08-01T15:21:29.243Z"
}
```

---

### 32. Get project — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-32`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"434-/0evvUzxONY18m6mmkZ2RmfUe18"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "orderCode": "E2E-msairad0",
    "clientName": "E2E Client msairad0",
    "profileName": "endpoint_test",
    "serviceLine": {
      "id": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
      "name": "E2E Line Updated msaihrks",
      "code": "E2EMSAIHRKS"
    },
    "team": {
      "id": "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
      "name": "E2E Team Updated msaihrks",
      "code": "TMSAIHRKS"
    },
    "status": "PLANNING",
    "priority": "NORMAL",
    "valueAmount": 100,
    "currency": "USD",
    "startAt": "2026-08-01T15:21:29.219Z",
    "deadlineAt": "2026-08-08T15:21:29.220Z",
    "deliveredAt": null,
    "timeRemainingSeconds": 604799,
    "createdAt": "2026-08-01T15:21:29.230Z",
    "createdBy": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User"
    },
    "conversationId": "a384b6d7-1bb3-464e-9185-08d554c539c0",
    "members": [
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "displayName": "Admin User",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "role": "OWNER",
        "assignedAt": "2026-08-01T15:21:29.233Z"
      }
    ],
    "attachments": {
      "files": [],
      "media": [],
      "links": []
    },
    "openIssueCount": 0,
    "version": 1
  },
  "timestamp": "2026-08-01T15:21:29.274Z"
}
```

---

### 33. Patch project — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8`
- **Expected status:** 200 | 400 | 409
- **Actual status:** 200
- **Duration:** 17ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-33`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `c7535382-2b42-4064-8126-f83ec668bb5a`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "clientName": "E2E Client Updated msairad0",
  "version": 1
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"43c-WaApWR1/LfWF0knkC/oJL4Ya5H4"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "orderCode": "E2E-msairad0",
    "clientName": "E2E Client Updated msairad0",
    "profileName": "endpoint_test",
    "serviceLine": {
      "id": "1ec8a706-6b4b-400c-9c87-6a009bdfb5ee",
      "name": "E2E Line Updated msaihrks",
      "code": "E2EMSAIHRKS"
    },
    "team": {
      "id": "52d6f6d0-dad1-4a54-b315-b19b9d6ff327",
      "name": "E2E Team Updated msaihrks",
      "code": "TMSAIHRKS"
    },
    "status": "PLANNING",
    "priority": "NORMAL",
    "valueAmount": 100,
    "currency": "USD",
    "startAt": "2026-08-01T15:21:29.219Z",
    "deadlineAt": "2026-08-08T15:21:29.220Z",
    "deliveredAt": null,
    "timeRemainingSeconds": 604799,
    "createdAt": "2026-08-01T15:21:29.230Z",
    "createdBy": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User"
    },
    "conversationId": "a384b6d7-1bb3-464e-9185-08d554c539c0",
    "members": [
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "displayName": "Admin User",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "role": "OWNER",
        "assignedAt": "2026-08-01T15:21:29.233Z"
      }
    ],
    "attachments": {
      "files": [],
      "media": [],
      "links": []
    },
    "openIssueCount": 0,
    "version": 2
  },
  "timestamp": "2026-08-01T15:21:29.311Z"
}
```

---

### 34. List project members — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 5ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-34`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"145-nBmx6+xa4tshx+nPO0lG5I8II2k"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "displayName": "Admin User",
        "username": "admin",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "role": "OWNER",
        "assignedAt": "2026-08-01T15:21:29.233Z",
        "assignedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:29.336Z"
}
```

---

### 35. Project activities — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/activities?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 5ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-35`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"2ab-flYDuwqPUaE+R8pFgD2H7ocbMa4"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "1b09ef99-ca1d-4f46-9db0-17fc2486efd4",
        "activityType": "updated",
        "actor": {
          "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
          "displayName": "Admin User"
        },
        "payload": {
          "fields": [
            "clientName",
            "profileName",
            "serviceLineId",
            "teamId",
            "startAt",
            "deadlineAt",
            "valueAmount",
            "currency",
            "priority"
          ]
        },
        "createdAt": "2026-08-01T15:21:29.302Z"
      },
      {
        "id": "c434b53a-aef4-4388-bc2c-130dd806cb79",
        "activityType": "created",
        "actor": {
          "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
          "displayName": "Admin User"
        },
        "payload": {
          "status": "PLANNING",
          "orderCode": "E2E-msairad0"
        },
        "createdAt": "2026-08-01T15:21:29.238Z"
      }
    ],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:29.362Z"
}
```

---

### 36. Mark project urgent — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/mark-urgent`
- **Expected status:** 200 | 201 | 400 | 409 | 403
- **Actual status:** 400
- **Duration:** 4ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-36`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `29044f92-ee20-49f4-a2b8-c4933e3d225a`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "note": "endpoint test msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"183-HdPkeGdoBobFcnCagkvwIq0XeaM"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "statusCode": 400,
  "code": "VALIDATION_FAILED",
  "message": [
    "property note should not exist",
    "explanation must be longer than or equal to 10 characters",
    "explanation must be a string",
    "version must not be less than 1",
    "version must be an integer number"
  ],
  "error": "Bad Request",
  "path": "/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/mark-urgent",
  "timestamp": "2026-08-01T15:21:29.386Z"
}
```

---

### 37. Add project link — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/links`
- **Expected status:** 200 | 201 | 400 | 403
- **Actual status:** 200
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-37`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `89492bd0-d296-4f54-a5fe-3598e07a9467`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "label": "E2E Link",
  "url": "https://example.com/e2e",
  "kind": "EXTERNAL"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"d6-peo7d1Ke7pNhjni60Vwyl3FKfPk"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "56aad6a1-b773-43aa-8cd9-740025a36194",
    "label": "E2E Link",
    "url": "https://example.com/e2e",
    "kind": "EXTERNAL",
    "addedAt": "2026-08-01T15:21:29.420Z"
  },
  "timestamp": "2026-08-01T15:21:29.420Z"
}
```

---

### 38. Delete project link — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/links/56aad6a1-b773-43aa-8cd9-740025a36194`
- **Expected status:** 200 | 204
- **Actual status:** 200
- **Duration:** 18ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-38`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `12c5cf3d-a4a6-413a-998e-2969a22ff8fd`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"7b-oHaFoDQ0fcxg5ztbBCtlUH3oSkw"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "56aad6a1-b773-43aa-8cd9-740025a36194",
    "removed": true
  },
  "timestamp": "2026-08-01T15:21:29.459Z"
}
```

---

### 39. Add project member — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members`
- **Expected status:** 200 | 201 | 409 | 400 | 403
- **Actual status:** 200
- **Duration:** 16ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-39`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `2ccb5df7-7d7b-4e5b-9c83-e915d06e16f1`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
  "role": "MEMBER"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"df-t9QdF9bnOaC4nFC/1qCCwmwSlQI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
    "role": "MEMBER",
    "assignedAt": "2026-08-01T15:21:29.487Z"
  },
  "timestamp": "2026-08-01T15:21:29.495Z"
}
```

---

### 40. Patch project member — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members/b03df988-bc8a-4834-94a7-5046798932ea`
- **Expected status:** 200 | 404 | 400 | 403
- **Actual status:** 200
- **Duration:** 13ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-40`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `75fb186c-2793-40f0-b732-0183ae77eae3`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "role": "MEMBER"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"b7-x3YrB1GgFKlvHVB1/TK/SWB0r2A"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
    "role": "MEMBER"
  },
  "timestamp": "2026-08-01T15:21:29.529Z"
}
```

---

### 41. Remove project member — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/members/b03df988-bc8a-4834-94a7-5046798932ea`
- **Expected status:** 200 | 204 | 404 | 403
- **Actual status:** 200
- **Duration:** 13ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-41`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `f7f58f69-5d1a-4b36-9cf8-07b94214eb99`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"b6-5A56pLRpvBLIEOj06lRGsWeoYAE"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
    "removed": true
  },
  "timestamp": "2026-08-01T15:21:29.563Z"
}
```

---

### 42. List project issues — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/issues?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-42`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"6d-pvDOA1G2NQYvzcyL5hA3OP3xbh4"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:29.590Z"
}
```

---

### 43. Create issue — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/projects/c1642ecb-940e-4adf-b1fa-df5be12629e8/issues`
- **Expected status:** 200 | 201 | 403
- **Actual status:** 201
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-43`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `91cafec5-716a-4a5d-bba4-cf82f714d7b0`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "title": "E2E Issue msairad0",
  "explanation": "Created by endpoint-test.mjs automated run.",
  "links": [
    {
      "label": "Ref",
      "url": "https://example.com/ref"
    }
  ]
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"192-WDmDTvGV4aGu2Q8CPymGhO6L5zA"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3961c3c4-a3b1-49cc-9e09-1044e1acc1de",
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "title": "E2E Issue msairad0",
    "explanation": "Created by endpoint-test.mjs automated run.",
    "status": "PENDING",
    "sequenceNo": 1,
    "assignedTo": null,
    "version": 1,
    "createdAt": "2026-08-01T15:21:29.618Z",
    "linkIds": [
      "f4d47527-0cc8-490e-984d-68e391f2f044"
    ]
  },
  "timestamp": "2026-08-01T15:21:29.623Z"
}
```

---

### 44. Get issue — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-44`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"29c-pg5ezerE/Kd0bejmdgFrcWMCw2s"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3961c3c4-a3b1-49cc-9e09-1044e1acc1de",
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "title": "E2E Issue msairad0",
    "explanation": "Created by endpoint-test.mjs automated run.",
    "status": "PENDING",
    "sequenceNo": 1,
    "createdBy": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User"
    },
    "assignedTo": null,
    "attachments": [],
    "links": [
      {
        "id": "f4d47527-0cc8-490e-984d-68e391f2f044",
        "label": "Ref",
        "url": "https://example.com/ref",
        "addedAt": "2026-08-01T15:21:29.619Z"
      }
    ],
    "statusHistory": [],
    "resolvedAt": null,
    "createdAt": "2026-08-01T15:21:29.618Z",
    "updatedAt": "2026-08-01T15:21:29.618Z",
    "version": 1
  },
  "timestamp": "2026-08-01T15:21:29.652Z"
}
```

---

### 45. Patch issue — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 16ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-45`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `9feba152-c7f2-466b-bc2e-e21eabc5cde5`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "title": "E2E Issue Updated msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"2a4-hXyHscLoWM9snB26Cuz5ZYzJGMk"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3961c3c4-a3b1-49cc-9e09-1044e1acc1de",
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "title": "E2E Issue Updated msairad0",
    "explanation": "Created by endpoint-test.mjs automated run.",
    "status": "PENDING",
    "sequenceNo": 1,
    "createdBy": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User"
    },
    "assignedTo": null,
    "attachments": [],
    "links": [
      {
        "id": "f4d47527-0cc8-490e-984d-68e391f2f044",
        "label": "Ref",
        "url": "https://example.com/ref",
        "addedAt": "2026-08-01T15:21:29.619Z"
      }
    ],
    "statusHistory": [],
    "resolvedAt": null,
    "createdAt": "2026-08-01T15:21:29.618Z",
    "updatedAt": "2026-08-01T15:21:29.681Z",
    "version": 2
  },
  "timestamp": "2026-08-01T15:21:29.689Z"
}
```

---

### 46. Patch issue status — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/status`
- **Expected status:** 200 | 400 | 409 | 403
- **Actual status:** 200
- **Duration:** 16ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-46`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `9797bee3-8984-46f5-aa40-7747979f618f`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "status": "WIP"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"99-rByziCIMalrtCbF5MpEWE+JsVE0"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "3961c3c4-a3b1-49cc-9e09-1044e1acc1de",
    "status": "WIP",
    "resolvedAt": null,
    "version": 3
  },
  "timestamp": "2026-08-01T15:21:29.723Z"
}
```

---

### 47. Add issue link — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/links`
- **Expected status:** 200 | 201 | 403
- **Actual status:** 200
- **Duration:** 9ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-47`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `6778a7a4-82c5-4c79-b706-1189e16f1d23`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "label": "E2E",
  "url": "https://example.com/issue-link"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"c6-yduHJjwIvTYKpNh9dH55e+CcPD0"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "e1de5c7b-4160-4a77-a730-6895256d160c",
    "label": "E2E",
    "url": "https://example.com/issue-link",
    "addedAt": "2026-08-01T15:21:29.753Z"
  },
  "timestamp": "2026-08-01T15:21:29.753Z"
}
```

---

### 48. Add issue comment — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/comments`
- **Expected status:** 200 | 201 | 400 | 403
- **Actual status:** 201
- **Duration:** 9ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-48`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `7f7ac28a-b251-4324-a046-3b9827bd373f`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "body": "E2E comment msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"12f-keOrnEjZ+zqlCKqhn6SqKto+q0c"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "75cef9f2-c546-47cc-97d7-f329fff85e0c",
    "issueId": "3961c3c4-a3b1-49cc-9e09-1044e1acc1de",
    "body": "E2E comment msairad0",
    "author": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "admin"
    },
    "createdAt": "2026-08-01T15:21:29.779Z"
  },
  "timestamp": "2026-08-01T15:21:29.781Z"
}
```

---

### 49. List issue comments — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/issues/3961c3c4-a3b1-49cc-9e09-1044e1acc1de/comments`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-49`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"144-pUAfPlj0lkQWbr7Gw9YJphn2IQ4"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "75cef9f2-c546-47cc-97d7-f329fff85e0c",
        "body": "E2E comment msairad0",
        "author": {
          "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
          "displayName": "Admin User",
          "username": "admin"
        },
        "createdAt": "2026-08-01T15:21:29.779Z"
      }
    ],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:29.807Z"
}
```

---

### 50. List conversations — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/conversations?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 12ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-50`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"c45-9tIaTFwWuL06iQhsaJM2y4OACcI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "0e68b2a9-7358-4ff2-88b8-e68e4bdc06d2",
        "type": "GROUP",
        "name": "E2E-msaim6we · E2E Client msaim6we",
        "projectId": "ec21e249-a7d7-4f61-8ed9-e57997a36836",
        "memberCount": 1,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "13eeb0b1-ebf6-47bb-ac60-6f2b0cdf9371",
        "type": "GROUP",
        "name": "FO96CANCELED1 · Soylent",
        "projectId": "60671064-4d89-4654-bbc5-718fb4ba67a7",
        "memberCount": 2,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "237c22b5-84ee-4a75-8b53-0f90a45e531e",
        "type": "GROUP",
        "name": "E2E-msaincee · E2E Client msaincee",
        "projectId": "a7a43e39-51f7-454a-b4db-a7808ef94d7c",
        "memberCount": 1,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "9a368a94-1e8c-4e2a-84a3-1004973bea14",
        "type": "GROUP",
        "name": "E2E-msaij6dk · E2E Client msaij6dk",
        "projectId": "6a3848d2-56c6-4040-9452-3af9aa3c1aec",
        "memberCount": 1,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "a384b6d7-1bb3-464e-9185-08d554c539c0",
        "type": "GROUP",
        "name": "E2E-msairad0 · E2E Client msairad0",
        "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
        "memberCount": 1,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "a86d952c-d3f6-4982-b63b-eebd839b95a3",
        "type": "GROUP",
        "name": "FO52AE11B902 · Globex",
        "projectId": "4b8551a0-eb48-4c22-a0a2-9db07b873dc1",
        "memberCount": 3,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "cb8e0a3c-9fd5-4af3-b549-b45d41e9a5ca",
        "type": "GROUP",
        "name": "FO41BDCFC4F84 · alexjlouis",
        "projectId": "6425a677-c1cf-47c8-b1af-46aa4a22bf71",
        "memberCount": 2,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "e6e0ff9f-f7d5-434b-93fd-75bae3fc91c7",
        "type": "GROUP",
        "name": "FO85DELIVERED · Umbrella",
        "projectId": "877402bb-fb82-41d6-9d36-837ef72396c8",
        "memberCount": 3,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "e98beb51-2d6e-4985-b908-7f015fe0cb77",
        "type": "GROUP",
        "name": "FO98QAREGRESS · Wayne",
        "projectId": "fa41d51a-058d-4348-aced-d0e1b00b060f",
        "memberCount": 4,
        "latestMessage": null,
        "unreadCount": 0,
        "isFavorite": false,
        "mutedUntil": null,
        "archivedAt": null,
        "lastMessageAt": null
      },
      {
        "id": "7e3ac7ee-b846-4365-bc1c-5fe2c71dc889",
        "type": "GROUP",
        "name": "FO63URGENT01 · Initech",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "memberCount": 2,
        "latestMessage": {
          "id": "829ab9c0-ae4a-499a-9850-5fef91bce681",
          "senderDisplayNam
… truncated (467 more chars)
```

---

### 51. Open direct conversation — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/conversations/direct`
- **Expected status:** 200 | 201
- **Actual status:** 200
- **Duration:** 12ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-51`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `9c8eac7b-213b-4955-9906-21660697d950`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "participantId": "b03df988-bc8a-4834-94a7-5046798932ea"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"32c-kxRz4HsvkZX7gxS35qo1+bEOY/I"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "b5f9980b-b34f-41f6-80d3-1a455545610e",
    "type": "DIRECT",
    "name": "Alex Chen",
    "projectId": null,
    "project": null,
    "createdBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "createdAt": "2026-08-01T15:14:00.478Z",
    "members": [
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "role": "OWNER",
        "displayName": "Admin User",
        "username": "admin",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:14:00.480Z"
      },
      {
        "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "role": "MEMBER",
        "displayName": "Alex Chen",
        "username": "alex_chen",
        "employeeCode": "16058",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:14:00.480Z"
      }
    ],
    "preferences": {
      "isFavorite": false,
      "mutedUntil": null,
      "archivedAt": null,
      "lastReadSeq": 3,
      "clearedBeforeSeq": 0
    },
    "myRole": "OWNER",
    "created": false
  },
  "timestamp": "2026-08-01T15:21:29.869Z"
}
```

---

### 52. Create group conversation — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/conversations`
- **Expected status:** 200 | 201 | 400
- **Actual status:** 201
- **Duration:** 17ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-52`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `bc8ca38e-4355-4aaa-9ed4-9118eb2a2cfd`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "type": "GROUP",
  "name": "E2E Group msairad0",
  "participantIds": [
    "b03df988-bc8a-4834-94a7-5046798932ea"
  ]
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"324-8uq79cIFk0ODFrv/E5NqNMzJtYI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "d1d4fe81-7b58-43ed-8639-4c337ed5f6a2",
    "type": "GROUP",
    "name": "E2E Group msairad0",
    "projectId": null,
    "project": null,
    "createdBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "createdAt": "2026-08-01T15:21:29.897Z",
    "members": [
      {
        "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "role": "MEMBER",
        "displayName": "Alex Chen",
        "username": "alex_chen",
        "employeeCode": "16058",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:21:29.899Z"
      },
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "role": "OWNER",
        "displayName": "Admin User",
        "username": "admin",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:21:29.900Z"
      }
    ],
    "preferences": {
      "isFavorite": false,
      "mutedUntil": null,
      "archivedAt": null,
      "lastReadSeq": 0,
      "clearedBeforeSeq": 0
    },
    "myRole": "OWNER"
  },
  "timestamp": "2026-08-01T15:21:29.906Z"
}
```

---

### 53. Get conversation — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 5ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-53`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"324-Y5frFW+emu3GpmZ1OQIHaSmrjwI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "d1d4fe81-7b58-43ed-8639-4c337ed5f6a2",
    "type": "GROUP",
    "name": "E2E Group msairad0",
    "projectId": null,
    "project": null,
    "createdBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "createdAt": "2026-08-01T15:21:29.897Z",
    "members": [
      {
        "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "role": "MEMBER",
        "displayName": "Alex Chen",
        "username": "alex_chen",
        "employeeCode": "16058",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:21:29.899Z"
      },
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "role": "OWNER",
        "displayName": "Admin User",
        "username": "admin",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:21:29.900Z"
      }
    ],
    "preferences": {
      "isFavorite": false,
      "mutedUntil": null,
      "archivedAt": null,
      "lastReadSeq": 0,
      "clearedBeforeSeq": 0
    },
    "myRole": "OWNER"
  },
  "timestamp": "2026-08-01T15:21:29.933Z"
}
```

---

### 54. Patch conversation — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2`
- **Expected status:** 200 | 400 | 403
- **Actual status:** 200
- **Duration:** 13ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-54`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `d2210468-2fdc-425c-bf22-87b4808a88d1`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "name": "E2E Group Updated msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"32c-WjFAZC6xuJ5ECCXooxBAbHOwfAU"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "d1d4fe81-7b58-43ed-8639-4c337ed5f6a2",
    "type": "GROUP",
    "name": "E2E Group Updated msairad0",
    "projectId": null,
    "project": null,
    "createdBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "createdAt": "2026-08-01T15:21:29.897Z",
    "members": [
      {
        "employeeId": "b03df988-bc8a-4834-94a7-5046798932ea",
        "role": "MEMBER",
        "displayName": "Alex Chen",
        "username": "alex_chen",
        "employeeCode": "16058",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:21:29.899Z"
      },
      {
        "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "role": "OWNER",
        "displayName": "Admin User",
        "username": "admin",
        "employeeCode": "ADMIN-001",
        "avatarUrl": null,
        "joinedAt": "2026-08-01T15:21:29.900Z"
      }
    ],
    "preferences": {
      "isFavorite": false,
      "mutedUntil": null,
      "archivedAt": null,
      "lastReadSeq": 0,
      "clearedBeforeSeq": 0
    },
    "myRole": "OWNER"
  },
  "timestamp": "2026-08-01T15:21:29.966Z"
}
```

---

### 55. Patch conversation preferences — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/preferences`
- **Expected status:** 200 | 400
- **Actual status:** 200
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-55`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `640470cc-4b31-4927-9e2d-7a81f173f4bd`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "isFavorite": true,
  "archived": false
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:29 GMT`
- `etag`: `W/"ae-KaavGHYPc84ns1mEVfzw84a5CME"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "conversationId": "d1d4fe81-7b58-43ed-8639-4c337ed5f6a2",
    "isFavorite": true,
    "mutedUntil": null,
    "archivedAt": null
  },
  "timestamp": "2026-08-01T15:21:29.995Z"
}
```

---

### 56. Send conversation message — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/messages`
- **Expected status:** 200 | 201
- **Actual status:** 201
- **Duration:** 18ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-56`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `4912d181-7437-4c88-be01-b103767c4ea0`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "type": "TEXT",
  "body": "Hello from endpoint-test msairad0",
  "idempotencyKey": "d9d77826-1989-4232-acf3-9e2a63ce0e7c"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"a2-b8sK+xTUu+wxIWWI36Gi5CbfPns"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `30`
- `x-ratelimit-remaining`: `29`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "be443ca2-af99-44a5-9360-2c5405bfa8f3",
    "sequenceNo": 1,
    "createdAt": "2026-08-01T15:21:30.026Z"
  },
  "timestamp": "2026-08-01T15:21:30.034Z"
}
```

---

### 57. List conversation messages — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/messages?limit=20`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-57`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"205-Z/6xBDCTEjFqlo13yjOuuArLqKA"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "be443ca2-af99-44a5-9360-2c5405bfa8f3",
        "sequenceNo": 1,
        "sender": {
          "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
          "displayName": "Admin User",
          "username": "admin",
          "avatarUrl": null
        },
        "type": "TEXT",
        "body": "Hello from endpoint-test msairad0",
        "replyTo": null,
        "forwardedFromId": null,
        "attachments": [],
        "reactions": [],
        "pinned": false,
        "pinnedAt": null,
        "editedAt": null,
        "deletedAt": null,
        "createdAt": "2026-08-01T15:21:30.026Z"
      }
    ],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:30.063Z"
}
```

---

### 58. Mark conversation read — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/read`
- **Expected status:** 200 | 201 | 400
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-58`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `bd20746e-fdeb-4840-972f-764827d6ad14`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "lastReadSequenceNo": 1
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"50-HnCR5TgXNas71WmPETfk5O99EHY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "lastReadSeq": 1
  },
  "timestamp": "2026-08-01T15:21:30.091Z"
}
```

---

### 59. Edit message — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-59`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `872f17d7-a857-4883-9cdb-542f477e8f6b`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "body": "Edited endpoint-test msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"1e9-NCQAJ9xLDT5UP68VPLPcEx95Lok"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "be443ca2-af99-44a5-9360-2c5405bfa8f3",
    "sequenceNo": 1,
    "sender": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User",
      "username": "admin",
      "avatarUrl": null
    },
    "type": "TEXT",
    "body": "Edited endpoint-test msairad0",
    "replyTo": null,
    "forwardedFromId": null,
    "attachments": [],
    "reactions": [],
    "pinned": false,
    "pinnedAt": null,
    "editedAt": "2026-08-01T15:21:30.118Z",
    "deletedAt": null,
    "createdAt": "2026-08-01T15:21:30.026Z"
  },
  "timestamp": "2026-08-01T15:21:30.125Z"
}
```

---

### 60. Pin message — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3/pin`
- **Expected status:** 200 | 201 | 409 | 403
- **Actual status:** 200
- **Duration:** 13ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-60`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `f9320482-3fbb-45fe-8375-17a3490e5083`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"1fe-Pv+Wlaj6B43Wwdb3BFS9561G2Ow"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "be443ca2-af99-44a5-9360-2c5405bfa8f3",
    "sequenceNo": 1,
    "sender": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User",
      "username": "admin",
      "avatarUrl": null
    },
    "type": "TEXT",
    "body": "Edited endpoint-test msairad0",
    "replyTo": null,
    "forwardedFromId": null,
    "attachments": [],
    "reactions": [],
    "pinned": true,
    "pinnedAt": "2026-08-01T15:21:30.152Z",
    "editedAt": "2026-08-01T15:21:30.118Z",
    "deletedAt": null,
    "createdAt": "2026-08-01T15:21:30.026Z"
  },
  "timestamp": "2026-08-01T15:21:30.158Z"
}
```

---

### 61. React to message — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3/reactions`
- **Expected status:** 200 | 201 | 400
- **Actual status:** 200
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-61`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `f3bb0952-f229-45f3-8b18-6cde58c7435d`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "emoji": "👍",
  "action": "add"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"d3-9uuvgbpeVYNbieC8SVlu4SG6Q04"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "messageId": "be443ca2-af99-44a5-9360-2c5405bfa8f3",
    "reactions": [
      {
        "emoji": "👍",
        "count": 1,
        "employeeIds": [
          "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
        ]
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:30.188Z"
}
```

---

### 62. Unpin message — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/messages/be443ca2-af99-44a5-9360-2c5405bfa8f3/pin`
- **Expected status:** 200 | 204 | 404
- **Actual status:** 200
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-62`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `7535520d-f3e5-4816-988a-af9cb9588ae7`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"23a-nRVDYu855tv50dkjJkRxCwEtG0A"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "be443ca2-af99-44a5-9360-2c5405bfa8f3",
    "sequenceNo": 1,
    "sender": {
      "id": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
      "displayName": "Admin User",
      "username": "admin",
      "avatarUrl": null
    },
    "type": "TEXT",
    "body": "Edited endpoint-test msairad0",
    "replyTo": null,
    "forwardedFromId": null,
    "attachments": [],
    "reactions": [
      {
        "emoji": "👍",
        "count": 1,
        "employeeIds": [
          "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
        ]
      }
    ],
    "pinned": false,
    "pinnedAt": null,
    "editedAt": "2026-08-01T15:21:30.118Z",
    "deletedAt": null,
    "createdAt": "2026-08-01T15:21:30.026Z"
  },
  "timestamp": "2026-08-01T15:21:30.221Z"
}
```

---

### 63. Send direct message shortcut — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/messages/direct`
- **Expected status:** 200 | 201
- **Actual status:** 201
- **Duration:** 24ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-63`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `7e6b99a1-8bb2-4666-b500-84b075a7f1db`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "participantId": "b03df988-bc8a-4834-94a7-5046798932ea",
  "type": "TEXT",
  "body": "DM from endpoint-test msairad0",
  "idempotencyKey": "0fa3bd06-e96c-429e-95c1-b48a72126c02"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"12d-XrjmDTLqNtHI2WhyuNcboHFb0FY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `30`
- `x-ratelimit-remaining`: `29`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "conversationId": "b5f9980b-b34f-41f6-80d3-1a455545610e",
    "conversationCreated": false,
    "participantId": "b03df988-bc8a-4834-94a7-5046798932ea",
    "id": "9066eef3-3241-4fc0-aaa2-af95492abbc4",
    "sequenceNo": 4,
    "createdAt": "2026-08-01T15:21:30.257Z"
  },
  "timestamp": "2026-08-01T15:21:30.266Z"
}
```

---

### 64. Mark all conversations read — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/conversations/mark-all-read`
- **Expected status:** 200 | 201 | 204
- **Actual status:** 200
- **Duration:** 45ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-64`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `54d2da30-cfcf-4837-9216-3830377c15c5`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"4d-zRO5g2bIchSyYfj7lMEc173PFkc"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "updated": 14
  },
  "timestamp": "2026-08-01T15:21:30.332Z"
}
```

---

### 65. List notifications — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/notifications?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 5ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-65`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"6d-puph86hKzNSUMjVPxVPj++KY1Xs"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [],
    "nextCursor": null,
    "hasMore": false
  },
  "timestamp": "2026-08-01T15:21:30.355Z"
}
```

---

### 66. Notification unread count — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/notifications/unread-count`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 4ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-66`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"50-bH3culm9Q3N4VIJhGInAPK3E9nI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "unreadCount": 0
  },
  "timestamp": "2026-08-01T15:21:30.380Z"
}
```

---

### 67. Get notification preferences — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/notifications/preferences`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 4ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-67`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"c4-fP6IFxMNCismCx5PjEgGOOzx4cY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "desktopEnabled": true,
    "soundEnabled": true,
    "channels": {
      "PRIVATE_CHAT": true,
      "GROUP_CHAT": true,
      "CALLS": true,
      "REPLY_AND_MENTIONS": true
    }
  },
  "timestamp": "2026-08-01T15:21:30.404Z"
}
```

---

### 68. Patch notification preferences — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/notifications/preferences`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 14ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-68`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `607c99c5-fe01-4f01-bbec-d8b95ac8e9af`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "desktopEnabled": true,
  "soundEnabled": true
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"c4-snGPBsFmj5MO1PjnmMi1q3rkfO0"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "desktopEnabled": true,
    "soundEnabled": true,
    "channels": {
      "PRIVATE_CHAT": true,
      "GROUP_CHAT": true,
      "CALLS": true,
      "REPLY_AND_MENTIONS": true
    }
  },
  "timestamp": "2026-08-01T15:21:30.438Z"
}
```

---

### 69. Mark all notifications read — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/notifications/mark-all-read`
- **Expected status:** 200 | 201 | 204
- **Actual status:** 200
- **Duration:** 13ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-69`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `456b85d9-6f56-4eba-bd12-548a18b5fc5b`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:30 GMT`
- `etag`: `W/"5f-pXUBgiWGtdbm1+77TgToU6NewZU"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "markedRead": 0,
    "unreadCount": 0
  },
  "timestamp": "2026-08-01T15:21:30.472Z"
}
```

---

### 70. Call history — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/calls/history?limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 17ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-70`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"c49-UNhBK0IlxlQMybhbSpl/B9eabCE"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "fdabe258-8482-48e5-904a-182936b49971",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:21:33.306Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "f9a4b155-c54c-4c5f-a30b-27efc55e5110",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:21:25.147Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "75cbf942-755a-468f-b630-e49dfd8b1591",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:21:05.452Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "ae797e68-3370-40b5-9201-ba32b142be24",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:20:45.647Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "7d7cee8d-47ed-4b9d-90a7-7b36360d57bb",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:20:25.761Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "b32da24c-80a3-4224-a658-6cc6b8bdb32b",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:20:05.706Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "de059026-4899-46e8-941a-dcaa57bfd888",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:19:45.452Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "e18feae8-3e6e-4500-9685-d1fd7026ff51",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:19:25.110Z",
        "endedAt": null,
        "durationSec": null
      },
      {
        "id": "b0e29f31-9ca5-44e1-be08-6aa9f4700a71",
        "otherParticipant": {
          "id": "b03df988-bc8a-4834-94a7-5046798932ea",
          "displayName": "Alex Chen",
          "username": "alex_chen",
          "avatarUrl": null
        },
        "callType": "VOICE",
        "status": "OUTGOING_ANSWERED",
        "startedAt": "2026-08-01T15:19:04.923Z",
        "endedAt": null,
        "durationSec": null
      },
 
… truncated (594 more chars)
```

---

### 71. Start voice call — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/calls`
- **Expected status:** 200 | 201 | 400 | 403 | 500
- **Actual status:** 500
- **Duration:** 25ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-71`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `4caa57d3-44e9-491b-822f-fdaed22f3b13`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "conversationId": "b5f9980b-b34f-41f6-80d3-1a455545610e",
  "participantIds": [
    "b03df988-bc8a-4834-94a7-5046798932ea"
  ],
  "callType": "VOICE"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"a4-3Ss05+71PY82TfAWAhhm+mK1Nqk"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `10`
- `x-ratelimit-remaining`: `9`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "statusCode": 500,
  "code": "INTERNAL",
  "message": "Internal server error",
  "error": "Internal Server Error",
  "path": "/api/v1/calls",
  "timestamp": "2026-08-01T15:21:35.592Z"
}
```

---

### 72. List calendar events — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/calendar/events?from=2026-07-02T15%3A21%3A35.617Z&to=2026-09-30T15%3A21%3A35.617Z`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 33ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-72`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"3135-qDolCr+APH3j85/W8WB3yeSTtwU"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "deadline:877402bb-fb82-41d6-9d36-837ef72396c8",
        "title": "Project FO85DELIVERED delivery",
        "startsAt": "2026-07-22T15:21:33.063Z",
        "endsAt": null,
        "eventType": "PROJECT_DEADLINE",
        "projectId": "877402bb-fb82-41d6-9d36-837ef72396c8",
        "projectStatus": "DELIVERED"
      },
      {
        "id": "deadline:283f14e0-3dae-4e82-875a-58e96b69863e",
        "title": "Project FO97REFUND001 delivery",
        "startsAt": "2026-07-27T15:21:33.063Z",
        "endsAt": null,
        "eventType": "PROJECT_DEADLINE",
        "projectId": "283f14e0-3dae-4e82-875a-58e96b69863e",
        "projectStatus": "ARCHIVED"
      },
      {
        "id": "deadline:e3a2e7b2-2c7a-42aa-8e58-1955f4b45571",
        "title": "Project FO74LATE9001 delivery",
        "startsAt": "2026-07-29T15:21:33.063Z",
        "endsAt": null,
        "eventType": "PROJECT_DEADLINE",
        "projectId": "e3a2e7b2-2c7a-42aa-8e58-1955f4b45571",
        "projectStatus": "LATE"
      },
      {
        "id": "deadline:60671064-4d89-4654-bbc5-718fb4ba67a7",
        "title": "Project FO96CANCELED1 delivery",
        "startsAt": "2026-07-31T15:21:33.063Z",
        "endsAt": null,
        "eventType": "PROJECT_DEADLINE",
        "projectId": "60671064-4d89-4654-bbc5-718fb4ba67a7",
        "projectStatus": "ARCHIVED"
      },
      {
        "id": "007b9046-53b9-4024-9603-1b53428f229b",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:36:52.572Z",
        "endsAt": "2026-08-02T13:21:52.572Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "1edeeaed-3a0c-4e52-b5eb-b65799e34aa0",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:48:53.709Z",
        "endsAt": "2026-08-02T13:33:53.709Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "129af453-cea7-4a67-9a29-58bdf228161d",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:49:13.556Z",
        "endsAt": "2026-08-02T13:34:13.556Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "df0f5ccf-7459-4972-9bd0-e6d06930629f",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:49:33.653Z",
        "endsAt": "2026-08-02T13:34:33.653Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "ec84dbb8-a3b5-4867-8dcb-c6755f463249",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:49:53.953Z",
        "endsAt": "2026-08-02T13:34:53.953Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "00c3102c-e158-4aea-bdb4-81ae909e5e4d",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:50:15.211Z",
        "endsAt": "2026-08-02T13:35:15.211Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "afdb0c43-461b-46cd-a9f4-4c648a8fe8bb",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:50:35.968Z",
        "endsAt": "2026-08-02T13:35:35.968Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "7c0bc6d4-eea6-4dd9-ba51-9f730dfd0e58",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:50:56.105Z",
        "endsAt": "2026-08-02T13:35:56.106Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375
… truncated (12836 more chars)
```

---

### 73. Upcoming calendar — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/calendar/upcoming`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 23ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-73`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"616c-wxPenAp7sdm/ZgOxR+FQ8lc+fBY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "from": "2026-08-01T15:21:35.672Z",
    "to": "2026-08-08T15:21:35.672Z",
    "items": [
      {
        "id": "007b9046-53b9-4024-9603-1b53428f229b",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:36:52.572Z",
        "endsAt": "2026-08-02T13:21:52.572Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "1edeeaed-3a0c-4e52-b5eb-b65799e34aa0",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:48:53.709Z",
        "endsAt": "2026-08-02T13:33:53.709Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "129af453-cea7-4a67-9a29-58bdf228161d",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:49:13.556Z",
        "endsAt": "2026-08-02T13:34:13.556Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "df0f5ccf-7459-4972-9bd0-e6d06930629f",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:49:33.653Z",
        "endsAt": "2026-08-02T13:34:33.653Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "ec84dbb8-a3b5-4867-8dcb-c6755f463249",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:49:53.953Z",
        "endsAt": "2026-08-02T13:34:53.953Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "00c3102c-e158-4aea-bdb4-81ae909e5e4d",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:50:15.211Z",
        "endsAt": "2026-08-02T13:35:15.211Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "afdb0c43-461b-46cd-a9f4-4c648a8fe8bb",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:50:35.968Z",
        "endsAt": "2026-08-02T13:35:35.968Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "7c0bc6d4-eea6-4dd9-ba51-9f730dfd0e58",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:50:56.105Z",
        "endsAt": "2026-08-02T13:35:56.106Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "7cd0b17d-16a0-4a92-8584-25a7128b107a",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:51:16.045Z",
        "endsAt": "2026-08-02T13:36:16.045Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "d2fb7f1e-2232-47eb-9289-3dd7f89fb19f",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:51:36.351Z",
        "endsAt": "2026-08-02T13:36:36.351Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "f13b9a60-9e08-4e87-ad3b-626a11c1448c",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:51:56.430Z",
        "endsAt": "2026-08-02T13:36:56.430Z",
        "eventType": "MEETING",
        "projectId": "45453400-bf7f-4375-b7c9-6d113bbf3353",
        "projectStatus": "URGENT"
      },
      {
        "id": "4d96a38c-525d-4234-8a2e-a3f2db1687dc",
        "title": "Initech client sync",
        "startsAt": "2026-08-02T12:52:16.660Z",
        "endsAt": "2026-08-02T13:37:16.660Z",
        "eventType": "MEET
… truncated (29379 more chars)
```

---

### 74. Create calendar event — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/calendar/events`
- **Expected status:** 200 | 201
- **Actual status:** 201
- **Duration:** 15ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-74`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `d3634c8c-82bd-490f-9c76-2efc6302704a`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "title": "E2E Event msairad0",
  "startsAt": "2026-08-02T15:21:35.713Z",
  "endsAt": "2026-08-02T16:21:35.713Z",
  "eventType": "MEETING",
  "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
  "participantIds": [
    "b03df988-bc8a-4834-94a7-5046798932ea"
  ]
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"19e-Wwk33sHIS3f6vThwFikW0IjJcsU"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "f4e67b03-d6b6-4de2-b3f0-5181a01a602e",
    "title": "E2E Event msairad0",
    "startsAt": "2026-08-02T15:21:35.713Z",
    "endsAt": "2026-08-02T16:21:35.713Z",
    "eventType": "MEETING",
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "projectStatus": null,
    "participantIds": [
      "b03df988-bc8a-4834-94a7-5046798932ea"
    ],
    "createdBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
  },
  "timestamp": "2026-08-01T15:21:35.726Z"
}
```

---

### 75. Patch calendar event — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/calendar/events/f4e67b03-d6b6-4de2-b3f0-5181a01a602e`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 164ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-75`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `07c53c61-27cd-4d5b-afaa-7b715475f7eb`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "title": "E2E Event Updated msairad0"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"1a6-v2moeBb3XGMJ/8K6jKpq0yMZY7Q"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "f4e67b03-d6b6-4de2-b3f0-5181a01a602e",
    "title": "E2E Event Updated msairad0",
    "startsAt": "2026-08-02T15:21:35.713Z",
    "endsAt": "2026-08-02T16:21:35.713Z",
    "eventType": "MEETING",
    "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "projectStatus": null,
    "participantIds": [
      "b03df988-bc8a-4834-94a7-5046798932ea"
    ],
    "createdBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
  },
  "timestamp": "2026-08-01T15:21:35.910Z"
}
```

---

### 76. Delete calendar event — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/calendar/events/f4e67b03-d6b6-4de2-b3f0-5181a01a602e`
- **Expected status:** 200 | 204
- **Actual status:** 200
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-76`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `882a70fe-e37f-4205-9101-00cb2d87c991`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"93-CP9p/XeX+VfNLXPQfusMYHRlBqc"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "f4e67b03-d6b6-4de2-b3f0-5181a01a602e",
    "deletedAt": "2026-08-01T15:21:35.936Z"
  },
  "timestamp": "2026-08-01T15:21:35.941Z"
}
```

---

### 77. Global search — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/search?q=E2E&limit=10`
- **Expected status:** 200
- **Actual status:** 200
- **Duration:** 20ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-77`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:35 GMT`
- `etag`: `W/"acc-Rk7yOL4X32Z5/gnVRDlj7yeKrE4"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `60`
- `x-ratelimit-remaining`: `59`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "groups": [
      {
        "type": "project",
        "items": [
          {
            "id": "6a3848d2-56c6-4040-9452-3af9aa3c1aec",
            "orderCode": "E2E-msaij6dk",
            "clientName": "E2E Client Updated msaij6dk",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 53M 31S"
          },
          {
            "id": "a7a43e39-51f7-454a-b4db-a7808ef94d7c",
            "orderCode": "E2E-msaincee",
            "clientName": "E2E Client Updated msaincee",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 56M 45S"
          },
          {
            "id": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
            "orderCode": "E2E-msairad0",
            "clientName": "E2E Client Updated msairad0",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 59M 53S"
          },
          {
            "id": "ec21e249-a7d7-4f61-8ed9-e57997a36836",
            "orderCode": "E2E-msaim6we",
            "clientName": "E2E Client Updated msaim6we",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 55M 51S"
          }
        ]
      },
      {
        "type": "employee",
        "items": []
      },
      {
        "type": "conversation",
        "items": [
          {
            "id": "0e68b2a9-7358-4ff2-88b8-e68e4bdc06d2",
            "type": "GROUP",
            "name": "E2E-msaim6we · E2E Client msaim6we",
            "projectId": "ec21e249-a7d7-4f61-8ed9-e57997a36836"
          },
          {
            "id": "237c22b5-84ee-4a75-8b53-0f90a45e531e",
            "type": "GROUP",
            "name": "E2E-msaincee · E2E Client msaincee",
            "projectId": "a7a43e39-51f7-454a-b4db-a7808ef94d7c"
          },
          {
            "id": "82d921e9-62c7-42d6-8a77-fd592ab895c1",
            "type": "GROUP",
            "name": "E2E Group Updated msaihrks",
            "projectId": null
          },
          {
            "id": "9a368a94-1e8c-4e2a-84a3-1004973bea14",
            "type": "GROUP",
            "name": "E2E-msaij6dk · E2E Client msaij6dk",
            "projectId": "6a3848d2-56c6-4040-9452-3af9aa3c1aec"
          },
          {
            "id": "a384b6d7-1bb3-464e-9185-08d554c539c0",
            "type": "GROUP",
            "name": "E2E-msairad0 · E2E Client msairad0",
            "projectId": "c1642ecb-940e-4adf-b1fa-df5be12629e8"
          },
          {
            "id": "d1d4fe81-7b58-43ed-8639-4c337ed5f6a2",
            "type": "GROUP",
            "name": "E2E Group Updated msairad0",
            "projectId": null
          }
        ]
      },
      {
        "type": "message",
        "items": []
      },
      {
        "type": "order",
        "items": [
          {
            "id": "6a3848d2-56c6-4040-9452-3af9aa3c1aec",
            "orderCode": "E2E-msaij6dk",
            "clientName": "E2E Client Updated msaij6dk",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 53M 31S"
          },
          {
            "id": "a7a43e39-51f7-454a-b4db-a7808ef94d7c",
            "orderCode": "E2E-msaincee",
            "clientName": "E2E Client Updated msaincee",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 56M 45S"
          },
          {
            "id": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
            "orderCode": "E2E-msairad0",
            "clientName": "E2E Client Updated msairad0",
            "profileName": "endpoint_test",
            "status": "PLANNING",
            "value": 100,
            "timeline": "6D 23H 59M 53S"
          },
          {
       
… truncated (424 more chars)
```

---

### 78. Create upload URL — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/files/upload-url`
- **Expected status:** 200 | 201 | 500 | 502 | 503
- **Actual status:** 200
- **Duration:** 22ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-78`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `e21e46b5-a3c8-4f2c-8d47-fbf7bb9019ff`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "filename": "e2e-msairad0.png",
  "mimeType": "image/png",
  "sizeBytes": 75,
  "purpose": "MESSAGE"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:36 GMT`
- `etag`: `W/"315-+4YCCvQjev73bVex+N+t006KRC0"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `30`
- `x-ratelimit-remaining`: `29`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "uploadId": "upl_3fcfc9c4-201c-4ac2-929e-c5a488fd32b7",
    "attachmentId": "3fcfc9c4-201c-4ac2-929e-c5a488fd32b7",
    "uploadUrl": "[REDACTED]",
    "expiresAt": "2026-08-01T15:26:36.012Z",
    "headers": {
      "Content-Type": "image/png"
    }
  },
  "timestamp": "2026-08-01T15:21:36.023Z"
}
```

---

### 79. Multipart file upload — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/files/upload`
- **Expected status:** 200 | 201 | 400 | 500 | 502 | 503
- **Actual status:** 200
- **Duration:** 950ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-79`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `f0439668-1009-437e-9f8c-f9f9b00c65c1`

#### Request body

```
[multipart/form-data]
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:36 GMT`
- `etag`: `W/"139-wGptEp12FNh2NH9hYwTX+tnhDpQ"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `30`
- `x-ratelimit-remaining`: `29`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "uploadId": "upl_6915f447-07b9-4085-8406-48c29ebe294d",
    "attachmentId": "6915f447-07b9-4085-8406-48c29ebe294d",
    "scanStatus": "CLEAN",
    "storageKey": "qurix/b866d27b-c17d-4abd-a680-f3087c2e95b9/message/6915f447-07b9-4085-8406-48c29ebe294d-e2e-msairad0.png"
  },
  "timestamp": "2026-08-01T15:21:36.994Z"
}
```

---

### 80. Get download URL — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/files/6915f447-07b9-4085-8406-48c29ebe294d/download-url`
- **Expected status:** 200 | 404 | 500 | 502 | 503
- **Actual status:** 200
- **Duration:** 6ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-80`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"2e0-ZD9dizucimtLjro2Vw47Eu/ngQM"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "attachmentId": "6915f447-07b9-4085-8406-48c29ebe294d",
    "downloadUrl": "[REDACTED]",
    "expiresAt": "2026-08-01T15:26:37.018Z"
  },
  "timestamp": "2026-08-01T15:21:37.021Z"
}
```

---

### 81. Create generic link — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/links`
- **Expected status:** 200 | 201 | 400 | 403
- **Actual status:** 201
- **Duration:** 12ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-81`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `450a4838-a6b4-431d-8099-45715610976a`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "url": "https://example.com/generic-link",
  "parentType": "PROJECT",
  "parentId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
  "label": "E2E generic"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"117-qWGvvOlmVp5mC1ikwbP6Oejvt4M"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "linkId": "a122e1b2-7659-4f37-94a0-f4ce8b574744",
    "url": "https://example.com/generic-link",
    "kind": "EXTERNAL",
    "title": null,
    "label": "E2E generic",
    "parentType": "PROJECT",
    "parentId": "c1642ecb-940e-4adf-b1fa-df5be12629e8"
  },
  "timestamp": "2026-08-01T15:21:37.053Z"
}
```

---

### 82. Admin audit log — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/admin/audit?limit=10`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 8ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-82`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"1395-9LyzG+W/+in+poNIM1QgNFcIWa8"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "9d03a79a-d291-444b-9801-affab216855d",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        "action": "file.linked",
        "resourceType": "Project",
        "resourceId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
        "beforeData": null,
        "afterData": {
          "url": "https://example.com/generic-link",
          "kind": "EXTERNAL",
          "linkId": "a122e1b2-7659-4f37-94a0-f4ce8b574744"
        },
        "ipAddress": "::ffff:172.18.0.1",
        "requestId": "8baa4b06-0fa3-4f30-801c-62f2918b66ae",
        "createdAt": "2026-08-01T15:21:37.051Z"
      },
      {
        "id": "3f58c6ba-3597-4cdd-8d98-dd2f92dac301",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        "action": "file.scan_completed",
        "resourceType": "Attachment",
        "resourceId": "6915f447-07b9-4085-8406-48c29ebe294d",
        "beforeData": null,
        "afterData": {
          "inline": true,
          "result": "CLEAN"
        },
        "ipAddress": "::ffff:172.18.0.1",
        "requestId": "fd679bfb-fdd8-4806-af1b-bb1abdde35ad",
        "createdAt": "2026-08-01T15:21:36.993Z"
      },
      {
        "id": "11acac61-f81e-4179-8deb-40d9341c93d3",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        "action": "file.uploaded",
        "resourceType": "Attachment",
        "resourceId": "6915f447-07b9-4085-8406-48c29ebe294d",
        "beforeData": null,
        "afterData": {
          "purpose": "MESSAGE",
          "multipart": true,
          "scanStatus": "CLEAN"
        },
        "ipAddress": "::ffff:172.18.0.1",
        "requestId": "44606a3f-f4d9-4897-9ea9-b185bddd4159",
        "createdAt": "2026-08-01T15:21:36.992Z"
      },
      {
        "id": "8cbb6cdb-a3b5-416c-8879-b17dd3c86e4f",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        "action": "file.upload_url_created",
        "resourceType": "Attachment",
        "resourceId": "3fcfc9c4-201c-4ac2-929e-c5a488fd32b7",
        "beforeData": null,
        "afterData": {
          "purpose": "MESSAGE",
          "mimeType": "image/png",
          "sizeBytes": 75,
          "storageKey": "qurix/b866d27b-c17d-4abd-a680-f3087c2e95b9/message/3fcfc9c4-201c-4ac2-929e-c5a488fd32b7-e2e-msairad0.png"
        },
        "ipAddress": "::ffff:172.18.0.1",
        "requestId": "3e80bfc4-3117-40a2-af10-02e4a829521a",
        "createdAt": "2026-08-01T15:21:36.010Z"
      },
      {
        "id": "1bbde469-795c-4ec2-918b-b5d53a9ac1ad",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        "action": "calendar.event_deleted",
        "resourceType": "CalendarEvent",
        "resourceId": "f4e67b03-d6b6-4de2-b3f0-5181a01a602e",
        "beforeData": null,
        "afterData": {
          "deletedAt": "2026-08-01T15:21:35.936Z"
        },
        "ipAddress": "::ffff:172.18.0.1",
        "requestId": "f8dcb143-992f-496b-8c6a-ad5a50af47fc",
        "createdAt": "2026-08-01T15:21:35.938Z"
      },
      {
        "id": "e2d4c3ee-98a3-42db-90cf-b74624b0fe8c",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        "action": "calendar.event_updated",
        "resourceType": "CalendarEvent",
        "resourceId": "f4e67b03-d6b6-4de2-b3f0-5181a01a602e",
        "beforeData": null,
        "afterData": {
          "title": "E2E Event Updated msairad0",
          "startsAt": "2026-08-02T15:21:35.713Z",
          "eventType": "MEETING"
        },
        "ipAddress": "::ffff:172.18.0.1",
        "requestId": "4d49ec87-626b-4c15-ad2d-4fb2707a1de2",
        "createdAt": "2026-08-01T15:21:35.756Z"
      },
      {
        "id": "351c8c22-8f22-497f-9429-628550fcd151",
        "actorId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
        "impersonatedBy": null,
        
… truncated (2834 more chars)
```

---

### 83. Admin get config — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/admin/config`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 4ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-83`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"233-JPcXZOTKTVj/WrnVP4SgXFKoxvI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "passwordPolicy": {
      "minLength": 8,
      "requireUppercase": true,
      "requireNumber": true,
      "requireSpecial": false
    },
    "retentionDays": {
      "softDeletedProjects": 90,
      "softDeletedMessages": 365,
      "softDeletedAttachments": 90,
      "softDeletedConversations": 365,
      "softDeletedCalendarEvents": 90
    },
    "attachmentPolicy": {
      "maxBytes": 52428800,
      "allowedMimePrefixes": [
        "image/",
        "application/pdf",
        "video/",
        "audio/"
      ]
    },
    "extras": {
      "seedVersion": 1
    },
    "version": 4,
    "updatedAt": "2026-08-01T15:21:33.355Z",
    "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
  },
  "timestamp": "2026-08-01T15:21:37.106Z"
}
```

---

### 84. Admin patch config — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/admin/config`
- **Expected status:** 200 | 400 | 403
- **Actual status:** 200
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-84`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `71e80e6c-9d49-4d66-9902-ca21c6730c02`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"233-xh4jRfLF8e8061yNpMqhh4t2FZo"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "passwordPolicy": {
      "minLength": 8,
      "requireUppercase": true,
      "requireNumber": true,
      "requireSpecial": false
    },
    "retentionDays": {
      "softDeletedProjects": 90,
      "softDeletedMessages": 365,
      "softDeletedAttachments": 90,
      "softDeletedConversations": 365,
      "softDeletedCalendarEvents": 90
    },
    "attachmentPolicy": {
      "maxBytes": 52428800,
      "allowedMimePrefixes": [
        "image/",
        "application/pdf",
        "video/",
        "audio/"
      ]
    },
    "extras": {
      "seedVersion": 1
    },
    "version": 5,
    "updatedAt": "2026-08-01T15:21:37.131Z",
    "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
  },
  "timestamp": "2026-08-01T15:21:37.136Z"
}
```

---

### 85. Admin metrics — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/admin/metrics`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-85`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"101-b/yRwy9lzAiwtjlAyCsANYCpV/Q"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "queueDepth": 8849,
    "projectionLagMs": 9884526,
    "loginRatePerHour": 11,
    "outboxErrorRatePerHour": 3415,
    "websocketConnections": 0,
    "dashboardQueryLatencyMs": null,
    "collectedAt": "2026-08-01T15:21:37.167Z"
  },
  "timestamp": "2026-08-01T15:21:37.167Z"
}
```

---

### 86. Admin feature flags — PASS

- **Method:** `GET`
- **URL:** `http://localhost:3000/api/v1/admin/feature-flags`
- **Expected status:** 200 | 403
- **Actual status:** 200
- **Duration:** 12ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-86`
- `Authorization`: `Bearer [REDACTED]`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"308-sEDU5Ek6hguIHCabOynTtJauE4g"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "key": "calendar_reminders",
        "enabled": true,
        "description": "Deadline reminder worker",
        "updatedAt": "2026-08-01T15:21:33.362Z",
        "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
      },
      {
        "key": "calls_audio",
        "enabled": true,
        "description": "Audio WebRTC calls",
        "updatedAt": "2026-08-01T15:21:33.361Z",
        "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
      },
      {
        "key": "dashboard_v2",
        "enabled": true,
        "description": "New role-specific dashboards",
        "updatedAt": "2026-08-01T15:21:33.359Z",
        "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
      },
      {
        "key": "subscriptions_v2",
        "enabled": false,
        "description": "Gradual rollout of Convex subscriptions v2",
        "updatedAt": "2026-08-01T15:21:33.357Z",
        "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
      }
    ]
  },
  "timestamp": "2026-08-01T15:21:37.199Z"
}
```

---

### 87. Admin patch feature flag — PASS

- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/v1/admin/feature-flags/calendar_reminders`
- **Expected status:** 200 | 400 | 404 | 403
- **Actual status:** 200
- **Duration:** 16ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-87`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `31896dad-20f5-4e42-b399-f492645ab024`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "enabled": true
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"ed-ZTuuuBUU9RsXZ3n8M+wbc7n8vD8"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "key": "calendar_reminders",
    "enabled": true,
    "description": "Deadline reminder worker",
    "updatedAt": "2026-08-01T15:21:37.229Z",
    "updatedBy": "3c10609f-0896-4280-bbc5-ee9198bf9ea0"
  },
  "timestamp": "2026-08-01T15:21:37.234Z"
}
```

---

### 88. Admin start impersonation — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/admin/impersonate`
- **Expected status:** 200 | 201 | 403 | 400
- **Actual status:** 200
- **Duration:** 13ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-88`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `126d299a-a1b1-436d-a809-12064d8315ac`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "targetEmployeeId": "b03df988-bc8a-4834-94a7-5046798932ea"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"6b9-VH70m3jRwTh8yuP4YEaYeWeslMI"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "sessionId": "13e16595-10b0-495c-9eb1-9e8a4b1db162",
    "accessToken": "[REDACTED]",
    "expiresAt": "2026-08-01T15:36:37.260Z",
    "expiresIn": 900,
    "target": {
      "id": "b03df988-bc8a-4834-94a7-5046798932ea",
      "employeeCode": "16058",
      "email": "alex@qurix.local",
      "username": "alex_chen",
      "roles": [
        "EMPLOYEE"
      ]
    },
    "readOnly": true
  },
  "timestamp": "2026-08-01T15:21:37.267Z"
}
```

---

### 89. Admin end impersonation — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/admin/impersonate/end`
- **Expected status:** 200 | 201 | 204 | 400 | 403
- **Actual status:** 200
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-89`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `4615389b-1b09-4e7d-81c3-5630d5588d47`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"82-sXCumMW3Q55/VRf9LQ65J93ouic"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "revoked": 1,
    "sessionIds": [
      "13e16595-10b0-495c-9eb1-9e8a4b1db162"
    ]
  },
  "timestamp": "2026-08-01T15:21:37.297Z"
}
```

---

### 90. Admin retention request (no approve) — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/admin/retention/run`
- **Expected status:** 200 | 201 | 400 | 403 | 409
- **Actual status:** 200
- **Duration:** 7ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-90`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `5dfb7273-af15-4fde-b138-8d4eed8c55d1`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"10b-QZok5F6IIx2V1WIrIVclqNIOaoM"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "jobId": "c2a0d0ef-39fb-47ae-acff-dc4cd3463f91",
    "status": "PENDING_APPROVAL",
    "approveBy": "2026-08-02T15:21:37.320Z",
    "message": "Retention job pending. A different SUPER_ADMIN must approve within 24 hours."
  },
  "timestamp": "2026-08-01T15:21:37.324Z"
}
```

---

### 91. Admin outbox replay — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/admin/replay`
- **Expected status:** 200 | 201 | 400 | 403 | 404
- **Actual status:** 200
- **Duration:** 10ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-91`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `ac2ad747-81e0-4a96-85ee-0308c69effcb`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "aggregateType": "Project",
  "aggregateId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
  "fromAggregateVer": 0
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"15e-NPdqCX9WL5ajNin5IQmR0jHlSsQ"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "aggregateType": "Project",
    "aggregateId": "c1642ecb-940e-4adf-b1fa-df5be12629e8",
    "fromAggregateVer": 0,
    "replayed": 7,
    "eventTypes": [
      "project.created",
      "project.updated",
      "project.link_added",
      "project.link_removed",
      "project.member_added",
      "project.member_role_changed",
      "project.member_removed"
    ]
  },
  "timestamp": "2026-08-01T15:21:37.355Z"
}
```

---

### 92. Delete created team — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/teams/7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f`
- **Expected status:** 200 | 204 | 400 | 403 | 409
- **Actual status:** 200
- **Duration:** 9ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-92`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `ad66c9e8-3132-4317-9254-d70800fe2057`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"93-2Ht/vU8IV+4mqCbikGYf3e4HA/c"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "7fbf5d66-9b5a-4a81-9fd6-f040ed0cb72f",
    "deletedAt": "2026-08-01T15:21:37.380Z"
  },
  "timestamp": "2026-08-01T15:21:37.384Z"
}
```

---

### 93. Delete created service line — PASS

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/v1/service-lines/9df24165-0dac-49f8-a806-7a319e805983`
- **Expected status:** 200 | 204 | 400 | 403 | 409
- **Actual status:** 200
- **Duration:** 12ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-93`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `c64956ec-8a67-44dd-a100-8a53f968b005`

#### Request body

_empty_

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"93-+N3uqqa6oSkfyo9F92BLNBL6h0c"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "id": "9df24165-0dac-49f8-a806-7a319e805983",
    "deletedAt": "2026-08-01T15:21:37.410Z"
  },
  "timestamp": "2026-08-01T15:21:37.415Z"
}
```

---

### 94. Leave group conversation — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/conversations/d1d4fe81-7b58-43ed-8639-4c337ed5f6a2/leave`
- **Expected status:** 200 | 201 | 400 | 403
- **Actual status:** 200
- **Duration:** 11ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-94`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `79050ff3-9a97-4f5b-9d21-4b1e6d4a2ab3`
- `Content-Type`: `application/json`

#### Request body

```json
{}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"b8-ZLO9Wn7w6oZ6lVkfbmXtAmyNjAY"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "conversationId": "d1d4fe81-7b58-43ed-8639-4c337ed5f6a2",
    "employeeId": "3c10609f-0896-4280-bbc5-ee9198bf9ea0",
    "left": true
  },
  "timestamp": "2026-08-01T15:21:37.447Z"
}
```

---

### 95. Logout — PASS

- **Method:** `POST`
- **URL:** `http://localhost:3000/api/v1/auth/logout`
- **Expected status:** 200 | 201 | 204
- **Actual status:** 200
- **Duration:** 9ms

#### Request headers

- `Origin`: `http://localhost:3000`
- `X-Request-Id`: `ept-msairad0-95`
- `Authorization`: `Bearer [REDACTED]`
- `Idempotency-Key`: `add233d0-5b5c-4e25-b1b1-0c80c5f4fe08`
- `Content-Type`: `application/json`

#### Request body

```json
{
  "refreshToken": "[REDACTED]"
}
```

#### Response headers

- `access-control-allow-credentials`: `true`
- `access-control-allow-origin`: `http://localhost:3000`
- `content-security-policy`: `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data: validator.swagger.io;object-src 'none';script-src 'self' https: 'unsafe-inline';script-src-attr 'none';style-src 'self' 'unsafe-inline'`
- `content-type`: `application/json; charset=utf-8`
- `cross-origin-opener-policy`: `same-origin`
- `cross-origin-resource-policy`: `same-origin`
- `date`: `Sat, 01 Aug 2026 15:21:37 GMT`
- `etag`: `W/"4a-yqyTikgVVVzw0TUEUy6DWcCz0MM"`
- `origin-agent-cluster`: `?1`
- `referrer-policy`: `no-referrer`
- `strict-transport-security`: `max-age=31536000; includeSubDomains`
- `vary`: `Origin`
- `x-content-type-options`: `nosniff`
- `x-dns-prefetch-control`: `off`
- `x-download-options`: `noopen`
- `x-frame-options`: `SAMEORIGIN`
- `x-permitted-cross-domain-policies`: `none`
- `x-ratelimit-limit`: `100`
- `x-ratelimit-remaining`: `99`
- `x-ratelimit-reset`: `60`
- `x-xss-protection`: `0`

#### Response body

```json
{
  "success": true,
  "data": {
    "ok": true
  },
  "timestamp": "2026-08-01T15:21:37.476Z"
}
```

---

## Notes

- Tokens / passwords / signed URLs are redacted.
- Requires a seeded database (default admin `admin@qurix.local` / password from `SEED_ADMIN_PASSWORD`).
- File upload / signed URL calls may return 5xx when S3 is unavailable; those statuses are treated as acceptable for storage-dependent routes.
- Admin retention is requested without second-admin approve so live data is not purged.
- Socket.IO / WebRTC signaling is out of scope (see `docs/frontend/realtime.md`).
- Re-run: `pnpm test:endpoints` or `node scripts/endpoint-test.mjs <baseUrl>`.
