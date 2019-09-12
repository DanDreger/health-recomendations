import React from "react";
import { Link, Route } from "react-router-dom";
import BasicInfo from "./basic-info";

class Home extends React.Component {
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
        <h1>Homepage</h1>
        <form>
          <button>
            <Link to="/basic-info">Advance To Basic Info Page</Link>
            <Route path="/basic-info" component={BasicInfo} />
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
