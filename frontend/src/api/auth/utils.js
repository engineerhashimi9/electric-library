import { API_URL } from "./login";

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refresh");

  if (!refreshToken) {
    return null;
  }

  const response = await fetch(`${API_URL}/api/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  });

  if (!response.ok) {
    logout();
    return null;
  }

  const data = await response.json();
  localStorage.setItem("access", data.access);

  if (data.refresh) {
    localStorage.setItem("refresh", data.refresh);
  }

  return data.access;
}

export async function apiFetch(path, options = {}) {
  const makeRequest = (token) =>
    fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

  let accessToken = localStorage.getItem("access");

  if (!accessToken) {
    throw new Error("User is not logged in");
  }

  let response = await makeRequest(accessToken);

  if (response.status !== 401) {
    return response;
  }

  accessToken = await refreshAccessToken();

  if (!accessToken) {
    return response;
  }

  return makeRequest(accessToken);
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}