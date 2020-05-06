import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import './UserForm.css';

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

class UserForm extends Component {
    handleSubmit(values) {
        fetch('http://localhost:3001/submit', {
            method: 'POST',
            body: JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response.data)))
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
          <div className="UserForm">
            <Form onSubmit={this.handleSubmit}>
              {({ handleSubmit }) => (
                <div>
                  <form onSubmit={handleSubmit} className="form-space">
                    <div className="data">
                      <label>
                        Username
                        <Field
                          id="username"
                          type="text"
                          name="username"
                          placeholder="username"
                          component="input"
                        />
                      </label>
                      <label>
                        Driver's License
                        <Field
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          component="input"
                        />
                        <Field
                          id="licenseNo"
                          type="text"
                          name="licenseNo"
                          placeholder="License Number"
                          component="input"
                        />
                        <Field
                          id="age"
                          type="number"
                          name="age"
                          placeholder="Age"
                          component="input"
                        />
                        <Field
                          id="birthdate"
                          type="date"
                          name="birthdate"
                          placeholder="Birthdate"
                          component="input"
                        />
                        <Field
                          id="address"
                          type="text"
                          name="address"
                          placeholder="Address"
                          component="input"
                        />
                      </label>
                    </div>
                    <div className="data">
                      <label>Bar</label>
                      <Field
                        id="barname"
                        type="text"
                        name="barname"
                        placeholder="Bar Name"
                        component="input"
                      />
                      <Field
                        id="barAddress"
                        type="text"
                        name="barAddress"
                        placeholder="barAddress"
                        component="input"
                      />
                    </div>
                    <div className="form-space">
                      <div className="data">
                        <div>
                          <label>Remedy</label>
                          <div>
                            <label>
                              <Field
                                id="home"
                                name="remedy"
                                component="input"
                                type="radio"
                                value="home"
                              />{" "}
                              Home
                            </label>
                            <label>
                              <Field
                                id="pharm"
                                name="remedy"
                                component="input"
                                type="radio"
                                value="pharm"
                              />{" "}
                              Pharmaceutical
                            </label>
                          </div>
                        </div>
                      </div>
                      <Condition when="remedy" is="home">
                        <div>
                          <label>Info</label>
                          <Field
                            id="info"
                            name="info"
                            component="input"
                            type="text"
                            placeholder="Information &amp; Instructions"
                          />
                          <label>Ingredients</label>
                          <Field
                            id="ingredients"
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
                            id="med"
                            name="med"
                            component="input"
                            type="text"
                            placeholder="Name of medication"
                          />
                          <label>Doses</label>
                          <Field
                            id="dose"
                            name="dose"
                            component="input"
                            type="text"
                            placeholder="Doses"
                          />
                        </div>
                      </Condition>
                    </div>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              )}
            </Form>
          </div>
        );
    }
}
export default UserForm;