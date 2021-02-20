import React, { Component } from "react";
import ReactDOM from "react-dom";

// class App extends React.Component
class App extends Component {
  // state = {};
  constructor(props) {
    super(props);

    this.state = { lat: null };
    
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => {
        this.setState({ lat: position.coords.latitude})
      },
      // failure callback
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
