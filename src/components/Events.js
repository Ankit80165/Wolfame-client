import React from "react";
import Event from "./Event";

// GLOBAL EVENTS ARRAY
const EVENTS = [
  {
    eventName: "Football",
    eventRules: [
      "A player who has played in one team is not allowed to play in another team.",
      "This tournament would be played with Green Vicky Tennis ball. ",
      "League matches would be of 8 overs & knockout matches (QF, SF and Final) will be of 10 overs a side",
      "Minimum of 7 players are required from a team to start the match. Failure to do so would yield a walkover to the opposition team. Remaining players must arrive within 5 overs. In case of a failure only the fielded 7 would be allowed to bat. ",
    ],
    eventOrganizers: [
      "Ankit Kumar Majhi",
      "Neel Diganta Vhadra",
      "Saptarshi Mukerjee",
    ],
    eventImageLink: "imgs/cricket.jpg",
  },
  {
    eventName: "Cricket",
    eventRules: [
      "A player who has played in one team is not allowed to play in another team.",
      "This tournament would be played with Green Vicky Tennis ball. ",
      "League matches would be of 8 overs & knockout matches (QF, SF and Final) will be of 10 overs a side",
      "Minimum of 7 players are required from a team to start the match. Failure to do so would yield a walkover to the opposition team. Remaining players must arrive within 5 overs. In case of a failure only the fielded 7 would be allowed to bat. ",
    ],
    eventOrganizers: [
      "Ankit Kumar Majhi",
      "Neel Diganta Vhadra",
      "Saptarshi Mukerjee",
    ],
    eventImageLink: "imgs/cricket.jpg",
  },
  {
    eventName: "Vollyball",
    eventRules: [
      "A player who has played in one team is not allowed to play in another team.",
      "This tournament would be played with Green Vicky Tennis ball. ",
      "League matches would be of 8 overs & knockout matches (QF, SF and Final) will be of 10 overs a side",
      "Minimum of 7 players are required from a team to start the match. Failure to do so would yield a walkover to the opposition team. Remaining players must arrive within 5 overs. In case of a failure only the fielded 7 would be allowed to bat. ",
    ],
    eventOrganizers: [
      "Ankit Kumar Majhi",
      "Neel Diganta Vhadra",
      "Saptarshi Mukerjee",
    ],
    eventImageLink: "imgs/cricket.jpg",
  },
];
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
    return <div className="container">{this.renderEvents()}</div>;
  }
}

export default Events;
