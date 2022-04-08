import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// CSS imports
import "../styles/ContactCard.css";

const ContactCard = ({ contact }) => {
  return (
    <div className="img-wrapper">
      <LazyLoadImage
        src={contact.image}
        alt={contact.name}
        effect="blur"
        placeholderSrc={process.env.PUBLIC_URL + "/placeholder-user.png"}
      />
      <h2>{contact.name}</h2>

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
