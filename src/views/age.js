import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
// import Gender from "./gender";


class Age extends React.Component {
    state = {
    userAge: "",
    };


    handleInputChange = e => {
      console.log("input field name:", e.target.name);
      this.setState({
        userAge: e.target.value
      });
    };

  render () {
        const { age, handleAgeClick } = this.props;
        const styles = {
        width: "90%",
        height: "550px",
        border: "1px dotted black",
        borderRadius: "5px",
        margin: "0 auto"
      };

    return (
      <div style={styles}>
        <Link to="/basic-info">Back a Page</Link>
        <h1>How old are you?</h1>
        <p>This affects which screenings are recommended for you.</p>

        <form onSubmit={(e)=>handleAgeClick(e, this.state.userAge)}>
          <input
            type="text"
            name="age"
            id="ageInput"
            value={this.state.userAge}
            onChange={this.handleInputChange}
            placeholder="Your Age"
          />

          <button type="submit">
            Button
            {/* <Link to="/gender">Next</Link> */}
          </button>
        </form>
        {/* <Route path="/gender" component={Gender} /> */}
      </div>
    )
  }
}


// Map redux state values to props:
const mapStateToProps = state => {
return {
  age: state.age,
  };
};

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
  return {
    handleAgeClick: (e, age) => {
      console.log("Handling age click")
      e.preventDefault();
      console.log(age)
      
      dispatch({
        type: "UPDATE_AGE",
        value: age
      });
    }
  };
};


// Adding second argument mapDispatchToProps is optional if
// we are not dispatching actions in this component:

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Age);

