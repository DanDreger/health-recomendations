import React from "react";

class Vaccination extends React.Component {
  render() {
    const imgStyles = {
      width: "100px",
      height: "100px"
    };

    return (
      <div className="container px-lg-5">
        <div className="row">
          <div className="col px-lg-5 border bg-light">
            <img
              style={imgStyles}
              src={this.props.vaccination.icon}
              alt={`${this.props.vaccination.introHeader} icon`}
            />
          </div>
          <div className="col-9 px-lg-5 border bg-light">
            <h3 className="topic-heading">
              {this.props.vaccination.introHeader}
            </h3>
            <p className="topic-article">{this.props.vaccination.introCopy}</p>
          </div>
          <div className="col px-lg-5 border bg-light"></div>
        </div>
      </div>
    );
  }
}

export default Vaccination;
