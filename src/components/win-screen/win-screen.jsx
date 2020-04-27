import React from 'react';
import PropTypes from 'prop-types';

const WinScreen = ({onReplayButtonClick, questionCount, mistakesCount}) => {
  const correctlyQustionsCount = questionCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img
          src="img/melody-logo.png"
          alt="Угадай мелодию"
          width={186}
          height={83}
        />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        Вы&nbsp;ответили правильно на {correctlyQustionsCount} вопросов и совершили {mistakesCount} ошибки
      </p>
      <button className="replay" type="button" onClick={onReplayButtonClick}>
        Сыграть ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
  questionCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired
};

export default WinScreen;
