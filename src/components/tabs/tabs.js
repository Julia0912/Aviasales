import React from "react";
import css from "./tabs.module.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
const Tabs = ({ state, tabs }) => {
  return (
    <div className={css.filter}>
      <button
        style={{ background: state.buttons[0] && "#2196F3" }}
        id={"0"}
        className={css.button}
        onClick={(event) => tabs(event.target.id)}
      >
        Самый дешевый
      </button>
      <button
        style={{ background: state.buttons[1] && "#2196F3" }}
        id={"1"}
        className={css.button}
        onClick={(event) => tabs(event.target.id)}
      >
        Самый быстрый
      </button>
      <button
        style={{ background: state.buttons[2] && "#2196F3" }}
        id={"2"}
        className={css.button}
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
