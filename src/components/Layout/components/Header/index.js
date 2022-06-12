import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles); // giúp class có thể viết kiểu a-b (vd: header-item)

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}></div>
    </header>
  );
}

export default Header;
