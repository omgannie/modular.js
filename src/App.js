import React, { Component } from 'react';
import {
    Switch,
    Notification,
    Tip,
} from "./components";
import {
    Collapsible,
    StepForm,
    SearchableDropdown,
    ParallaxBlur,
    Draggable,
    DropArea
} from "./modules";
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
            <Collapsible title={"List of Icons"}>
                <Notification message={"Hi!"} show={this.state.showNotification} onClose={() => this.setState({ showNotification: false })} />
                <Switch label={"Toggle me"} onActive={() => alert("I'm toggled!")}/>
            </Collapsible>

            <Draggable>
                <div>
                    Hiiiii I'm Draggable
                </div>
            </Draggable>
            <DropArea><div>Hi I'm the Drop area</div></DropArea>
            <Tip onClick={() => {}}>
                here's a tip
            </Tip>
        </header>
      </div>
    );
  }
}

export default App;
