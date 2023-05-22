import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ picture, label, handler }) => {
  return (
    <div value={label} className={classes.card} onClick={handler}>
      <div className={classes.image}>
        <FontAwesomeIcon icon={picture} size="4x" color="tomato" />
      </div>
      <div className={classes.labelDiv}>
        <div className={classes.label}>{label}</div>
      </div>
    </div>
  );
};
export default Card;
