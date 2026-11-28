import axios from "axios";
import { API_URL, saveAuthTokens } from "./utils";

/**
 * Registers a new user account via `/api/v1/register/`.
 * Normalizes the returned user profile so AuthContext stays synced immediately.
 */
export async function signupRequest({ name, lastName, birthDate, email, password }) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/register/`, {
      name,
      last_name: lastName,
      birth_date: birthDate || null,
      email,
      password,
    });

    const data = response.data || {};
    saveAuthTokens(data);

    const userFromApi = data.user || {};
    return {
      ...data,
      user: {
        name: userFromApi.name || `${name} ${lastName}`.trim(),
        email: userFromApi.email || email,
        role: userFromApi.role || "Patron Fellow",
      },
    };
  } catch (error) {
    if (error.response) {
      throw error;
    }

    // Fallback session when backend server is not running locally
    return {
      offlineDemo: true,
      user: {
        name: `${name} ${lastName}`.trim(),
        email,
        role: "Patron Fellow",
      },
    };
  }
}

export { signupRequest as signup };
