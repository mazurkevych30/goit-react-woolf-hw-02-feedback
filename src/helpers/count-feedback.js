function countTotalFeedback({ good, neutral, bad }) {
  return good + neutral + bad;
}

function countPositiveFeedbackPercentage(state) {
  return Math.round((100 * state.good) / countTotalFeedback(state));
}

export { countTotalFeedback, countPositiveFeedbackPercentage };
