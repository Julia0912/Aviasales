import React from "react";
import css from "./show-more-button.module.scss";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
const ShowMoreButton = ({ showMore }) => {
  return (
    <button onClick={() => showMore()} className={css.showMoreButton}>
      Показать еще 5 билетов!
    </button>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, actions)(ShowMoreButton);
