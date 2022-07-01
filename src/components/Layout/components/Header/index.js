//Chứa toàn bộ header
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/"; //khi hover vào mặc định sẽ hiển thị cái gì đó
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { Inbox, MessageIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles); // giúp class có thể viết kiểu a-b (vd: header-item)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng Việt",
    children: {
      title: "Language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Xem hồ sơ",
    to: "/@mrX",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Nhận xu",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Cài đặt",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Đăng xuất",
    to: "/logout",
    separate: true,
  },
];

function Header() {
  const currentUser = true;

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "Language":
        // handle change language
        break;
      default:
      // handle change
    }
  };

  return (
    //logo
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Logo Tiktok" />
        </div>

        {/* tìm kiếm */}
        <Search />

        {/* chức năng */}
        <div className={cx("acctions")}>
          <Button
            text
            // target="_blank" //chuyển sang trang khác
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Tin nhắn" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon className={cx("message-btn")} />
                </button>
              </Tippy>
              <Tippy content="Hộp thư" placement="bottom">
                <button className={cx("action-btn")}>
                  <Inbox className={cx("inbox-btn")} />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Đăng nhập</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0aa44602961295cf1a09941e58560b41.jpeg?x-expires=1656406800&x-signature=ndtsY4ZV0%2B0nJjVwXdjvCtXVoyY%3D"
                alt="Nguyễn Văn A"
                fallback="https://www.saokim.com.vn/blog/wp-content/uploads/2010/10/logo-hinh-tron-saokim.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
