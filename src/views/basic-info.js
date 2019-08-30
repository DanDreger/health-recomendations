import React from "react";
import { Link, Route } from "react-router-dom";
import Age from "./age";

class BasicInfo extends React.Component {
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
        <h1>Basic Info Page</h1>
        <Link to="/age">Advance To Age Page</Link>
        <Route path="/age" component={Age} />
      </div>
    );
  }
}

export default BasicInfo;
