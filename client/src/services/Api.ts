export class Api {
  static baseUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/v1`;

  private static getHeaders(token?: string): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  static async post<T>(url: string, data: T, token?: string): Promise<{ statusCode: number; data: any }> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return { statusCode: response.status, data: result };
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }

  static async get(url: string, token?: string): Promise<{ statusCode: number; data: any }> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "GET",
        headers: this.getHeaders(token),
      });

      const result = await response.json();
      return { statusCode: response.status, data: result };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  static async patch(url: string, data: any, token?: string): Promise<{ statusCode: number; data: any }> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "PATCH",
        headers: this.getHeaders(token),
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return { statusCode: response.status, data: result };
    } catch (error) {
      console.error("Error patching data:", error);
      throw error;
    }
  }

  static async delete(url: string, token?: string): Promise<{ statusCode: number; data: any }> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "DELETE",
        headers: this.getHeaders(token),
      });

      const result = await response.json();
      return { statusCode: response.status, data: result };
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  }
}