//Viết để dùng cho file apiServices để gọi Api
import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options); //await là chờ cái request gửi đi

  return response.data;
};

export default request;
