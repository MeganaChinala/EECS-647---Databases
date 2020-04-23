import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm/UserForm'

class App extends Component{
  state = {
    users: [],
    topRemedies: [],
    topBars: []
  }

  componentDidMount() {
    this.getUsers();
    this.getTopBars();
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

  getTopBars = _ => {
    fetch('http://localhost:3001/topBars')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({topBars: data})
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
          <UserForm/>
        <div>
          <h2>Users</h2>
          {this.state.users.map(user => <p key={user.id}>{user.username}</p>)}
          <h2>Top Bars</h2>
          {this.state.topBars.map(bar => <p>{bar.name}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
