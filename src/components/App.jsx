import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from 'helpers/count-feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prev => {
      return { [e.target.name]: prev[e.target.name] + 1 };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Section title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback(this.state)}
          positivePercentage={countPositiveFeedbackPercentage(this.state)}
        />
      </>
    );
  }
}

export default App;
