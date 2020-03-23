import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';

class App extends Component {
  state = {
    username: 'andoresu'
  }

  usernameChangedHandler = (newUserName) => {
    this.setState({
      username: newUserName.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <UserInput
          changed={this.usernameChangedHandler}
          currentUsername={this.state.username}></UserInput>
        <UserOutput
          username = {this.state.username}></UserOutput>
        <UserOutput 
          username = {this.state.username}></UserOutput>
        <UserOutput
          username = "Drew"></UserOutput>

      </div>
    );
  }
  
}

export default App;
