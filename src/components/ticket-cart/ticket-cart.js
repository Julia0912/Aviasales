import React, { useEffect } from "react";
import css from "./ticket-cart.module.scss";
import S7Logo from "../../pictures/S7 Logo.png";
import ApiService from "../../services/api-service";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { Ticket } from "../ticket/ticket";
const TicketCart = ({ state, addTickets }) => {
  const apiService = new ApiService();

  useEffect(() => {
    apiService.getTickets().then((res) => addTickets(res.tickets));
  }, []);

  const ticketsArr = state.tickets;
  console.log(ticketsArr);

  return (
    <div className={css.wrapper}>
      {ticketsArr.map((item, index) => {
        return (
          <li key={index}>
            <Ticket item={item} />
          </li>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, actions)(TicketCart);
