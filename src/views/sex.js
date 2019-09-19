import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Sex extends React.Component {
  state = {
    sex: ""
  };

  sexCollect = e => {
    e.preventDefault();
    const { sex } = this.state;
    console.log(sex);
  };

  handleInputChange = e => {
    console.log("input field name:", e.target.name);
    if (e.target.value === "male") {
      this.setState({
        sex: "male"
      });
      console.log(e.target.value);
    } else if (e.target.value === "female") {
      this.setState({
        sex: "female"
      });
      console.log(this.state.sex);
    }

    this.setState({
      sex: e.target.value
    });
  };
  render() {
    const { handleSexClick } = this.props;

    const styles = {
      width: "75%",
      margin: "0 auto"
    };
    const spacing = {
      margin: "20px"
    };
    const back = {
      color: "#f26c32",
      position: "absolute",
      top: "270px",
      left: "25%"
    };

    const { state, props } = this;

    return (
      <div style={styles}>
        <Link to="/age">
          <i style={back} class="fas fa-chevron-circle-left fa-5x"></i>
        </Link>
        <h1>What is your sex?</h1>
        <p>This affects which screenings are recommended for you.</p>
        <form onSubmit={e => handleSexClick(e, state.sex, props)}>
          <label>
            <input
              type="radio"
              name="sex"
              value="male"
              onChange={this.handleInputChange}
            />
            Male
          </label>
          <label style={spacing}>
            <input
              type="radio"
              name="sex"
              value="female"
              onChange={this.handleInputChange}
            />
            Female
          </label>
          <button type="submit">See Results!</button>
        </form>
      </div>
    );
  }
}

// Map redux state values to props:
const mapStateToProps = state => {
  return {
    sex: state.sex
  };
};

// Dispatch actions/event handlers go here:
const mapDispatchToProps = dispatch => {
  return {
    handleSexClick: (e, sex, props) => {
      console.log("Handling sex click");
      e.preventDefault();
      console.log(sex);

      dispatch({
        type: "UPDATE_SEX",
        value: sex
      });
      props.history.push("/results");
    }
  };
};

// Adding second argument mapDispatchToProps is optional if
// we are not dispatching actions in this component:

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sex);
