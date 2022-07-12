import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://t0ofernkdc.execute-api.us-west-2.amazonaws.com/Prod/'
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
