import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionItem from './genre-question-item.jsx';


const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionItem
      id={0}
      answer={answer}
      userAnswer={false}
      onChange={() => {}}
      renderPlayer={() => {}}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
