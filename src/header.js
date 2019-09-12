import React from "react";
import Nav from "./nav";

class Header extends React.Component {
  render() {
    const styles = {
      width: "40%"
    };
    return (
      <header>
        <div>
          <img
            style={styles}
            alt="Rally and Stand up to Cancer Logos"
            src="https://d37m4c6899pm9g.cloudfront.net/images/sutc/Rally-SUTC-logos.svg"
          />
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;
