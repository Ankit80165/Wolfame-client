import React from "react";
// COmponents imports
import ContactCard from "./ContactCard";
// CSS imports
import "../styles/Contacts.css";
const CONTACTS = [
  {
    name: "Ankit Majhi",
    instaLink: "https://www.instagram.com/camelcase_guy_/",
    facebookLink: "https://www.facebook.com/profile.php?id=100009383132996",
    mailId: "ankit.majhirisen357@gmail.com",
    phone: "8016554262",
    image: "imgs/Ankit.JPG",
  },
  {
    name: "Saptarshi Mukherjee",
    instaLink: "https://www.instagram.com/camelcase_guy_/",
    facebookLink: "https://www.facebook.com/profile.php?id=100009383132996",
    mailId: "ankit.majhirisen357@gmail.com",
    phone: "8016554263",
    image: "imgs/Ankit.JPG",
  },
  {
    name: "Manvendra Rajpoot",
    instaLink: "https://www.instagram.com/camelcase_guy_/",
    facebookLink: "https://www.facebook.com/profile.php?id=100009383132996",
    mailId: "ankit.majhirisen357@gmail.com",
    phone: "8016554264",
    image: "imgs/Ankit.JPG",
  },
];
class Contacts extends React.Component {
  renderItems() {
    return CONTACTS.map((contact, index) => {
      return (
        <React.Fragment key={contact.phone}>
          <ContactCard contact={contact} />
        </React.Fragment>
      );
    });
  }
  render() {
    return (
      <div className="container" style={{ margin: "0 auto", height: "100vh" }}>
        <div className="wrapper">{this.renderItems()}</div>
      </div>
    );
  }
}

export default Contacts;
