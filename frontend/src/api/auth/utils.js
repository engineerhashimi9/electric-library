/**
 * Base URL for the backend REST API.
 * Reads VITE_API_URL from environment variables with local Django default.
 */
export const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const AUTH_USER_KEY = "bargin_auth_user";
export const HAS_ACCOUNT_KEY = "bargin_has_account";
export const ACCESS_TOKEN_KEY = "access";
export const REFRESH_TOKEN_KEY = "refresh";

/**
 * Formats a readable display name from an email local-part when the API
 * response does not include an explicit first/full name.
 */
export function formatDisplayNameFromEmail(email = "") {
  const localPart = email.split("@")[0] || "Reader";
  return localPart
    .replace(/[._-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Persists JWT access and refresh tokens when provided by the backend.
 */
export function saveAuthTokens(data) {
  try {
    if (data?.access) {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.access);
    }
    if (data?.refresh) {
      localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh);
    }
  } catch {
    // Ignore storage quota/privacy-mode errors
  }
}

/**
 * Removes all authentication tokens and cached user info from localStorage.
 */
export function clearAuthStorage() {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  } catch {
    // Ignore storage errors
  }
}

/**
 * Requests a new access token using the stored refresh token.
 * Clears auth storage if the refresh token has expired or is invalid.
 */
export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  if (!refreshToken) {
    return null;
  }

  const response = await fetch(`${API_URL}/api/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (!response.ok) {
    clearAuthStorage();
    return null;
  }

  const data = await response.json();
  saveAuthTokens(data);
  return data.access || null;
}

/**
 * Authenticated fetch wrapper that attaches the Bearer token and
 * automatically retries once after refreshing an expired access token.
 */
export async function apiFetch(path, options = {}) {
  const makeRequest = (token) =>
    fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

  let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) {
    throw new Error("User is not logged in");
  }

  const response = await makeRequest(accessToken);
  if (response.status !== 401) {
    return response;
  }

  // Attempt silent token refresh and retry original request once
  accessToken = await refreshAccessToken();
  if (!accessToken) {
    return response;
  }

  return makeRequest(accessToken);
}

export { clearAuthStorage as logout };
