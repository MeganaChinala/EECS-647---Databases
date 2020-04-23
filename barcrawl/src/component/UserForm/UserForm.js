import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import './UserForm.css';

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2))
}

class UserForm extends Component {
    render() {
        return (
          <div className="UserForm">
            <Form onSubmit={onSubmit} allowNull>
              {({ form }) => (
                <div>
                  <form className="form-space">
                    <div className="data">
                      <label>Username</label>
                      <input type="text" name="name" placeholder="username" />
                    </div>
                    <div className="data">
                      <label>Bar</label>
                      <input type="text" name="name" placeholder="name" />
                      <input type="text" name="address" placeholder="address" />
                    </div>
                    <div className="form-space">
                        <div className="data">
                        <div>
                            <label>Remedy</label>
                            <div>
                            <label>
                                <Field
                                name="remedy"
                                component="input"
                                type="radio"
                                value="home"
                                />{" "}
                                Home
                            </label>
                            <label>
                                <Field
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
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                  </form>
                </div>
              )}
            </Form>
          </div>
        );
    }
}
export default UserForm;