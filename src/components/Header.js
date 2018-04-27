import React, { Component } from "react";

import ProgressBar from "./ProgressBar";
import { Button } from "./Button";

import logo from "../static/images/logo.svg";

export class Header extends Component {
  render() {
    return (
      <div class="site-head">
        <div className="site-logo">
          <img src={logo} alt="EnhanCV" />
        </div>
        <ProgressBar width={350} percent={50} />
        <Button className="button button-light" text="Sign in" />
      </div>
    );
  }
}
