const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:3050",
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = instance;
