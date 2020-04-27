import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false)
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleChange(i, value) {
      const {answers} = this.state;

      const userAnswers = answers.slice(0);
      userAnswers[i] = value;

      this.setState({
        answers: userAnswers
      });
    }

    handleAnswer() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    render() {
      const {answers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={answers}
          onChange={this.handleChange}
          onAnswer={this.handleAnswer}
        />
      );
    }
  }

  WithUserAnswer.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    question: PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })).isRequired,
      genre: PropTypes.string.isRequired,
      type: PropTypes.oneOf([`genre`, `artist`]).isRequired
    }).isRequired
  };

  return WithUserAnswer;
};

export default withUserAnswer;
