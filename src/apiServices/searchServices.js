//Gọi tất cả Api từ search đến đki đăng nhập cmt,... đều viết ở đây
import * as request from "~/utils/request"; //import tất cả thành object request

//async await gọi api
export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      //request lấy cái baseURL
      params: {
        q, //tương ứng với q: q
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
