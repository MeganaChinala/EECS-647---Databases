import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './component/UserForm/UserForm'

class App extends Component{
  state = {
    users: [],
    topRemedies: [],
    topBars: [],
    remedies: [],
    underage: []
  }

  componentDidMount() {
    this.getUsers();
    this.getTopBars();
    this.getTopRemedies();
    this.getRemedies();
    this.getUnderage();
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

  getTopRemedies = _ => {
    fetch('http://localhost:3001/topRemedies')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({topRemedies: data})
      })
      .catch(error => console.log(error));
  }

  getRemedies = _ => {
    fetch('http://localhost:3001/remedies')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({remedies: data})
    })
    .catch(error => console.log(error));
  }

  getUnderage = _ => {
    fetch('http://localhost:3001/underage')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({underage: data})
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>BarCrawl</h1>
        <UserForm/>
        <div class="container">
          <div class="content">
            <h2>Users</h2>
            {this.state.users.map(user => <p key={user.id}>{user.username}</p>)}
          </div>
          <div class="content">
            <h2>Top Bars</h2>
            {this.state.topBars.map(bar => <p key={bar.id}>{bar.name}</p>)}
          </div>
          <div class="content">
            <h2>Top Remedies</h2>
            {this.state.topRemedies.map(remedy => <p key={remedy.id}>Suggestion: {remedy.name}<br/>Additional info: {remedy.dose}</p>)}
          </div>
          <div class="content">
            <h2>All Remedies</h2>
            {this.state.remedies.map(remedy => <p key={remedy.id}>Suggestion: {remedy.info}<br/>Additional info: {remedy.recipe}</p>)}
          </div>
          <div class="content">
            <h2>Underage</h2>
            {this.state.underage.map(underage => <p key={underage.id}>Name: {underage.name}<br/>User: {underage.username}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
