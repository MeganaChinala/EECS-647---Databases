import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'jade';

class App extends Component{
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch('http://localhost:3001')
      .then(response => console.log(response)) //response.json())
      .then(({
        response
      }) => this.setState({
        users: 'response.users'
      }))
      .catch(error => console.log(error));
  }

  showUsers = user => {
    user.username
  }

  render() {
    return (
      <div className="App">
        <h1>Messages</h1>
        <ul>
          {this.state.messages.map(message => <li key={message.id}>{message.sender}: {message.message}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
