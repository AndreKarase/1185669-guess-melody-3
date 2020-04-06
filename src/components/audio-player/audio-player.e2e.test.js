import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`Click by Play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const wrapper = shallow(<AudioPlayer
    src={mock.song.src}
    isPlaying={false}
    onPlayButtonClick={handlePlayButtonClick}>
    <audio />
  </AudioPlayer>);

  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
