import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pela URL do backend
  withCredentials: true, // Inclui cookies para autenticação
});

export default api;
