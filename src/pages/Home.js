import React from "react";
import Header from "../components/Headers";
import background from "../static/home_background.png";

class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
  };

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === "enter",
    });
  };

  render() {
    return [
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "950px",
          backgroundSize: "100% 100%",
        }}
      >
        <Header />

        <div
          style={{
            fontSize: "55px",
            textAlign: "left",
            marginTop: "100px",
            marginLeft: " 200px",
          }}
        >
          Let's Hunt For Your Dream Residence
        </div>
        <div
          style={{
            fontSize: "20px",
            textAlign: "left",
            marginTop: "20px",
            marginLeft: " 200px",
          }}
        >
          Explore our range of beautiful properties with the addition of
          separate accommodation suitable for you.
        </div>
        <div id="search">
          <div
            style={{
              fontSize: "20px",
              textAlign: "left",
              marginTop: "20px",
              marginLeft: " 200px",
            }}
          >
            Rental Location
          </div>
        </div>
      </div>,
    ];
  }
}
export default Home;
