import React from "react";
import css from "./tabs.module.scss";
const Tabs = () => {
  return (
    <div className={css.filter}>
      <button className={css.button}> Самый дешевый</button>
      <button className={css.button}>Самый быстрый</button>
      <button className={css.button}>Оптимальный</button>
    </div>
  );
};
export default Tabs;
