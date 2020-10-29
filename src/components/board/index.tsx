import React, { useState } from "react";
import { ActionButton, BoardSurround, PlayerSurround } from "../domElements";
import {
  H1Tag,
  H1TagGreen,
  H1TagRed,
  H2Tag,
  H3Tag,
  H4Tag
} from "../typography";
import { scoreReducer } from "../../helperMethods";
import {
  DiceOne,
  DiceTwo,
  DiceThree,
  DiceFour,
  DiceFive,
  DiceSix
} from "../dice";
import { LifeBar } from "../lifebar";
import { ReactComponent as Hero } from "../../images/hero.svg";
import { ReactComponent as Monster } from "../../images/monster.svg";

import "./styles/board.scss";

function App() {
  const [playerDieOne, setPlayerDieOne] = useState<number>(0);
  const [playerDieTwo, setPlayerDieTwo] = useState<number>(0);
  const [playerRollsTotal, setPlayerRollsTotal] = useState<number>(0);
  const [playerLifeTotal, setPlayerLifeTotal] = useState<number>(100);
  const [monsterDieOne, setMonsterDieOne] = useState<number>(0);
  const [monsterDieTwo, setMonsterDieTwo] = useState<number>(0);
  const [monsterRollsTotal, setMonsterRollsTotal] = useState<number>(0);
  const [monsterLifeTotal, setMonsterLifeTotal] = useState<number>(100);

  function newGame() {
    setPlayerLifeTotal(100);
    setMonsterLifeTotal(100);
  }

  function rollDice(min: number, max: number) {
    const rollNumbers: number[] = [];
    let i: number = 0;
    while (i < 4) {
      let rollNumber: number = Math.floor(Math.random() * max + min);
      rollNumbers.push(rollNumber);
      i++;
    }

    const playerRolls: number[] = rollNumbers.slice(0, 2);
    const monsterRolls: number[] = rollNumbers.slice(2, 4);
    const playerRollOverallTotal: number = playerRolls.reduce(scoreReducer);
    const monsterRollOverallTotal: number = monsterRolls.reduce(scoreReducer);
    const playerRollsGreater: boolean =
      playerRollOverallTotal > monsterRollOverallTotal;
    const monsterRollsGreater: boolean =
      monsterRollOverallTotal > playerRollOverallTotal;
    const monsterOverallLife: number =
      monsterLifeTotal - (playerRollOverallTotal - monsterRollOverallTotal);
    const playerOverallLife: number =
      playerLifeTotal - (monsterRollOverallTotal - playerRollOverallTotal);

    setPlayerDieOne(playerRolls[0]);
    setPlayerDieTwo(playerRolls[1]);
    setMonsterDieOne(monsterRolls[0]);
    setMonsterDieTwo(monsterRolls[1]);
    setPlayerRollsTotal(playerRollOverallTotal);
    setMonsterRollsTotal(monsterRollOverallTotal);

    playerRollsGreater && setMonsterLifeTotal(monsterOverallLife);
    monsterRollsGreater && setPlayerLifeTotal(playerOverallLife);
  }

  const playerWinMargin: number = playerRollsTotal - monsterRollsTotal;
  const monsterWinMargin: number = monsterRollsTotal - playerRollsTotal;
  const playerRollsHigher: boolean = playerRollsTotal > monsterRollsTotal;
  const monsterRollsHigher: boolean = monsterRollsTotal > playerRollsTotal;
  const combatantsRollsEqual: boolean = playerRollsTotal === monsterRollsTotal;

  return (
    <BoardSurround>
      <H1Tag>BATTLE SIMULATOR</H1Tag>
      <div className={"flexCenterSurround"}>
        <PlayerSurround>
          <div className={"playerCard"}>
            <Hero className={"playerIcon"} />
            <H3Tag>PLAYER</H3Tag>
            <H4Tag>
              LIFEPOINTS: {playerLifeTotal > 0 ? playerLifeTotal : 0}
            </H4Tag>
            {monsterRollsHigher && (
              <H4Tag>
                OUCH! YOU LOST {monsterWinMargin} HEALTH POINT
                {monsterWinMargin === 1 ? "" : "S"}
              </H4Tag>
            )}
          </div>
          <LifeBar life={playerLifeTotal} />
        </PlayerSurround>
        <div className={"buttonAndMessageSurround"}>
          <div className={"leftHandDiceSurround"}>
            {playerDieOne === 1 && <DiceOne />}
            {playerDieOne === 2 && <DiceTwo />}
            {playerDieOne === 3 && <DiceThree />}
            {playerDieOne === 4 && <DiceFour />}
            {playerDieOne === 5 && <DiceFive />}
            {playerDieOne === 6 && <DiceSix />}
            {playerDieTwo === 1 && <DiceOne />}
            {playerDieTwo === 2 && <DiceTwo />}
            {playerDieTwo === 3 && <DiceThree />}
            {playerDieTwo === 4 && <DiceFour />}
            {playerDieTwo === 5 && <DiceFive />}
            {playerDieTwo === 6 && <DiceSix />}
          </div>
          <div className={"centralSurround"}>
            <H2Tag>
              {combatantsRollsEqual
                ? "YOU BOTH ROLLED THE SAME SCORE, NO ONE LOSES ENERGY"
                : playerRollsHigher
                ? `MONSTER LOST ${playerWinMargin} POINT${
                    playerWinMargin === 1 ? "" : "S"
                  } OF DAMAGE!`
                : `YOU LOST ${monsterWinMargin} POINT${
                    monsterWinMargin === 1 ? "" : "S"
                  }  OF DAMAGE!`}
            </H2Tag>
            {monsterLifeTotal <= 0 && <H1TagGreen>You Win</H1TagGreen>}
            {playerLifeTotal <= 0 && <H1TagRed>Game Over</H1TagRed>}
            {monsterLifeTotal > 0 && playerLifeTotal > 0 ? (
              <ActionButton onClick={() => rollDice(1, 6)}>
                ATTACK!
              </ActionButton>
            ) : (
              <ActionButton onClick={() => newGame()}>NEW GAME</ActionButton>
            )}
          </div>
          <div className={"rightHandDiceSurround"}>
            {monsterDieOne === 1 && <DiceOne />}
            {monsterDieOne === 2 && <DiceTwo />}
            {monsterDieOne === 3 && <DiceThree />}
            {monsterDieOne === 4 && <DiceFour />}
            {monsterDieOne === 5 && <DiceFive />}
            {monsterDieOne === 6 && <DiceSix />}
            {monsterDieTwo === 1 && <DiceOne />}
            {monsterDieTwo === 2 && <DiceTwo />}
            {monsterDieTwo === 3 && <DiceThree />}
            {monsterDieTwo === 4 && <DiceFour />}
            {monsterDieTwo === 5 && <DiceFive />}
            {monsterDieTwo === 6 && <DiceSix />}
          </div>
        </div>
        <PlayerSurround>
          <div className={"playerCard"}>
            <Monster className={"playerIcon"} />
            <H3Tag>MONSTER</H3Tag>
            <H4Tag>
              LIFEPOINTS: {monsterLifeTotal > 0 ? monsterLifeTotal : 0}
            </H4Tag>
            {playerRollsHigher && (
              <H4Tag>
                OWW! MONSTER LOST {playerWinMargin} HEALTH POINT
                {playerWinMargin === 1 ? "" : "S"}
              </H4Tag>
            )}
          </div>
          <LifeBar life={monsterLifeTotal} />
        </PlayerSurround>
      </div>
    </BoardSurround>
  );
}

export default App;
