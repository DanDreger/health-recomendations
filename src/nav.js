import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const styles = {
      width: "190px",
      height: "40px",
      border: "1px solid black",
      borderRadius: "5px",
      marginTop: "20px",
      position: "absolute",
      right: "10%"
    };

    return (
      <div style={styles}>
        <p>Nav Component</p>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basic-info">Basic Info</Link>
            </li>
            <li>
              <Link to="/age">Age</Link>
            </li>
            <li>
              <Link to="/gender">Gender</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
