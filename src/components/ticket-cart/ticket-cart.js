import React, { useEffect } from "react";
import css from "./ticket-cart.module.scss";
import ApiService from "../../services/api-service";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { Ticket } from "../ticket/ticket";
import Spinner from "../spin/spin";
import ShowMoreButton from "../show-more-button/show-more-button";

const TicketCart = ({ state, addTickets, loading }) => {
  const apiService = new ApiService();

  useEffect(() => {
    loading(true);
    apiService
      .getTickets()
      .then((res) => addTickets(res.tickets))
      .then(() => {
        loading(false);
      });
  }, []);

  let ticketsArr = state.tickets;
  if (
    state.checkBox[4] &&
    state.checkBox[1] &&
    state.checkBox[2] &&
    !state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 2 &&
        item.segments[1].stops.length !== 2,
    );
  }
  //0,1 и 3 пересадок
  if (
    state.checkBox[4] &&
    state.checkBox[1] &&
    !state.checkBox[2] &&
    state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 1 &&
        item.segments[1].stops.length !== 1,
    );
  }
  //0,2 и 3 пересадок
  if (
    state.checkBox[4] &&
    !state.checkBox[1] &&
    state.checkBox[2] &&
    state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 0 &&
        item.segments[1].stops.length !== 0,
    );
  }
  //1,2 и 3 пересадок
  if (
    !state.checkBox[4] &&
    state.checkBox[1] &&
    state.checkBox[2] &&
    !state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 3 &&
        item.segments[0].stops.length !== 2 &&
        item.segments[1].stops.length !== 3 &&
        item.segments[1].stops.length !== 2,
    );
  }
  //1 и 0 пересадок
  if (
    !state.checkBox[4] &&
    state.checkBox[1] &&
    !state.checkBox[2] &&
    state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 3 &&
        item.segments[0].stops.length !== 1 &&
        item.segments[1].stops.length !== 3 &&
        item.segments[1].stops.length !== 1,
    );
  }
  //2 и 0 пересадка
  if (
    !state.checkBox[4] &&
    !state.checkBox[1] &&
    state.checkBox[2] &&
    state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 0 &&
        item.segments[0].stops.length !== 3 &&
        item.segments[1].stops.length !== 0 &&
        item.segments[1].stops.length !== 3,
    );
  }
  //1 и 2 пересадки

  if (
    state.checkBox[4] &&
    state.checkBox[1] &&
    !state.checkBox[2] &&
    !state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 1 &&
        item.segments[0].stops.length !== 2 &&
        item.segments[1].stops.length !== 1 &&
        item.segments[1].stops.length !== 2,
    );
  }
  //3 и 0 пересадок
  if (
    state.checkBox[4] &&
    !state.checkBox[1] &&
    state.checkBox[2] &&
    !state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length !== 0 &&
        item.segments[0].stops.length !== 2 &&
        item.segments[1].stops.length !== 0 &&
        item.segments[1].stops.length !== 2,
    );
  }
  //3 и 1 пересадка
  if (
    state.checkBox[4] &&
    !state.checkBox[1] &&
    !state.checkBox[2] &&
    state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length >= 2 &&
        item.segments[1].stops.length >= 2,
    );
  }
  //3 и 2 пересадки

  if (
    state.checkBox[4] &&
    !state.checkBox[1] &&
    !state.checkBox[2] &&
    !state.checkBox[3]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length === 3 &&
        item.segments[1].stops.length === 3,
    );
  }
  //3 пересадки
  if (
    state.checkBox[3] &&
    !state.checkBox[1] &&
    !state.checkBox[2] &&
    !state.checkBox[4]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length === 2 &&
        item.segments[1].stops.length === 2,
    );
  }
  //2 пересадки

  if (
    state.checkBox[2] &&
    !state.checkBox[1] &&
    !state.checkBox[3] &&
    !state.checkBox[4]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length === 1 &&
        item.segments[1].stops.length === 1,
    );
  }
  //1 пересадка
  if (
    state.checkBox[1] &&
    !state.checkBox[2] &&
    !state.checkBox[3] &&
    !state.checkBox[4]
  ) {
    ticketsArr = state.tickets.filter(
      (item) =>
        item.segments[0].stops.length === 0 &&
        item.segments[1].stops.length === 0,
    );
  }
  // без пересадок
  if (
    !state.checkBox[1] &&
    !state.checkBox[2] &&
    !state.checkBox[3] &&
    !state.checkBox[4]
  ) {
    return (
      <div className={css.noTickets}>
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    );
  }
  // без фильтров

  return (
    <div className={css.wrapper}>
      {state.loading && <Spinner size={"large"} />}

      {ticketsArr.map((item, index) => {
        if (index < state.pageSize)
          return (
            <li key={index}>
              <Ticket item={item} />
            </li>
          );
      })}
      {!state.loading && <ShowMoreButton />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, actions)(TicketCart);
