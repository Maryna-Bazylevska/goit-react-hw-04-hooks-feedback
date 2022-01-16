import css from "./FeedbackOptions.module.css";
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.list}>
        <button
          className={css.button}
          type="button"
          name={options[0]}
          onClick={() => onLeaveFeedback(`${options[0]}`)}
        >
          Good
        </button>
        <button
          className={css.button}
          type="button"
          name={options[3]}
          onClick={() => onLeaveFeedback(`${options[1]}`)}
        >
          Neutral
        </button>
        <button
          className={css.button}
          type="button"
          name={options[2]}
          onClick={() => onLeaveFeedback(`${options[2]}`)}
        >
          Bad
        </button>
      </div>
    </>
  );
}
export default FeedbackOptions;
