import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Age extends React.Component {
  state = {
    userAge: ""
  };

  handleInputChange = e => {
    console.log("input field name:", e.target.name);
    this.setState({
      userAge: e.target.value
    });
  };

  render() {
    const { handleAgeClick } = this.props;
    const styles = {
      width: "75%",
      margin: "0 auto"
    };
    const back = {
      color: "#f26c32",
      position: "absolute",
      top: "270px",
      left: "25%"
    };

    const { state, props } = this;

    return (
      <div style={styles}>
        <Link to="/basic-info">
          <i style={back} class="fas fa-chevron-circle-left fa-5x"></i>
        </Link>
        <h1>How old are you?</h1>
        <p>This affects which screenings are recommended for you.</p>

        <form onSubmit={e => handleAgeClick(e, state.userAge, props)}>
          <input
            type="text"
            name="age"
            id="ageInput"
            value={this.state.userAge}
            onChange={this.handleInputChange}
            placeholder="Your Age"
          />

          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

// Map redux state values to props:
const mapStateToProps = state => {
  return {
    age: state.age
  };
};

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
  return {
    handleAgeClick: (e, age, props) => {
      console.log("Handling age click");
      e.preventDefault();
      console.log(age);

      dispatch({
        type: "UPDATE_AGE",
        value: age
      });
      props.history.push("/sex");
    }
  };
};

// Adding second argument mapDispatchToProps is optional if
// we are not dispatching actions in this component:

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Age);
