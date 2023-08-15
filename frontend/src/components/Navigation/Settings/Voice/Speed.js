import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce, updateLSVoice } from './../../../../helper';
import { setVoiceItem } from './../../../../redux/actions/voiceAction';
import Slider from '@mui/material/Slider';
import SpeedIcon from '@mui/icons-material/Speed';
import useStyle from './style';
let debounceTimer = null;

function VoiceSpeed() {
  const classes = useStyle();
  const { speed } = useSelector((state) => state.voiceReducer);
  const dispatch = useDispatch();
  const defaultSpeed = useRef(speed);

  const onSpeedChange = (value) => {
    if (value > 3 || value < 0.1) return;
    debounceTimer = debounce(debounceTimer, () => {
      dispatch(setVoiceItem({ key: 'speed', value }));
      updateLSVoice('speed', value);
    });
  };

  return (
    <div className="flex-center-between flex-grow-1">
      <SpeedIcon className={classes.icon} />

      <Slider
        classes={{
          root: classes.slider,
          thumb: classes.thumbSlider,
          rail: classes.railSlider,
          track: classes.trackSlider,
        }}
        defaultValue={defaultSpeed.current}
        min={0.1}
        max={3}
        step={0.1}
        onChange={(e, value) => onSpeedChange(value)}
      />
      <span className={classes.valueText}>{speed}</span>
    </div>
  );
}

export default VoiceSpeed;
