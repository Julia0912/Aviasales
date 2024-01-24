import React from "react";
import css from "./ticket.module.scss";
import S7Logo from "../../pictures/S7 Logo.png";
const Ticket = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.header}>
          <div className={css.price}>13 400 Р </div>
          <div className={css.logo}>
            <img className={css.logo_img} src={S7Logo} alt="lable"></img>
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
    </div>
  );
};
export default Ticket;
