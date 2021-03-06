import React from 'react';
import { connect } from 'react-redux';
import { getDice } from './../selectors';

const Dice = props => {
  const { rolling } = props;
  const { result: choosed } = props.dice;

  const choosedClass = `show-${choosed || 4}`;
  return (
    <section id="cubeContainer" className={rolling && 'show'}>
      <div id="cube" className={'show-spinning ' + choosedClass}>
        <figure className="front">1</figure>
        <figure className="back">2</figure>
        <figure className="right">3</figure>
        <figure className="left">4</figure>
        <figure className="top">5</figure>
        <figure style={{ background: '#8a9c3c' }} className="bottom">
          6
        </figure>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  dice: getDice(state),
});

export default connect(mapStateToProps)(Dice);
