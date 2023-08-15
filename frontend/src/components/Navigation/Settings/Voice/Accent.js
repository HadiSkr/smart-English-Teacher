import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpeechSynthesis, updateLSVoice } from './../../../../helper';
import { setVoiceItem } from './../../../../redux/actions/voiceAction';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import useStyle from './style';

function AccentSelect() {
  const classes = useStyle();
  const [voiceList, setVoiceList] = useState([]);
  const { voiceURI } = useSelector((state) => state.voiceReducer);
  const dispatch = useDispatch();

  // get window voice list
  useEffect(() => {
    getSpeechSynthesis().then((voices) => {
      const enVoices = voices.filter(
        (voice) => voice.lang?.indexOf('en') !== -1,
      );
      setVoiceList(enVoices);
    });
  }, []);

  const onSelectChange = (value) => {
    dispatch(setVoiceItem({ key: 'voiceURI', value }));
    updateLSVoice('voiceURI', value);
  };

  return (
    <>
      {voiceList.length > 0 && (
        <TextField
          className={`${classes.selectRoot}`}
          select
          SelectProps={{
            className: classes.select,
            MenuProps: {
              classes: { paper: classes.menu },
            },
          }}
          hiddenLabel={true}
          inputProps={{ placeholder: 'Choose the voice to read' }}
          value={voiceURI || voiceList[0].voiceURI}
          onChange={(e) => onSelectChange(e.target.value)}
          variant="outlined">
          {voiceList.map((voice, index) => (
            <MenuItem key={index} value={voice.voiceURI}>
              {voice.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    </>
  );
}

export default AccentSelect;
