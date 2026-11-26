import axios from "axios";

export const API_URL = "http://127.0.0.1:8000";

export async function login(email, password) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/login/`, {
      email,
      password,
    });

    const data = response.data;

    // Store tokens only if backend returns them
    if (data.access && data.refresh) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
    }

    return data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
}
