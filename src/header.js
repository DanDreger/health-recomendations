import React from "react";
import Nav from "./nav";

class Header extends React.Component {
  render() {
    const styles = {
      width: "75%"
    };
    return (
      <header>
        <div>
          <img
            style={styles}
            alt="Rally and Stand up to Cancer Logos"
            src="https://mydonate.bt.com/images/charities/B19656736181507646989088.jpg"
          />
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;
