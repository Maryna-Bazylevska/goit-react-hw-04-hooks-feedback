import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.list}>
        {options.map((item) => (
          <button
            key={item}
            className={css.button}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        ))}
        {/* <button
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
        </button> */}
      </div>
    </>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
