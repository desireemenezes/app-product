import axios from "axios";

// instancia minha api de produtos criada na vercel
export const axiosInstance = axios.create({
  baseURL: "https://rest-json-server.onrender.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de resposta para tratar erros globalmente
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      console.error("[Axios] Erro na resposta:", {
        status,
        data: error.response?.data,
        url: error.config?.url,
      });

      // Exemplo: tratamento por status
      if (status === 404) {
        console.warn("Recurso não encontrado.");
      } else if (status === 500) {
        console.warn("Erro interno no servidor.");
      }
    } else {
      console.error("[Axios] Erro desconhecido:", error);
    }

    // Rejeita o erro para que possa ser tratado localmente se necessário
    return Promise.reject(error);
  }
);
