import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const value = 100;
const element = <h1>Hello React {value}</h1>;

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

class Welcome1 extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

function WelcomeMany(props) {
  return (
    <div>
      <Welcome name="Lesley Fernandez" />
      <Welcome name="Lesley Fernandez" />
      <Welcome name="Lesley Fernandez" />
      <Welcome name="Lesley Fernandez" />
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Clock">
        <h1>Clock</h1>
        <h2>Current time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(
  <Welcome name="Lesley Fernandez" />,
  document.getElementById("root")
);

ReactDOM.render(
  <Welcome1 name="Lesley Fernandez" />,
  document.getElementById("root")
);

ReactDOM.render(<WelcomeMany />, document.getElementById("root"));

ReactDOM.render(<Clock />, document.getElementById("root"));
