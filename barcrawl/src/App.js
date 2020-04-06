import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Field } from 'react-final-form'

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2))
}

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
        <div className="form">
          <Form
            onSubmit={onSubmit}
            allowNull
          >
            {({ form }) => (
              <form>
                <label>
                  Username:
                  <input type="text" name="name" />
                </label>
                <label>
                  Bar:
                  <input type="text" name="name" placeholder="name"/>
                  <input type="text" name="address" placeholder="address"/>
                </label>
                <div>
                  <label>Remedy</label>
                  <div>
                    <label>
                      <Field
                        name="remedy"
                        component="input"
                        type="radio"
                        value="home"
                      />{' '}
                      Home
                    </label>
                    <label>
                      <Field
                        name="remedy"
                        component="input"
                        type="radio"
                        value="pharm"
                      />{' '}
                      Pharmaceutical
                    </label>
                  </div>
                </div>
                <Condition when="remedy" is="home">
                  <div>
                    <label>Info</label>
                    <Field
                      name="info"
                      component="input"
                      type="text"
                      placeholder="Information & Instructions"
                    />
                    <label>Ingredients</label>
                    <Field
                      name="ingredients"
                      component="input"
                      type="text"
                      placeholder="Ingredients"
                    />
                  </div>
                </Condition>
                <Condition when="remedy" is="pharm">
                  <div>
                    <label>Name</label>
                    <Field
                      name="med"
                      component="input"
                      type="text"
                      placeholder="Name of medication"
                    />
                    <label>Doses</label>
                    <Field
                      name="dose"
                      component="input"
                      type="text"
                      placeholder="Doses"
                    />
                  </div>
                </Condition>
                {/* <input type="submit" value="Submit" /> */}
              </form>
            )}
          </Form>
        </div>
        <div>
          <h1>Data</h1>
          {this.state.users.map(user => <p key={user.id}>{user.id}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
