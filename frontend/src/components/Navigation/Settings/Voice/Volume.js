import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce, updateLSVoice } from './../../../../helper';
import { setVoiceItem } from './../../../../redux/actions/voiceAction';
import Slider from '@mui/material/Slider';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import useStyle from './style';
let debounceTimer = null;

function VoiceVolume() {
  const classes = useStyle();
  const { volume } = useSelector((state) => state.voiceReducer);
  const dispatch = useDispatch();
  const defaultVolume = useRef(volume); // Fix error component is changing the controlled value

  const onVolumeChange = (value) => {
    if (value > 1 || value < 0) return;
    debounceTimer = debounce(debounceTimer, () => {
      dispatch(setVoiceItem({ key: 'volume', value }));
      updateLSVoice('volume', value);
    });
  };

  return (
    <div className="flex-center-between flex-grow-1">
      <VolumeUpIcon className={classes.icon} />

      <Slider
        classes={{
          root: classes.slider,
          thumb: classes.thumbSlider,
          rail: classes.railSlider,
          track: classes.trackSlider,
        }}
        defaultValue={defaultVolume.current * 100}
        min={0}
        max={100}
        step={2}
        onChange={(e, value) => onVolumeChange(value / 100)}
      />
      <span className={classes.valueText}>{(volume * 100).toFixed(0)}</span>
    </div>
  );
}

export default VoiceVolume;
