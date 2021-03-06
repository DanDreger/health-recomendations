import React from "react";

class Screening extends React.Component {
  render() {
    const imgStyles = {
      width: "100px",
      height: "100px",
      marginTop: "10%"
    };

    const paddingTop = {
      paddingTop: "1em"
    };

    return (
      <div className="container px-lg-5">
        <div className="row">
          <div className="col px-lg-5 border bg-light">
            <img
              style={imgStyles}
              src={this.props.screening.icon}
              alt={`${this.props.screening.introHeader} icon`}
            />
          </div>
          <div style={paddingTop} className="col-9 px-lg-5 border bg-light">
            <h3 className="topic-heading">
              {this.props.screening.introHeader}
            </h3>
            <p className="topic-article">{this.props.screening.introCopy}</p>
          </div>
          <div className="col px-lg-5 border bg-light"></div>
        </div>
      </div>
    );
  }
}

export default Screening;
