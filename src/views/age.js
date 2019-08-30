import React from "react";
import { Link, Route } from "react-router-dom";
import Gender from "./gender";

class Age extends React.Component {
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
        <h1>Age Page</h1>
        <Link to="/gender">Advance To Gender Page</Link>
        <Route path="/gender" component={Gender} />
      </div>
    );
  }
}

export default Age;
