import React from "react";
import { Link, Route } from "react-router-dom";
import Results from "./results";

class Gender extends React.Component {
  state = {
    gender: ""
  };

  genderCollect = e => {
    e.preventDefault();
    const { gender } = this.state;
    console.log(gender);
  };

  handleInputChange = e => {
    console.log("input field name:", e.target.name);
    if (e.target.value === "male") {
      this.setState({
        gender: "male"
      });
      console.log(e.target.value);
    } else if (e.target.value === "female") {
      this.setState({
        gender: "female"
      });
      console.log(e.target.value);
    }

    this.setState({
      gender: e.target.value
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
        <Link to="/age">Back a page</Link>
        <h1>What is your sex?</h1>
        <p>This affects which screenings are recommended for you.</p>
        <form onSubmit={this.genderCollect}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleInputChange}
            />
            Female
          </label>
          <button type="submit">
            button
            {/* <Link to="/results">Advance To Results</Link> */}
          </button>
        </form>
        {/* <Route path="/results" component={Results} /> */}
      </div>
    );
  }
}

export default Gender;
