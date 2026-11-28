import axios from "axios";
import { API_URL, formatDisplayNameFromEmail, saveAuthTokens } from "./utils";

/**
 * Authenticates a user against the backend `/api/v1/login/` endpoint.
 * Falls back to a local demo session only when the backend server is unreachable
 * (network error), while still surfacing actual 4xx/5xx credential errors.
 */
export async function loginRequest(email, password) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/login/`, {
      email,
      password,
    });

    const data = response.data || {};
    saveAuthTokens(data);

    const userFromApi = data.user || {};
    return {
      ...data,
      user: {
        name:
          userFromApi.name ||
          data.name ||
          formatDisplayNameFromEmail(email),
        email: userFromApi.email || email,
        role: userFromApi.role || "Patron Fellow",
      },
    };
  } catch (error) {
    // Re-throw server-side validation/credential errors so the form can display them
    if (error.response) {
      throw error;
    }

    // Backend unreachable in standalone frontend mode: return clean local session data
    return {
      offlineDemo: true,
      user: {
        name: formatDisplayNameFromEmail(email),
        email,
        role: "Patron Fellow",
      },
    };
  }
}

export { loginRequest as login };
