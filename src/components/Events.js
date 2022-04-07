import React from "react";
import Event from "./Event";
// CSS imports
import "../styles/Events.css";
// DATA imports
import EVENTS from "../data/events";
class Events extends React.Component {
  renderEvents() {
    return EVENTS.map((event, index) => {
      return (
        <React.Fragment key={index}>
          <Event event={event} />
        </React.Fragment>
      );
    });
  }
  render() {
    console.log(EVENTS);
    return (
      <div className="container event-background__image">
        <h1 className="event-header">OUR EVENTS</h1>
        <div className={"events-wrapper"}>{this.renderEvents()}</div>
      </div>
    );
  }
}

export default Events;
