import React from "react";
import css from "./app.module.scss";
import Ticket from "../ticket/ticket";
import FilterList from "../filter-list/filter-list";
import TransfersFilter from "../transfers-filter/transfers-filter";
import ShowMoreButton from "../show-more-button/show-more-button";
import Logo from "../logo/logo";

const App = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <TransfersFilter />
      <FilterList />
      <Ticket />
      <ShowMoreButton />
    </div>
  );
};
export default App;
