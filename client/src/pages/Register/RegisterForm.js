import React from "react";

export class RegistrationForm extends React.Component {
  render() {
    return (
      <div>RegistrationForm</div>
    )
  }
}

// export class RegisterForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: ""
//     };
//   }

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     })
//   };

//   handleSubmit = event => {
//     console.log("Entering handleSubmit")
//     event.preventDefault();
//     this.setState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: ""
//     });
//     fetch("/user", {
//       method: "POST",
//       data: {
//         firstName: this.refs.firstName,
//         lastName: this.refs.lastName,
//         email: this.refs.email,
//         password: this.refs.password
//       }
//     })
//     .then(res => {
//       return res.json();
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   };

//   render() {
//     const { firstName, lastName, email, password } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           name="firstName"
//           type="text"
//           placeholder="Enter your first name"
//           value={firstName}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="lastName">lastName</label>
//         <input
//           name="lastName"
//           type="text"
//           placeholder="Enter your last name"
//           value={lastName}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           name="email"
//           type="text"
//           placeholder="Enter your email"
//           value={email}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={this.handleChange}
//         />
//         {/* <button type="submit" href="/home" onClick={this.handleSubmit}>Submit</button> */}
//       </form>
//     );
//   }
// }