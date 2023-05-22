import Card from "./card/Card";
import classes from "./GameBoard.module.css";
const GameBoard = ({ cards, clickHandler }) => {
  return (
    <div className={classes.board}>
      {cards.map((card) => {
        return (
          <Card
            key={card.label}
            picture={card.picture}
            label={card.label}
            handler={clickHandler}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
