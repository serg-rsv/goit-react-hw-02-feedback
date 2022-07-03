export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => {
    return (
      <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
        {key}
      </button>
    );
  });
};
