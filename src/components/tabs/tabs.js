import React from "react";
import css from "./tabs.module.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import cn from "classnames";
const Tabs = ({ state, tabs }) => {
  // const liClasses = ["button", "button_one", "two", "three"];
  return (
    <div className={css.filter}>
      <button
        style={{
          background: state.buttons[0] && "#2196F3",
          color: state.buttons[0] && "#FFF",
        }}
        id={"0"}
        className={cn(css.button, css.button_one)}
        onClick={(event) => tabs(event.target.id)}
      >
        Самый дешевый
      </button>
      <button
        style={{
          background: state.buttons[1] && "#2196F3",
          color: state.buttons[1] && "#FFF",
        }}
        id={"1"}
        className={cn(css.button, css.button_two)}
        onClick={(event) => tabs(event.target.id)}
      >
        Самый быстрый
      </button>
      <button
        style={{
          background: state.buttons[2] && "#2196F3",
          color: state.buttons[2] && "#FFF",
        }}
        id={"2"}
        className={cn(css.button, css.button_three)}
        onClick={(event) => tabs(event.target.id)}
      >
        Оптимальный
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, actions)(Tabs);
