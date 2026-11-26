import axios from "axios";
import { API_URL } from "./login";

export async function signup(name, last_name, birth_date, email, password) {
  try {
    const response = await axios.post(`${API_URL}/api/v1/register/`, {
      name,
      last_name,
      birth_date,
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
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
}
