import React from "react";
// import { useSpring } from "react-spring";
import AnimatedText from "react-animated-text-content";
// Component imports
// CSS imports
import "../styles/Home.css";

const Home = () => {
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
              Wolfenden hall is one of the most unique Halls of IIESTS. Situated
              Across the Oval Ground and having a different construction with
              respect to other halls, it always has stood out from the rest.
              Allotted to Final and Pre Final Year UG students, Wolfenden Hall
              has always been a glamorous Hall with many events throughout the
              academic year. The Hall is beautifully Decorated during all these
              events and one can find all boarders working tirelessly to ensure
              that these events are a success. Even after graduating, one never
              forgets his stay here and that legacy is more than visible during
              the annual reunion of Boarders of Wolfenden Hall.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid last-content-holder">
        <h1 className="wolfame">ABOUT WOLFAME</h1>
        <div className="row about-hall-outer">
          <div className="col-md-8 about-wolfame">
            <p>
              Wolfame is the cultural sports festival organised by Wolfenden
              Hall annually. The three-day long event involves a plethora of
              sports activities, both indoor and outdoor, attended by
              enthusiastic students willing to prove their mettle. After 4
              years, the much anticipated festival has returned to reignite the
              spark of competition among the students and will be witnessed by
              more than 5000 people. It will commence on 14th April and will
              continue till 16th April of 2022.
            </p>
            <a
              style={{ color: "red", textDecoration: "underline" }}
              href="https://drive.google.com/file/d/1SaCovWDK-46uOwgzfTe3jTJ8EtZiyPmC/view?usp=sharing"
            >
              Read More about Wolfame
            </a>
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
