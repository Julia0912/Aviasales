import css from "./ticket.module.scss";
import S7Logo from "../../pictures/S7 Logo.png";
import React from "react";

export const Ticket = ({ item }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.price}>{item.price} Р </div>
        <div className={css.logo}>
          <img
            className={css.logo_img}
            src="http://pics.avs.io/width/height/iata.png"
            alt="lable"
          ></img>
        </div>
      </div>
      <div className={css.flight_info}>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>
            {item.segments[0].origin} – {item.segments[0].destination}
          </div>
          <div className={css.black_text}> 10:45 – 08:00</div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}> в пути</div>
          <div className={css.black_text}>21ч 15м</div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>2 пересадки</div>
          <div className={css.black_text}>HKG, JNB</div>
        </div>
      </div>
      <div className={css.flight_info}>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>MOW – HKT</div>
          <div className={css.black_text}> 10:45 – 08:00</div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}> в пути</div>
          <div className={css.black_text}>21ч 15м</div>
        </div>
        <div className={css.one_parameter}>
          <div className={css.gray_text}>1 пересадка</div>
          <div className={css.black_text}>HKG</div>
        </div>
      </div>
    </div>
  );
};
