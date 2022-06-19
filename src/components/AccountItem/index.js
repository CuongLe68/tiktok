import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/51faeb2beb46a239fccc193230a4259b~c5_300x300.webp?x-expires=1655834400&x-signature=WLX1CV9CgvQmumIWBpku9X2LVKY%3D"
        alt="Hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn văn A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
