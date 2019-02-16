import React, { Component } from 'react';
import { Close } from "@material-ui/icons";
import { Switch, Notification } from "./components";
import { Collapsible, StepForm, SearchableDropdown } from "./modules";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    showNotification: true
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img style={{ width: 50, height: 50 }} src={logo} className="App-logo" alt="logo" />
          Components

            <Collapsible title={"List of Icons"}>
              <Close />
            </Collapsible>
          <Notification message={"Hi!"} show={this.state.showNotification} onClose={() => this.setState({ showNotification: false })} />
          <Switch label={"Toggle me"} onActive={() => alert("I'm toggled!")}/>
        </header>
      </div>
    );
  }
}

export default App;
