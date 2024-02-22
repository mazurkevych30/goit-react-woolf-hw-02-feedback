const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map((option, idx) => (
          <li key={idx}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackOptions;
