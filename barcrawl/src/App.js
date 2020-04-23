import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm/UserForm'

class App extends Component{
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    // fetches some promise as a string
    // fetch is a stream object
    fetch('http://localhost:3001/user')
      // converts stream to json
      .then(response => {
        // returns a promise
        return response.json()
      })
      // resolves promise to usable type
      .then(data => {
        this.setState({users: data})
      })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
          <UserForm/>
        <div>
          <h1>Data</h1>
          {this.state.users.map(user => <p key={user.id}>{user.id}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
