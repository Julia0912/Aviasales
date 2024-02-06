import React from "react";
import css from "./app.module.scss";
import TicketCart from "../ticket-cart/ticket-cart";
import Tabs from "../tabs/tabs";
import TransfersFilter from "../transfers-filter/transfers-filter";

import Logo from "../logo/logo";

const App = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <TransfersFilter />
      <Tabs />
      <TicketCart />
    </div>
  );
};
export default App;
