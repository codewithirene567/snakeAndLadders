import React from 'react';
import Players from './Players';
import Dice from './Dice';
import { connect } from 'react-redux';
import { rollDice, endGame, restartGame } from '../actions/GameActions';
import { getDice, getMessages, getPlayers } from "../selectors";

const GamePanel = props => {
  const { disabled: isDiceDisabled } = props.dice;
  const players = props.players;
  const messages = props.messages;

  return (
    <>
      <Dice rolling={isDiceDisabled} />
      <div className={'dataBlock'}>
        <section className="playersPart">
          <div className={'separatorTitle'}>
            <span className={'rightTitle'}>نفرات</span>
          </div>
          <Players players={players} />
        </section>
        <section className={'rollDicePart'}>
          <button
            className={'rollDiceBtn ' + (isDiceDisabled ? 'disabled' : '')}
            disabled={isDiceDisabled}
            onClick={
              !isDiceDisabled ? props.rollDice : () => {}
            }
          >
            پرتاب تاس
          </button>
        </section>
        <section
          className="messagePart"
          dangerouslySetInnerHTML={{ __html: messages[0] }}
        />

        <section className="controlPart">
          <button onClick={props.restartGame} className="btn">
            ریستارت
          </button>
          <button onClick={props.endGame} className="btn">
            پایان
          </button>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  dice: getDice(state),
  players: getPlayers(state),
  messages: getMessages(state)
});


export default connect(
  mapStateToProps,
  {
    restartGame,
    endGame,
    rollDice
  }
)(GamePanel);
