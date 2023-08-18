import React, { useState } from 'react';
import GrammarLevel from '../UI/GrammarLevel';
import SettingsIcon from '@mui/icons-material/Settings';
import PropTypes from 'prop-types';

function GrammarLevelSetting({ classNameIcon, onChoose }) {
  const [openWordPack, setOpenWordPack] = useState(false);

  const onSelect = (v) => {
    onChoose(v);
    setOpenWordPack(false);
  };

  return (
    <>
      <SettingsIcon
        className={classNameIcon}
        onClick={() => setOpenWordPack(true)}
      />

      {/* setting modal */}
      {openWordPack && (
        <GrammarLevel
          open={openWordPack}
          onCancel={() => setOpenWordPack(false)}
          onChoose={onSelect}
        />
      )}
    </>
  );
}

GrammarLevelSetting.propTypes = {
  classNameIcon: PropTypes.string,
  onChoose: PropTypes.func,
};

GrammarLevelSetting.defaultProps = {
  onChoose: () => {},
};

export default GrammarLevelSetting;
