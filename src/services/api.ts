import axios from "axios";

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/viniciussoares7/fakeserver-desafio2/produtos'
})

export default api;