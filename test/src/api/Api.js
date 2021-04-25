import axios from "axios";

export const postData = (url, data, config = {}) =>
  axios
  // we can also set proxy in react package.json
    .post(`http://localhost:4000${url}`, data, config)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const getData = (url, params) =>
  axios
  // we can also set proxy in react package.json
    .get(`http://localhost:4000${url}`, { params })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
