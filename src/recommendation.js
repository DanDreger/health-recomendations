import React from "react";
import recommendations from "./recommendations.json";

class Recommendation extends React.Component {

  render() {

    console.log(this.props)
    return (
      <div>
        <div className="margin-bottom-standard">
         <h3>{this.props.recommendation.introHeader}</h3>
      
          <p className="topic-article"> 
          {this.props.recommendation.introCopy}
          </p>
        </div>
      </div>
    );
  }
}

export default Recommendation;
