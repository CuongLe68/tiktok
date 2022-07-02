//Viết path ở đây, dùng ở mọi nơi, chỉ sữa ở đây
const routes = {
  home: "/",
  following: "/following",
  profile: "/@:nickname", //nếu path có @ thì nó sẽ match,:nickname không cố định
  upload: "/upload",
  search: "/search",
};

export default routes;
