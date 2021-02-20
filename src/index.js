import React, { Component } from "react";
import ReactDOM from "react-dom";

// class App extends React.Component
class App extends Component {
  // state = {};
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      // failure callback
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
