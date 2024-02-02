import React from "react";
import css from "./app.module.scss";
import TicketCart from "../ticket-cart/ticket-cart";
import Tabs from "../tabs/tabs";
import TransfersFilter from "../transfers-filter/transfers-filter";
import ShowMoreButton from "../show-more-button/show-more-button";
import Logo from "../logo/logo";

const App = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <TransfersFilter />
      <Tabs />
      <TicketCart />
      <ShowMoreButton />
    </div>
  );
};
export default App;
