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
    image: "imgs/members/Ankit.JPG",
  },
  {
    name: "Saptarshi Mukherjee",
    instaLink: "",
    facebookLink: "",
    mailId: "saptarishi.m@gmail.com",
    phone: "7063495175",
    image: "imgs/members/",
  },
  {
    name: "Manvendra Rajpoot",
    instaLink: "https://www.instagram.com/manveer45_/",
    facebookLink: "hhttps://www.facebook.com/manvendrajpoot.0/",
    mailId: "sinveer600@gmail.com",
    phone: "6387300553",
    image: "imgs/members/manvendrajpoot.jpg",
  },
  {
    name: "Aditya Beniwal",
    instaLink: "https://www.instagram.com/na/",
    facebookLink: "https://m.facebook.com/na/",
    mailId: "",
    phone: "",
    image: "imgs/members/",
  },
  {
    name: "Anindya Sen",
    instaLink: "https://www.instagram.com/a.sen_sational/",
    facebookLink: "https://www.facebook.com/aanindyasen",
    mailId: "iamanindyasen@gmail.com",
    phone: "7365876078",
    image: "imgs/members/AnindyaSen.jpeg",
  },
  {
    name: "Shaurya Rohilla",
    instaLink: "https://www.instagram.com/_.s._.r._.7/",
    facebookLink: "https://www.facebook.com/shauryarohilla",
    mailId: "shauryarohilla@gmail.com",
    phone: "9515717525",
    image: "imgs/members/ShauryaRohilla.jpg",
  },
  {
    name: "Vikram Hazra",
    instaLink: "https://www.instagram.com/hazravikram/",
    facebookLink: "https://m.facebook.com/na/",
    mailId: "ghazrasintu7@gmail.com",
    phone: "79382075510",
    image: "imgs/members/VikramHazra.jpg",
  },
  {
    name: "Gaurab Mondal",
    instaLink: "https://www.instagram.com/the_chocolate_boi/",
    facebookLink: "https://m.facebook.com/100011756799620/",
    mailId: "gauravmon75@gmail.com",
    phone: "7431894453",
    image: "imgs/members/GaurabMondal.jpg",
  },
  {
    name: "Samarth Khanna",
    instaLink: "https://www.instagram.com/na/",
    facebookLink: "https://www.facebook.com/na/",
    mailId: "samarthkhanna0@gmail.com",
    phone: "9810102750",
    image: "imgs/members/SamarthKhanna.jpg",
  },
  {
    name: "Ayanava Roy",
    instaLink: "https://www.instagram.com/na/",
    facebookLink: "https://www.facebook.com/na/",
    mailId: "",
    phone: "",
    image: "imgs/members/",
  },
  {
    name: "Anubhab Saha",
    instaLink: "https://www.instagram.com/thehappywine/",
    facebookLink: "https://m.facebook.com/100006874681661/",
    mailId: "anubhab.saha18@gmail.com",
    phone: "6289081708",
    image: "imgs/members/AnubhabSaha.jpg",
  },
  {
    name: "Saptashwa Shrabon",
    instaLink: "https://www.instagram.com/hardlyhuman_/",
    facebookLink: "https://www.facebook.com/souvik.sengupta.9237",
    mailId: "Saptashwa.shrabon@gmail.com",
    phone: "89073711266",
    image: "imgs/members/SaptashwaShrabon.jpg",
  },
  {
    name: "Debarun Nath",
    instaLink: "https://www.instagram.com/run_time_error13/",
    facebookLink: "https://www.facebook.com/debarun.nath.5",
    mailId: "debarunnath13@gmail.com",
    phone: "9382271495",
    image: "imgs/members/DEBARUN_NATH.jpg",
  },
  {
    name: "Purbayan Sarkar",
    instaLink: "https://www.instagram.com/thehappywine/",
    facebookLink: "https://m.facebook.com/100006874681661/",
    mailId: "purbayansar@gmail.com",
    phone: "8290411823",
    image: "imgs/members/PurbayanSarkar.jpeg",
  },
  {
    name: "Souvik Sengupta",
    instaLink: "https://www.instagram.com/s_sengupta_742/",
    facebookLink: "https://www.facebook.com/souvik.sengupta.9237",
    mailId: "ssengupta742@gmail.com",
    phone: "8250564473",
    image: "imgs/members/souviksengupta.jpeg",
  },
  {
    name: "Harsh Gupta",
    instaLink: "https://www.instagram.com/_highharsh_/",
    facebookLink: "https://www.facebook.com/na/",
    mailId: "harsh28harshgupta@gmail.com",
    phone: "8081872670",
    image: "imgs/members/HarshGupta.jpg",
  },
  {
    name: "Durgesh Dayal",
    instaLink: "https://www.instagram.com/durgesh.dayal.79",
    facebookLink: "https://www.facebook.com/na/",
    mailId: "durgadayal824217@gmail.com",
    phone: "8083844210",
    image: "imgs/members/DURGA_DAYAL.jpg",
  },
  {
    name: "Shrutanten",
    instaLink: "https://www.instagram.com/shrutanten/",
    facebookLink: "hhttps://www.facebook.com/na/",
    mailId: "510519048.shrutanten@students.iiests.ac.in",
    phone: "7014945978",
    image: "imgs/members/Shrutanten.jpg",
  },
  {
    name: "ALLAN DAVIS",
    instaLink: "https://www.instagram.com/_im.allan_/",
    facebookLink: "https://www.facebook.com/aanindyasen",
    mailId: "allandavis248@gmail.com",
    phone: "9330671577",
    image: "imgs/members/AllanDavis.jpg",
  },
  {
    name: "	Nishant Shekhu",
    instaLink: "https://www.instagram.com/nishant_shekhu/",
    facebookLink: "https://www.facebook.com/shauryarohilla",
    mailId: "nishantshekhu31869@gmail.com",
    phone: "7023284232",
    image: "imgs/members/NishantS.jpg",
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
        <h1 className="contact-first__header">Our Team</h1>
        <div className="wrapper">{this.renderItems()}</div>
      </div>
    );
  }
}

export default Contacts;
