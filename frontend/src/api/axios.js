import axios from "axios";

export default axios.create({
  baseURL: "https://cleverhive-app.onrender.com/api", // your Render backend URL
});
