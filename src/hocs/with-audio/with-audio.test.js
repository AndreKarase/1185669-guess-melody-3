import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withAudio from './with-audio.js';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOf(
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ).isRequired
};

const MockComponentWraped = withAudio(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWraped
      isPlaying={false}
      src={``}
      onPlayButtonClick={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
