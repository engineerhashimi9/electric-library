import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export async function signup(name, last_name, birth_date, email, password) {
  try {
    console.log("Signup function called!");

    const response = await axios.post(`${API_URL}/api/v1/register/`, {
      name,
      last_name,
      birth_date,
      email,
      password,
    });

    const data = response.data;

    console.log("Signup response:", data);

    // Store tokens only if your backend returns them
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
