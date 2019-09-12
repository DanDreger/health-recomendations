import React from "react";
import { Link, Route } from "react-router-dom";
// import Age from "./age";

class BasicInfo extends React.Component {
  
  // commented out because Im implementing redux
  // state = {
  //   firstName: "",
  //   lastName: "",
  //   eMail: "",
  //   verifyEmail: ""
  // };

  basicInfoCollect = e => {
    e.preventDefault();
    const { firstName, lastName, eMail, verifyEmail } = this.state;
    console.log(firstName, lastName, eMail, verifyEmail);
  };

  handleInputChange = e => {
    console.log("input field name:", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const styles = {
      width: "90%",
      height: "550px",
      border: "1px dotted black",
      borderRadius: "5px",
      margin: "0 auto"
    };


// Map redux state values to props:
const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    eMail: state.eMail
  };
};

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange = e => {
      console.log("input field name:", e.target.name);
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    
    handleFirstNameChange = e => {
      dispatch({
        type: "UPDATE_FIRSTNAME",
        value: e.target.value
      })
    },
    handleLastNameChange = e => {
      dispatch({
        type: "UPDATE_LASTNAME",
        value: e.target.value
      })
    },
    handleEmailChange = e => {
      dispatch({
        type: "UPDATE_EMAIL",
        value: e.target.value
      })
    }
  };
};

    return (
      <div style={styles}>
        <Link to="/">Back A Page</Link>
        <h1>Basic Info Page</h1>
        <br />
        <h2>First, what’s your name and email?</h2>
        <p>
          We will send you a copy of your recommended screenings and preventive
          care.
        </p>
        <form onSubmit={this.basicInfoCollect}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="eMail"
            placeholder="Email Name"
            value={this.state.eMail}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="verifyEmail"
            placeholder="Verify Email"
            value={this.state.verifyEmail}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            Button
            {/* <Link to="/age">Advance To Age Page</Link> */}
          </button>
        </form>
        {/* <Route path="/age" component={Age} /> */}
      </div>
    );
  }
}

export default BasicInfo;
