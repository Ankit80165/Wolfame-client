import React from "react";
import { useParams } from "react-router-dom";
// CSS imports
import "../styles/event-details.css";
// Imports Data
import RULES from "../data/rules";

const EventDetails = (props) => {
  const event = useParams();

  const renderRules = () => {
    const eventRules = RULES[event.name].rules;
    return eventRules.map((rule, index) => {
      return (
        <React.Fragment key={rule}>
          <p>
            <i class="fas fa-check-circle"></i>&nbsp;&nbsp;{rule}
          </p>
        </React.Fragment>
      );
    });
  };
  const renderEventCoOrdinators = () => {
    const eventOrganizers = RULES[event.name].contacts;
    return eventOrganizers.map((organizer) => {
      return (
        <React.Fragment key={organizer}>
          <p>
            <i class="fas fa-user-edit"></i>&nbsp;&nbsp;
            {organizer}
          </p>
        </React.Fragment>
      );
    });
  };
  return (
    <div className="image-holder">
      <h1 className="event-header">Short Pitch Cricket</h1>
      <div className="row">
        <div className="container col-md-8 event-details rules">
          <h4>RULES</h4>
          {renderRules()}
        </div>
        <div className="col-md-4 event-details organizers">
          <h4>CO-ORDINATORS</h4>
          {renderEventCoOrdinators()}
        </div>
      </div>
      <div className="registration">
        <button className="name noselect">REGISTER FOR THE EVENT</button>
      </div>
    </div>
  );
};

export default EventDetails;
