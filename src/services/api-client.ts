import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea749f7ca2504513a8483628a15cef20",
  },
});
