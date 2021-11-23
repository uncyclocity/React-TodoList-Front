const axios = require("axios");

const instance = axios.create({
  baseURL: "https://react-todolist.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = instance;
