//Chứa toàn bộ header
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

//import icons
import Tippy from "@tippyjs/react/headless"; //khi hover vào mặc định sẽ hiển thị cái gì đó
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

//import component
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu/Menu";

const cx = classNames.bind(styles); // giúp class có thể viết kiểu a-b (vd: header-item)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
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
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Phím tắt trên bàn phím",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

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
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Logo Tiktok" />
        </div>

        <Tippy
          interactive //Giúp tương tác được với phần value của tippy
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>

                {/* Hiện account */}
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Tìm kiếm tài khoản và video"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("acctions")}>
          <Button
            text
            to="/upload"
            // target="_blank" //chuyển sang trang khác
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Tải lên
          </Button>
          <Button primary>Đăng nhập</Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
