import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedbacks = Math.round(
      this.countPositiveFeedbackPercentage()
    );

    return (
      <>
        <h2>Please leave feedback</h2>

        {Object.keys(this.state).map(key => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => this.handleBtnClick(key)}
            >
              {key}
            </button>
          );
        })}

        <h2>Statistics</h2>
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <>
            {Object.entries(this.state).map(entrie => {
              return (
                <p key={entrie[0]}>
                  {entrie[0]}: {entrie[1]}
                </p>
              );
            })}
            ;<p>Total: {total}</p>
            <p>Positive feedback:{positiveFeedbacks}%</p>
          </>
        )}
      </>
    );
  }
}
