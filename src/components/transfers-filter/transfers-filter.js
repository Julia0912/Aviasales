import React from "react";
import css from "./transfers-filter.module.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const TransfersFilter = ({ state, checkBoxClick }) => {
  return (
    <div className={css.transfers}>
      <p> {"Количество пересадок"}</p>
      <ul>
        <li className={css.li}>
          <input
            id={"0"}
            onChange={(event) => checkBoxClick(event.target.id)}
            type="checkbox"
            checked={state?.checkBox[0]}
          />
          Все
        </li>

        <li className={css.li}>
          <input
            id={"1"}
            onChange={(event) => checkBoxClick(event.target.id)}
            checked={state.checkBox[1]}
            type="checkbox"
          />
          Без пересадок
        </li>
        <li className={css.li}>
          <input
            id={"2"}
            type="checkbox"
            onChange={(event) => checkBoxClick(event.target.id)}
            checked={state.checkBox[2]}
          />
          1 пересадка
        </li>
        <li className={css.li}>
          <input
            id={"3"}
            type="checkbox"
            onChange={(event) => checkBoxClick(event.target.id)}
            checked={state.checkBox[3]}
          />
          2 пересадки
        </li>
        <li className={css.li}>
          <input
            id={"4"}
            type="checkbox"
            onChange={(event) => checkBoxClick(event.target.id)}
            checked={state.checkBox[4]}
          />
          3 пересадки
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, actions)(TransfersFilter);
