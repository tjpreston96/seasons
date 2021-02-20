import React, { Component } from "react";
import ReactDOM from "react-dom";

// class App extends React.Component
class App extends Component {
  // state = {};
  constructor(props) {
    super(props);

    this.state = {lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => console.log(position),
      // failure callback
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
