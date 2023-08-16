import React, { useState } from 'react';
import WordPack from '../UI/WordPack';
import PropTypes from 'prop-types';
import SettingsIcon from '@mui/icons-material/Settings';

function WordPackSetting({ classNameIcon, onChoose }) {
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
        <WordPack
          open={openWordPack}
          onCancel={() => setOpenWordPack(false)}
          onChoose={onSelect}
        />
      )}
    </>
  );
}

WordPackSetting.propTypes = {
  classNameIcon: PropTypes.string,
  onChoose: PropTypes.func,
};

WordPackSetting.defaultProps = {
  onChoose: () => {},
};

export default WordPackSetting;
