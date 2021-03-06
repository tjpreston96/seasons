import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./components/Spinner/Spinner";


// class App extends React.Component
class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => this.setState({ lat: position.coords.latitude }),
      // failure callback
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message='Please accept location request'/>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
