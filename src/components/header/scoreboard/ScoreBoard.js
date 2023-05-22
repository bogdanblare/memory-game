import classes from "./ScoreBoard.module.css";

const ScoreBoard = ({ score, hiScore }) => {
  return (
    <div className={classes.scoreboard}>
      <div className={classes.scoreGroup}>
        <div className={classes.title}>Current Score</div>
        <div className={classes.score}>{score}</div>
      </div>
      <div className={classes.scoreGroup}>
        <div className={classes.title}>Hi-Score</div>
        <div className={classes.score}>{hiScore}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
