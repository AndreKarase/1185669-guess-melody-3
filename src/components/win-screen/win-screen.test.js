import React from 'react';
import renderer from 'react-test-renderer';
import WinScreen from './win-screen.jsx';

it(`Should WinScreen render correctly`, () => {
  const tree = renderer.create(
      <WinScreen
        onReplayButtonClick={() => {}}
        questionCount={5}
        mistakesCount={2}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
