//Viết để dùng cho file apiServices để gọi Api
import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, //ở .env.development
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options); //await là chờ cái request gửi đi

  return response.data;
};

export default httpRequest;
