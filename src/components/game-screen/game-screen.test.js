import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen.jsx';

const children = <div className="children-component"/>;

describe(`Should render GameScreen`, () => {
  it(`with type 'artist'`, () => {
    const tree = renderer.create(
        <GameScreen
          type="artist"
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type 'genre'`, () => {
    const tree = renderer.create(
        <GameScreen
          type="genre"
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
