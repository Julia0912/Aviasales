import React from "react";
import css from "./app.module.scss";
import Ticket from "../ticket/ticket";
import FilterList from "../filter-list/filter-list";
import TransplantFilter from "../ transplant-filter/transplant-filter";
import ShowMoreButton from "../show-more-button/show-more-button";
import Logo from "../logo/logo";

const App = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <TransplantFilter />
      <FilterList />
      <Ticket />
      <ShowMoreButton />
    </div>
  );
};
export default App;
