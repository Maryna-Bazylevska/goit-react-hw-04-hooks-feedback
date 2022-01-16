import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import Notification from "../Notification";
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      {!good && !neutral && !bad ? (
        <Notification message="No feedback given!" />
      ) : (
        <div>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{total}</span>
          </p>
          <p>
            Positive feedback: <span>{positivePercentage}%</span>
          </p>
        </div>
      )}
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default Statistics;
