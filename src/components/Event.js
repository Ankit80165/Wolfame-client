import React from "react";
import { Link } from "react-router-dom";
// importing CSS files
import "../styles/Event.css";

const Event = ({ event }) => {
  const renderRules = () => {
    return event.eventRules.map((rule, index) => {
      return <p key={rule}>{`${index + 1}. ${rule}`}</p>;
    });
  };
  return (
    <div>
      <article className="postcard light blue">
        <a className="postcard__img_link" href="/">
          <img
            className="postcard__img"
            src={event.eventImageLink}
            alt="Title"
          />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title blue">
            <a href="/">{event.eventName}</a>
          </h1>
          <div className="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
            </time>
          </div>
          <div className="postcard__preview-txt"></div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <Link to={`/events/${event.eventName.toLowerCase()}`}>
                <i class="bi bi-controller"></i> More Details
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Event;
