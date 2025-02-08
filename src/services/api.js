import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // URL base da API
});

export const getNoticias = async () => {
  try {
    const response = await api.get("/news"); // Rota da API
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export default api;
