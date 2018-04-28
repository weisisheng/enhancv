import React, { Component } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./static/css/App.css";

class CV extends React.Component {
  handleChange = e => {
    console.log(e.target);
  };
  render() {
    const { activeStep } = this.props;
    return <div>{this.props.children}</div>;
  }
}

export class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nadin",
      age: 100,
      cool: true,
      activeStep: 0,
      shallPass: false
    };

    this.onChange = this.onChange.bind(this);

  }

  triggerNext(e) {
    console.log("Go next");
  }

  onChange(e) {
    console.log(e.target.value);

    if (e.target.value.length > 3) {
      this.setState({
        shallPass: true,
        unlockStep: 2
      });
    }
  }

  render() {
    const { activeStep, shallPass } = this.state;

    return (
      <div>
        <Header activeStep={activeStep} />

        <CV activeStep={activeStep}>
          <input placeholder="Name" onChange={this.onChange} />

        </CV>

        <Footer>
          {shallPass && <button onClick={this.triggerNext}>Next</button>}
        </Footer>
      </div>
    );
  }
}
