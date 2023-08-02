import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACK_END_URL,
});

export default instance;
