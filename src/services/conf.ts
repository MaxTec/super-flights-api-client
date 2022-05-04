import axios from "axios";
const apiClient = axios.create({
  // Make Axios send cookies in its requests automatically
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
// Solamente si los necesitaremos para agregar la cookie
// apiClient.interceptors.request.use((config) => {
//   return ({
//     ...config,
//     headers: {
//       ...
//     },
//   })
// },
//   error => Promise.reject(error),
// );
const { get, post, put, delete: destroy } = apiClient;

export { get, post, put, destroy };
