import React from "react";
import css from "./transplant-filter.module.scss";
const TransplantFilter = () => {
  return (
    <div className={css.transplant}>
      <p> {"Количество пересадок"}</p>
      <ul>
        <li className={css.li}>
          <input type="checkbox" />
          Все
        </li>

        <li className={css.li}>
          <input type="checkbox" />
          Без пересадок
        </li>
        <li className={css.li}>
          <input type="checkbox" checked="checked" />1 пересадка
        </li>
        <li className={css.li}>
          <input type="checkbox" checked="checked" />2 пересадки{" "}
        </li>
        <li className={css.li}>
          <input type="checkbox" checked="checked" />3 пересадки{" "}
        </li>
      </ul>
    </div>
  );
};
export default TransplantFilter;
