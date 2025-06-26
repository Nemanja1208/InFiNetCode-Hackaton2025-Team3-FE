const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiService = {
  get: async <T>(path: string): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`GET ${path} failed: ${response.statusText}`);
    }

    return response.json();
  },

  post: async <T>(path: string, body: unknown): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`POST ${path} failed: ${response.statusText}`);
    }

    return response.json();
  },

  put: async <T>(path: string, body: unknown): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`PUT ${path} failed: ${response.statusText}`);
    }

    return response.json();
  },

  delete: async <T>(path: string): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`DELETE ${path} failed: ${response.statusText}`);
    }

    return response.json();
  },
};
