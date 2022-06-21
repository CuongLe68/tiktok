import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button"; // mặc định là thẻ button
  const props = {
    onClick,
    ...passProps, //...passProps là các props khác
  }; //props nhận từ ngoài vào vd: primamy ở trên hoặc to, href,..

  if (disabled) {
    delete props.onClick; //Nếu class có disabled thì xóa sự kiện onClick đi
  }

  if (to) {
    props.to = to; //link nội bộ(vẫn ở trong trang web của mình)
    Comp = Link; // nếu là link nội bộ thì đổi thẻ button mặc định thành thẻ Link
  } else if (href) {
    props.href = href; //chuyển đến 1 trang web khác
    Comp = "a"; // nếu chuyển đến 1 web khác thì đổi thẻ button mặc định thành thẻ a
  }

  const classes = cx("wrapper", {
    [className]: className, //1 class riêng đặt tùy ý, làm việc với object nên lấy value của key (vd: [key]: value )
    primary, //tương đương primary: primary (kiến thức ES6), đăng kí đăng nhập, kích thước mặc định vừa
    outline, // follow, khác đăng kí đăng nhập
    small, //kích thước nhỏ
    large, //kích thước lớn
    text, //up file
    disabled, //Không cho thao tác với nút
    rounded, //nút tải ứng dụng
  });

  return (
    <Comp className={classes} {...props}>
      {/* Nếu có left icon thì sẽ có <span>...... */}
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
