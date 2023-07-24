import classes from "./Layout.module.css";
import Header from "../header/Header.js";
import GameBoard from "../gameBoard/GameBoard";
import cards from "../../utils/pictures";
import _ from "lodash";
import { useState, useEffect } from "react";
import Modal from "../../ui/modal/Modal";

const Layout = () => {
  const [cardDeck, setCardDeck] = useState(cards);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [hiScore, setHiScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [seconds, setSeconds] = useState(10);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("LEVEL 1");

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 500);
    } else {
      setSeconds(1);
    }
  }, [seconds]);

  useEffect(() => {
    const slice = 6 * level;
    setCardDeck(_.shuffle(cards).slice(0, slice));
    const highScore = sessionStorage.getItem("score")
      ? sessionStorage.getItem("score")
      : 0;
    setHiScore(highScore);
    if (level > 4) {
      setModalMessage("YOU WIN!!!");
    }
    message();
  }, [level]);

  const message = () => {
    setDisplayModal(true);
    setTimeout(() => {
      setDisplayModal(false);
    }, 2000);
  };
  const gameOver = () => {
    if (hiScore < score) {
      sessionStorage.setItem("score", score);
      setHiScore(score);
    }
    setScore(0);
    setClicked([]);
    setModalMessage("GAME OVER!!!");
    setLevel(1);
  };
  const success = (card) => {
    setClicked(clicked.concat(card));
    setScore(score + seconds);
    console.log(clicked.length, "clicked");
    if (clicked.length % 6 === 5) {
      setModalMessage(`LEVEL ${level + 1}`);
      setLevel(level + 1);
    }
  };
  const handleCardClick = (e) => {
    const cardValue = e.currentTarget.getAttribute("value");
    if (clicked.includes(cardValue)) {
      gameOver();
    } else {
      success(cardValue);
    }
    const shuffled = _.shuffle(cardDeck);
    setCardDeck(shuffled);
    setSeconds(10);
  };

  return (
    <div>
      <div className={classes.container}>
        <Header title="Match" score={score} hiScore={hiScore} />
        <GameBoard cards={cardDeck} clickHandler={handleCardClick} />
      </div>
      {displayModal && <div className={classes.backdrop}></div>}
      {displayModal && <Modal>{modalMessage}</Modal>}
    </div>
  );
};

export default Layout;
