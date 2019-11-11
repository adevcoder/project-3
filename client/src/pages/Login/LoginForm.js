import React from "react";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}