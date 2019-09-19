import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class BasicInfo extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    eMail: "",
    verifyEmail: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const styles = {
      width: "75%",
      height: "550px",
      margin: "0 auto"
    };

    const back = {
      color: "#f26c32",
      position: "absolute",
      top: "270px",
      left: "18%"
    };

    const { state, props } = this;

    return (
      <div style={styles}>
        <Link to="/">
          <i style={back} class="fas fa-chevron-circle-left fa-5x"></i>
        </Link>
        <h1>First, what’s your name and email?</h1>
        <br />
        <p>
          We will send you a copy of your recommended screenings and preventive
          care.
        </p>
        <form onSubmit={e => this.props.handleInfoClick(e, state, props)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="eMail"
                placeholder="Email Name"
                className="form-control"
                value={this.state.eMail}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                name="verifyEmail"
                placeholder="Verify Email"
                className="form-control"
                value={this.state.verifyEmail}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <button type="submit">
            Next
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
    handleInfoClick: (e, formData, props) => {
      const { firstName, lastName, eMail } = formData;
      console.log("Handling info click");
      e.preventDefault();
      console.log(firstName, lastName, eMail);

      dispatch({
        type: "UPDATE_BASIC_INFO",
        value: {
          firstName: firstName,
          lastName: lastName,
          eMail: eMail
        }
      });
      props.history.push("/age");
    }
  };
};

// Adding second argument mapDispatchToProps is optional if
// we are not dispatching actions in this component:

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfo);
