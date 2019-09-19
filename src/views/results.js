import React from "react";
import Recommendation from "../recommendation";
import recommendations from "../recommendations.json";
import screenings from "../screenings.json";
import Screening from "../screening";
import Vaccination from "../vaccination";
import vaccinations from "../vaccinations.json";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Results extends React.Component {
  render() {
    const { firstName, eMail, age, sex } = this.props;

    // Function checks users sex and age and removes screenings that are not right for them
    const surveyCheck = () => {
      if (sex === "male") {
        screenings.splice(3, 3);
      } else {
        if (age <= 50 || age >= 70) {
          screenings.splice(4, 1);
        }
        if (age <= 21 || age >= 65) {
          screenings.splice(3, 1);
        }
      }
      if (age <= 50 || age >= 75) {
        screenings.splice(2, 1);
      }
      console.log(screenings);
    };
    surveyCheck();
    const yourScreens = screenings.map(screening => {
      return <Screening screening={screening} key={screening.id} />;
    });

    // Function removes inappropriate vaccine recomendations
    const vaccineCheck = () => {
      if (age >= 27) {
        vaccinations.splice(1, 1);
      }
      console.log(vaccinations);
    };
    vaccineCheck();
    const yourVaccinations = vaccinations.map(vaccination => {
      return <Vaccination vaccination={vaccination} key={vaccination.id} />;
    });

    const allRecommendations = recommendations.map(recommendation => {
      return (
        <Recommendation
          recommendation={recommendation}
          key={recommendation.id}
        />
      );
    });

    const styles = {
      width: "75%",
      margin: "30px auto 10px"
    };

    const back = {
      color: "#f26c32",
      position: "absolute",
      top: "270px",
      left: "18%"
    };

    const paddingTop = {
      padding: "5% 0 3%",
      width: "70%",
      margin: "0 auto",
      fontWeight: "400"
    };
    return (
      <div style={styles}>
        <h1>
          <Link to="/sex">
            <i style={back} class="fas fa-chevron-circle-left fa-2x"></i>
          </Link>
          Thanks for taking the pledge!
          <br />
          Here are your recommendations.
        </h1>
        <p>
          Hi {firstName}, We’ve sent a copy, along with some healthy tips, to{" "}
          {eMail}
        </p>
        {yourScreens}
        <h3 style={paddingTop}>
          Here are some important vaccinations and healthy living tips that can
          also help lower your risk for certain types of cancer. Talk to your
          doctor to see if they're right for you.
        </h3>
        {yourVaccinations}
        <h3 style={paddingTop}>
          Here are some good ideas for staying healthy every day!
        </h3>
        {allRecommendations}
      </div>
    );
  }
}

// Map redux state values to props:
const mapStateToProps = state => {
  return {
    age: state.age,
    firstName: state.firstName,
    lastName: state.lastName,
    eMail: state.eMail,
    sex: state.sex
  };
};

export default connect(mapStateToProps)(Results);
