import React from "react";

class Recommendation extends React.Component {
  render() {
    const paddingTop = {
      paddingTop: "1em"
    };
    return (
      <div className="container px-lg-5">
        <div className="row">
          <div style={paddingTop} className="col-12 px-lg-5 border bg-light">
            <h3 className="topic-heading">
              {this.props.recommendation.introHeader}
            </h3>
            <p className="topic-article">
              {this.props.recommendation.introCopy}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendation;
