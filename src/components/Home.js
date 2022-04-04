import React from "react";
import { useSpring, animated } from "react-spring";
import AnimatedText from "react-animated-text-content";
// CSS imports
import "../styles/Home.css";

const Home = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className="col-image__first">
            <img alt="wolf" src="wolf-home-half.png" className="float-right" />
          </div>
        </div>
        <div className="col-6 main-div">
          <div className="first">
            <animated.h1 style={props}>WOLFENDEN HALL</animated.h1>
          </div>
          <div className="second">
            <h4>Presents</h4>
          </div>
          <div className="third">
            <AnimatedText
              type="chars"
              interval={0.04}
              duration={0.8}
              animation={{
                y: "100px",
                ease: "ease",
                scale: 10,
              }}
              className="animated-text"
            >
              WOLFAME
            </AnimatedText>
          </div>
        </div>
        <div className="col-3">
          <div className="col-image__first">
            <img alt="wolf" src="skull-home.png" className="float-left" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h3>ABOUT WOLFENDEN HALL</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            venenatis interdum. Nunc pretium nunc id erat mollis sollicitudin.
            In molestie quam eget purus mollis malesuada. Pellentesque a dolor
            lacus. Fusce pretium sollicitudin lorem eu viverra. Sed faucibus
            fringilla elementum. Duis aliquam enim id ultricies tristique. Sed
            efficitur eu purus tempor gravida. Sed pulvinar vestibulum neque non
            pulvinar. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur lectus lorem,
            tempus quis faucibus vitae, tincidunt vitae elit. Donec bibendum,
            odio at posuere laoreet, ligula mi porta turpis, at varius turpis
            dolor a dui. Morbi gravida diam sagittis eros sollicitudin, iaculis
            blandit magna porta. Phasellus ornare risus felis, id congue mauris
            posuere vel. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent dignissim cursus lorem non facilisis. Vestibulum
            id neque turpis. Ut quis cursus nulla. Fusce elementum pretium
            libero rhoncus hendrerit. Aliquam id est dictum, porttitor orci
            quis, suscipit dolor.
          </p>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h3>ABOUT WOLFAME</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            venenatis interdum. Nunc pretium nunc id erat mollis sollicitudin.
            In molestie quam eget purus mollis malesuada. Pellentesque a dolor
            lacus. Fusce pretium sollicitudin lorem eu viverra. Sed faucibus
            fringilla elementum. Duis aliquam enim id ultricies tristique. Sed
            efficitur eu purus tempor gravida. Sed pulvinar vestibulum neque non
            pulvinar.
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
export default Home;
