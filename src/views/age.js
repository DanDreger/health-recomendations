import React from "react";
import { Link, Route } from "react-router-dom";
// import Gender from "./gender";

class Age extends React.Component {
  state = {
    age: ""
  };

  ageCollect = e => {
    e.preventDefault();
    const { age } = this.state;
    console.log(age);
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
        <Link to="/basic-info">Back a Page</Link>
        <h1>How old are you?</h1>
        <p>This affects which screenings are recommended for you.</p>

        <form onSubmit={this.ageCollect}>
          <input
            type="text"
            name="age"
            placeholder="Your Age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            Button
            {/* <Link to="/gender">Next</Link> */}
          </button>
        </form>
        {/* <Route path="/gender" component={Gender} /> */}
      </div>
    );
  }
}

export default Age;
