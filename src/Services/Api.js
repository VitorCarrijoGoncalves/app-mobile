import axios from 'axios'

const api = axios.create({
  baseURL: 'https://appws.oabgo.org.br/wsoab/'
});

export default api
