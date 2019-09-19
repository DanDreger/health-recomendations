import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const styles = {
      width: "50%",
      margin: "30px auto 10px"
    };
    const buttonStyles = {
      background: "#f26c32",
      width: "33%",
      border: "1px solid black",
      borderRadius: "5px",
      height: "50px",
      color: "white",
      marginTop: "50px"
    };
    const linkStyles = {
      color: "white"
    };

    return (
      <div style={styles}>
        <h1>Take a Stand!</h1>
        <p>
          Staying on top of your health is one of the most important decisions
          you can make. Rally is proud to join Stand Up To Cancer to make it
          easy for everyone to figure out what screenings they might need
        </p>
        <p>Join those who have already pledged to stand up and get screened!</p>
        <form>
          <button style={buttonStyles}>
            <Link style={linkStyles} to="/basic-info">
              Count Me In!
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
