import React from "react";
import { Link } from "react-router-dom";
// CSS imports
import styles from "../styles/Event.module.css";
const Event = ({ event }) => {
  let param = event.eventName.toLowerCase();
  param = param.replace(/ /g, "_");

  return (
    <li>
      <Link to="#" className={styles.card}>
        <img src={event.eventImageLink} className={styles.card__image} alt="" />
        <div className={styles.card__overlay}>
          <div className={styles.card__header}>
            <svg
              className={styles.card__arc}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path />
            </svg>
            <img
              className={styles.card__thumb}
              src={event.eventImageLink}
              alt=""
            />
            <div className={styles.card__header__text}>
              <h3 className={styles.card__title}>{event.eventName}</h3>
            </div>
          </div>
          <p className={styles.card__description}>
            Entry Fee :&nbsp;&nbsp;{event.entryFee}
            <br />
            Team Size :&nbsp;&nbsp;{event.entryFee}
            <br />
            <Link to={`/events/${param}`}>Other Details</Link>
          </p>
        </div>
      </Link>
    </li>
  );
};
export default Event;
