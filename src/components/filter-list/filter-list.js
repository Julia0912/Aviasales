import React from "react";
import css from "./filter-list.module.scss";
const FilterList = () => {
  return (
    <div className={css.filter}>
      <button className={css.button}> Самый дешевый</button>
      <button className={css.button}>Самый быстрый</button>
      <button className={css.button}>Оптимальный</button>
    </div>
  );
};
export default FilterList;
