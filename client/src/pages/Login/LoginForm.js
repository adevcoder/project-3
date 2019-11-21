import React from "react";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginError: ""
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
    fetch("/api/login", {
      method: "GET",
      data: {
        firstName: this.refs.firstName,
        lastName: this.refs.lastName
      }
    })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
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
<<<<<<< HEAD:client/src/components/Register/RegisterForm.js
        <button type="submit">Submittttt</button>
        <button className="btn btn-primary">click</button>
=======
        <button type="submit" href="/home" onClick={this.handleSubmit}>Submit</button>
        <span id="errorMsg"></span>
>>>>>>> 5224050a5c23ce3692ea18cd788ae9192c77bed9:client/src/pages/Login/LoginForm.js
      </form>
    );
  }
}