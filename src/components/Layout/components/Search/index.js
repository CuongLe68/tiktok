//import component
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import * as searchServices from "~/apiServices/searchServices";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState(""); //lấy giả trị của ô input
  const [searchResult, setSearchResult] = useState([]); //kết quả tìm kiếm
  const [showResult, setShowResult] = useState(true); //kết quả trả về
  const [loading, setLoading] = useState(false); //trong lúc tìm kiếm và hiển thị kết quả

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    //kiểm tra chuỗi nhập vào là chuỗi rỗng hoặc dấu cách ở đầu
    if (!debounced.trim()) {
      //nếu không nhập gì(loại bỏ các dấu cách thừa)
      setSearchResult([]);
      return;
    }

    //gọi api
    const fetchApi = async () => {
      //set icon load
      setLoading(true);

      const result = await searchServices.search(debounced); //truyến debounced vào q ở bên kia, type mặc định bằng less nên k truyền
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  //hàm để xử lý khi click vào nút xóa trên ô tìm kiếm
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  //hàm xử lý tắt kết quả tìm kiếm khi click ra ngoài kết quả
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive //Giúp tương tác được với phần value của tippy
      visible={showResult && searchResult.length > 0} //Hiện tippy
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Account</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
