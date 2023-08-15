import React, { useState } from 'react';
import SettingModal from './Modal';
import SettingsIcon from '@mui/icons-material/Settings';

function SettingButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SettingModal onClose={() => setOpenModal(false)} open={openModal} />
      <SettingsIcon onClick={() => setOpenModal(true)} />
    </>
  );
}

export default SettingButton;
