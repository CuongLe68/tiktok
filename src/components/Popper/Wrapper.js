import classNames from "classnames/bind";
import Styles from "./Popper.module.scss";

const cx = classNames.bind(Styles);

//wrapper là phẩn chửa nội dung xổ xuống
function Wrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default Wrapper;
