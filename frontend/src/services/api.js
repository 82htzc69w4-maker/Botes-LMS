const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

export const api = {
  getUsers: () => request("/users"),
  createUser: data => request("/users", { method: "POST", body: JSON.stringify(data) }),
  getRoles: () => request("/roles"),
  getDepartments: () => request("/departments"),
  getAuditLogs: () => request("/audit-logs"),
};
