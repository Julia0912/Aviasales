import React from "react";
import css from "./transfers-filter.module.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import cn from "classnames";

const TransfersFilter = ({ state, checkBoxClick }) => {
  return (
    <div className={css.transfers}>
      <p> {"Количество пересадок"}</p>

      <label className={cn(css.check)}>
        <input
          className={cn(css.checkBox)}
          id={"0"}
          onChange={(event) => checkBoxClick(event.target.id)}
          type="checkbox"
          checked={state?.checkBox[0]}
        />
        <span className={cn(css.checkBoxSpan)}></span>
        Все
      </label>

      <label className={cn(css.check)}>
        <input
          className={cn(css.checkBox)}
          id={"1"}
          onChange={(event) => checkBoxClick(event.target.id)}
          checked={state.checkBox[1]}
          type="checkbox"
        />
        <span className={cn(css.checkBoxSpan)}></span>
        Без пересадок
      </label>

      <label className={cn(css.check)}>
        <input
          className={cn(css.checkBox)}
          id={"2"}
          type="checkbox"
          onChange={(event) => checkBoxClick(event.target.id)}
          checked={state.checkBox[2]}
        />
        <span className={cn(css.checkBoxSpan)}></span>1 пересадка
      </label>
      <label className={cn(css.check)}>
        <input
          className={cn(css.checkBox)}
          id={"3"}
          type="checkbox"
          onChange={(event) => checkBoxClick(event.target.id)}
          checked={state.checkBox[3]}
        />
        <span className={cn(css.checkBoxSpan)}></span>2 пересадки
      </label>
      <label className={cn(css.check)}>
        <input
          className={cn(css.checkBox)}
          id={"4"}
          type="checkbox"
          onChange={(event) => checkBoxClick(event.target.id)}
          checked={state.checkBox[4]}
        />
        <span className={cn(css.checkBoxSpan)}></span>3 пересадки
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, actions)(TransfersFilter);
