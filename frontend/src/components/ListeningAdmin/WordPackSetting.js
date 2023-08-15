import React, { useState } from 'react';
import ListeningTopic from '../UI/ListeningTopic';
import PropTypes from 'prop-types';
import SettingsIcon from '@mui/icons-material/Settings';

function ListeningTopicSetting({ classNameIcon, onChoose }) {
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
        <ListeningTopic
          open={openWordPack}
          onCancel={() => setOpenWordPack(false)}
          onChoose={onSelect}
        />
      )}
    </>
  );
}

ListeningTopicSetting.propTypes = {
  classNameIcon: PropTypes.string,
  onChoose: PropTypes.func,
};

ListeningTopicSetting.defaultProps = {
  onChoose: () => {},
};

export default ListeningTopicSetting;
