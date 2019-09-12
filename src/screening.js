import React from "react";
import screenings from "./screenings.json";

class Screening extends React.Component {

  render() {
      const imgStyles = {
      width: "100px",
      height: "100px",    
      }

      const divStyles = {
          margin: "50px",
          padding: "0 0 50px 0"
      }
    return (
        <div id="colorectal-cancer" style={divStyles} className="row screening-block cancer">
          <div className="col-sm-2 col-xs-3 col-sm-offset-2 col-md-1 col-md-offset-2">
            <img style={imgStyles} src="https://www.thelungcancerproject.org/screening/images/landing/video-download-icon.png" alt="image"/>
          </div>
          <div className="col-sm-6 col-md-7 col-xs-9">
            <h3 className="topic-heading">{this.props.screening.introHeader}</h3>
            <p className="topic-article">{this.props.screening.introCopy}</p>
          </div>
        </div>
    );
  }
}

export default Screening;
