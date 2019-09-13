import React from "react";
// import screenings from "../screenings";
import Recommendation from "../recommendation";
import recommendations from "../recommendations.json";
import screenings from "../screenings.json";
import Screening from "../screening";

class Results extends React.Component {
  

  render() {
    

    const allScreenings = screenings.map(screening => {
      return (
        <Screening
          screening={screening}
          key={screening.id}
        />
      );
    });

    const testFunction = () => {
      allScreenings.splice(2,5);
      console.log(allScreenings);
    }
    testFunction();

    const allRecommendations = recommendations.map(recommendation => {
      return (
        <Recommendation
          recommendation={recommendation}
          key={recommendation.id}
        />
      );
    });

    const styles = {
      width: "90%",
      border: "1px dotted black",
      borderRadius: "5px",
      margin: "0 auto"
    };
    return (
      <div style={styles}>
        <h1>Results Page</h1>
        {allScreenings}
        {allRecommendations}
      </div>
    );
  }
}

export default Results;
