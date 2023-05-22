import classes from "./Header.module.css";
import ScoreBoard from "./scoreboard/ScoreBoard";

const Header = ({ title, score, hiScore }) => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>{title}</div>
      <ScoreBoard score={score} hiScore={hiScore} />
    </div>
  );
};

export default Header;
