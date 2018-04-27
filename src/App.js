import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./static/css/App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Editable from "./components/Editable";


// first we will make a new context
const MyContext = React.createContext();
// Then create a provider Component
// WHere data lives
class MyProvider extends Component {
  state = {
    name: "nadin",
    cool: true,
    age: 200
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class CV extends Component {
  render() {
    return (
      <div>
        <br />
        Go to step:
        <li>
          <Link to={`${this.props.match.url}/step1`}>Step 1</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/step2`}>Step 2</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/step3`}>Step 3</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/step4`}>Step 4</Link>
        </li>
        <Route path={`${this.props.match.url}/:stepId`} component={Step} />
      </div>
    );
  }
}

class Step extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.stepId}</h3>
        <MyContext.Consumer>
          {context => {
            return (
              <React.Fragment>
                <p>Age {context.state.age}</p>
                <p>Name {context.state.name}</p>
                <button onClick={context.growAYearOlder}>asdas</button>
              </React.Fragment>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

const isFieldEmpty = element => element.innerText.trim() === "";


class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      data: props.initialData || {}
    };
  }

  nextStep = data => {
    this.setState(state => ({
      step: Math.min(state.step + 1, this.props.children.length - 1),
      data: data // just data
    }));
  };

  handleChange = (e) => {
    console.log(e.target.value);
  }


  render() {
    const { children } = this.props;
    const { step, data } = this.state;
    const activePage = React.Children.toArray(children)[step];

    return (
      <div>
        <Header />
        <main>
        <div class="container">
          <form>
          <header>
            <Editable maxLength={50}
                      cols={3}
                      row={1}
                      width={200}
                      placeHolder="Your name"
                      onChange={this.handleChange}
                      name="Name"
                      style={{border: "1px solid red"}}
            />

            <Editable disabled maxLength={50}
                      cols={3}
                      row={1}
                      width={200}
                      placeholder="Your name"
                      onChange={this.handleChange}
                      name="Name"
                      style={{border: "1px solid red"}}
            />

            <Editable maxLength={50}
                      cols={3}
                      row={1}
                      width={200}
                      placeHolder="Your name"
                      onChange={this.handleChange}
                      name="Name"
                      style={{border: "1px solid red"}}
            />
          </header>
          {activePage}
          </form>
        </div>
        </main>
        <Footer className="site-footer">
            5 quick steps to Enhancv. First, type your name.
            <button onClick={() => console.log("clicked next")}>Next</button>
        </Footer>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export class App extends Component {
  state = {
    name: "nadin",
    age: 100,
    cool: true
  };

  //<Route exact path="/" component={Home} />
  // <Route path="/CV" component={CV} />

  render() {
    return (
      <Router>
        <MyProvider>
          <div className="flexbox-container">

            <Tutorial />

          </div>
        </MyProvider>
      </Router>
    );
  }
}
