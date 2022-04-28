import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
});
// Solamnete si los necesitaremos para agregar la cookie
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