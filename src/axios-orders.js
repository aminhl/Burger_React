import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-2ddb9-default-rtdb.firebaseio.com/",
});

export default instance;
