import React from "react";
import { useSpring, animated } from "react-spring";
import AnimatedText from "react-animated-text-content";
// Component imports
// CSS imports
import "../styles/Home.css";

const Home = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  return (
    <React.Fragment>
      <div className="row-outer">
        <div className="home-main-div">
          <h1 className="name">WOLFENDEN HALL</h1>
          <h3 className="presents">Presents</h3>
          <div className="third">
            <AnimatedText
              type="chars"
              interval={0.04}
              duration={0.8}
              tag="h1"
              animation={{
                y: "100px",
                ease: "ease",
                scale: 10,
              }}
              className="animated-text"
            >
              WOLFAME
            </AnimatedText>
            <AnimatedText
              type="words"
              tag="h3"
              animationType="throw"
              interval={0.1}
              className="animated-h3"
            >
              14th, 15th And 16th April, 2022
            </AnimatedText>
          </div>
        </div>
      </div>
      <div className="container-fluid next-content-holder">
        <h1 className="hall">ABOUT WOLFENDEN HALL</h1>
        <div className="row about-hall-outer">
          <div className="col-md-4 image-of-hall">
            <img src={"imgs/wolfenden-hall.jpg"} alt="hall" />
          </div>
          <div className="col-md-8 about-hall">
            <p>
              The Boarders are called Wolves, jokingly. This is the Hall, most
              glamourous, where the most extrovert would go.It is not the Hostel
              for the studious type! People who had left a mark or wanted to
              make a mark preferred this hostel. It has an aura about it an is
              located right across the Oval ground. It used to be an expensive
              Hostel, so far as food bills are concerned. During College
              Re-unions, one could find the whole front of the Hostel would get
              illuminated with the colorful bulbs to look great from a
              distance.Here, final and pre-final years' Students are allowed to
              stay.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid last-content-holder">
        <h1 className="wolfame">ABOUT WOLFAME</h1>
        <div className="row about-hall-outer">
          <div className="col-md-8 about-wolfame">
            <p>
              The Boarders are called Wolves, jokingly. This is the Hall, most
              glamourous, where the most extrovert would go.It is not the Hostel
              for the studious type! People who had left a mark or wanted to
              make a mark preferred this hostel. It has an aura about it an is
              located right across the Oval ground. It used to be an expensive
              Hostel, so far as food bills are concerned. During College
              Re-unions, one could find the whole front of the Hostel would get
              illuminated with the colorful bulbs to look great from a
              distance.Here, final and pre-final years' Students are allowed to
              stay.
            </p>
            <button>Read More about Wolfame</button>
          </div>
          <div className="col-md-4 image-of-wolfame">
            <img src={"imgs/wolfenden-hall.jpg"} alt="hall" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
