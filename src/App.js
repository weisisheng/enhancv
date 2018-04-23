import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./static/css/App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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

  render() {
    return (
      <Router>
        <MyProvider>
          <div className="flexbox-container">
            <Header />
            <main>
              <div class="container">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/CV">CV</Link>
                  </li>
                </ul>
                bla?
                <Route exact path="/" component={Home} />
                <Route path="/CV" component={CV} />
              </div>
            </main>
            <Footer className="site-footer">some text</Footer>
          </div>
        </MyProvider>
      </Router>
    );
  }
}
