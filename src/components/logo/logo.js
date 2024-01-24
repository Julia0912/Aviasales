import React from "react";
import css from "./logo.module.scss";
import LogoImg from "../../pictures/Logo.svg";
const Logo = () => {
  return (
    // <div className={css.logo}>
    <img className={css.logo} src={LogoImg}></img>
    // </div>
  );
};
export default Logo;
