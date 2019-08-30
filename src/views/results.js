import React from "react";

class Results extends React.Component {
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
        <h1>Results Page</h1>
      </div>
    );
  }
}

export default Results;
