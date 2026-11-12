const API_URL = "http://127.0.0.1:8000";

export async function login(email, password) {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    { email: email, password: password },
  );

  const data = await response.data;

  if (!response.ok) {
    throw new Error(data.detail || "Login failed");
  }

  // Store tokens
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);

  return data;
}