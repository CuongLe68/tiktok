//chứa phần list trả xuống
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]); //history khởi tạo chính bằng data: items nhận từ MENU_ITEMS(data là đại diện cho 1 object hiện tại)
  const current = history[history.length - 1]; //Lấy phần tử cuối cùng cảu mảng(history này chỉ có 1 phần tử duy nhất nên k thể - 2 hoặc 0)

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; //convert sang kiểu boolean

      return (
        <MenuItem //lấy ra list item dùng chung được viết sẵn trong file MenuItem.js
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              //Nếu có children trong phần tử của mảng
              setHistory((prev) => [...prev, item.children]); //Thêm thằng children vào history
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 600]}
      offset={[12, 8]} //thay đổi vị trí qua về của tippy
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1)); //slice là lấy phần tử trong mảng(0 - kế cuối), tức là bỏ thằng children
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))} //dùng ở phần ngôn ngữ
    >
      {children}
    </Tippy>
  );
}

export default Menu;
