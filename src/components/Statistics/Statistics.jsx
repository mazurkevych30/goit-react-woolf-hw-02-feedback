const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {good || neutral || bad ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total : {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <p>There is no feedback</p>
      )}
    </>
  );
};

export default Statistics;
