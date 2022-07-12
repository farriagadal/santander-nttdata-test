import axios from 'axios';

const PORT = 3000;

const instance = axios.create({
  baseURL: `http://127.0.0.1:${PORT}/`,
});


instance.interceptors.request.use((config: any) => {
  // Aquí se puede editar la configuración de la petición antes de enviarla
  return config;
});

// Aquí se configurar cuando la petición se ha completado
instance.interceptors.response.use(
  (response: any) => response,
  (error: any) => Promise.reject(error)
);

export default instance;
