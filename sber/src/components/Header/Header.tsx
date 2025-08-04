import React, { useState } from "react";
import s from "./styles.module.scss";
import Searching from "../ui/Searching/Searching";
import Logo from "../../assets/imgs/Logo_lightTheme.svg";
import MenuArrow from "../../assets/imgs/menuArrow.svg";

export default function Header(props: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const {
    handleChange,
    value,
    handleBlur,
    onKeyDown,
    onInputClick,
    onButtonClick,
  } = props;
  return (
    <>
      <div className={s.header}>
        <div className={s.container}>
          <img className={s.logo} src={Logo} alt="GitVerseBlog" />
          <ul className={`${s.navList} ${isSearchFocused ? s.hidden : ""}`}>
            <li className={s.navLink}>Статьи</li>
            <li className={s.navLink}>Новости</li>
            <li className={s.navLink}>Медиа</li>
          </ul>
          <ul className={`${s.infoList} ${isSearchFocused ? s.hidden : ""}`}>
            <li className={`${s.navLink} ${s.menuLink}`}>
              Продукты{" "}
              <button className={s.productsBtn}>
                <img className={s.productsBtn__Img} src={MenuArrow} alt="v" />
              </button>
            </li>
            <li className={s.navLink}>Документация</li>
            <li className={s.navLink}>Почему GitVerse</li>
          </ul>
          <div className={s.managementBar}>
            <Searching
              className={isSearchFocused ? s.inputFocus : s.input}
              onButtonClick={onButtonClick}
              onInputClick={onInputClick}
              onKeyDown={onKeyDown}
              value={value}
              handleBlur={(e) => {
                handleBlur?.(e);
                setIsSearchFocused(false);
              }}
              handleChange={handleChange}
              onFocus={() => setIsSearchFocused(true)}
              btnClassName={isSearchFocused ? s.btnOnFocus : s.btn}
            />

            <button className={s.themeBtn}></button>
            <button className={s.accountBtn}></button>
          </div>
        </div>
      </div>
    </>
  );
}
