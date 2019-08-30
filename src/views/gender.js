import React from "react";
import { Link, Route } from "react-router-dom";
import Results from "./results";

class Gender extends React.Component {
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
        <h1>Gender Page</h1>
        <Link to="/results">Advance To Results</Link>
        <Route path="/results" component={Results} />
      </div>
    );
  }
}

export default Gender;
