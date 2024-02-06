import css from "./ticket.module.scss";
import React from "react";
import { format, addMinutes } from "date-fns";

export const Ticket = ({ item }) => {
  const transferQuantity = (arr) => {
    if (arr.length === 1) {
      return arr.length + " пересадка";
    }
    if (arr.length > 1 && arr.length < 5) {
      return arr.length + " пересадки";
    }
    if (arr.length === 0) {
      return "Без пересадок";
    }
    return arr.length;
  };
  const transferCities = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    return arr.join(", ");
  };
  const departureTime = (date) => format(new Date(date), "HH:mm");
  const getArrivalTime = (departure, timeInSky) => {
    const result = addMinutes(new Date(departure), timeInSky);
    return format(new Date(result), "HH:mm");
  };
  const durationTime = (duration) => {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    hours < 10 && (hours = `0${String(hours)}`);
    minutes < 10 && (minutes = `0${String(minutes)}`);
    return `${hours}ч ${minutes}м`;
  };
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.price}>{item.price} Р </div>
        <div className={css.logo}>
          <img
            className={css.logo_img}
            src={`//pics.avs.io/99/36/${item.carrier}.png`}
            alt="название авиакомпании"
          />
        </div>
      </div>
      <div className={css.flight_info}>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>
            {item.segments[0].origin} – {item.segments[0].destination}
          </div>
          <div className={css.black_text}>
            {departureTime(item.segments[0].date)} -{" "}
            {getArrivalTime(item.segments[0].date, item.segments[0].duration)}
          </div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}> в пути</div>
          <div className={css.black_text}>
            {durationTime(item.segments[0].duration)}
          </div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>
            {transferQuantity(item.segments[0].stops)}
          </div>
          <div className={css.black_text}>
            {transferCities(item.segments[0].stops)}
          </div>
        </div>
      </div>
      <div className={css.flight_info}>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>
            {" "}
            {item.segments[1].origin} – {item.segments[1].destination}
          </div>
          <div className={css.black_text}>
            {" "}
            {departureTime(item.segments[1].date)} -{" "}
            {getArrivalTime(item.segments[1].date, item.segments[1].duration)}
          </div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}> в пути</div>
          <div className={css.black_text}>
            {" "}
            {durationTime(item.segments[1].duration)}
          </div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>
            {" "}
            {transferQuantity(item.segments[1].stops)}
          </div>
          <div className={css.black_text}>
            {" "}
            {transferCities(item.segments[1].stops)}
          </div>
        </div>
      </div>
    </div>
  );
};
