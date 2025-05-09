const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function registerUser(userData) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.error || "Registration failed" };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, message: "Network error" };
  }
}

export async function loginUser(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (!res.ok) {
      return { success: false, message: data.error || "Login failed" };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, message: "Network error" };
  }
}
