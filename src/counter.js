import React from "react";

class Counter extends React.Component {
  state = {
    data: undefined,
    loading: true,
    error: undefined
  };
  componentDidMount() {
    fetch("https://support.werally.com/customer/services/apexrest/SUTC")
      .then(function(response) {
        // response === the initial response data
        return response.json();
        // response.json() returns another promise that
        // resolves (or asynchronously returns) the final result
      })
      .then(function(pledges) {
        this.setState({
          loading: false,
          pledges: pledges
        });
        console.log(pledges);
      });
  }

  render() {
    const { loading, error, pledges } = this.state;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Oops, there was an error: {error}</p>;
    return (
      <div>
        <h1>here is the counter </h1>
        {pledges}
      </div>
    );
  }
}

export default Counter;
