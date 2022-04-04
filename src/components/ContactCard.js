import React from "react";
// CSS imports
import "../styles/ContactCard.css";

const ContactCard = ({ contact }) => {
  return (
    <div className="img-wrapper">
      <img src={contact.image} alt={contact.name} />
      <h2>
        {contact.name}
        <br></br>
        {contact.phone}
      </h2>

      <ul>
        <li>
          <a href={contact.instaLink}>
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href={contact.facebookLink}>
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.mailId}`}>
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href={`tel:+91-${contact.phone}`}>
            <i className="fas fa-phone"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
