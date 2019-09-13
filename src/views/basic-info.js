import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";

// import Age from "./age";

class BasicInfo extends React.Component {
  
  state = {
    firstName: "",
    lastName: "",
    eMail: "",
    verifyEmail: ""
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
        <form onSubmit={(e)=>this.props.handleInfoClick(e, this.state)}>
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
            value={this.state.lastName}
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

// Map redux state values to props:
const mapStateToProps = state => {
return {
    firstName: state.firstName,
    lastName: state.lastName,
    eMail: state.eMail,
    verifyEmail: state.verifyEmail
  };
};

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
  return {
    handleInfoClick : (e, formData) => {
      const {firstName, lastName, eMail } = formData;
      console.log("Handling info click")
      e.preventDefault();
      console.log(firstName, lastName, eMail)

      dispatch({
        type: "UPDATE_BASIC_INFO",
        value: {
          firstName: firstName,
          lastName: lastName,
          email: eMail
        }
      })
    }
  }
};



// Adding second argument mapDispatchToProps is optional if
// we are not dispatching actions in this component:

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfo);
