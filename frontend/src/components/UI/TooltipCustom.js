// custom MUI tooltip with click event for mobile
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';

function TooltipCustom(props) {
  const [open, setOpen] = useState(false);
  const [isMd, setIsMd] = useState(-1);
  const { children, ...rest } = props;

  useEffect(() => {
    let isSub = true;

    if (document.body.offsetWidth > 576) {
      isSub && setIsMd(true);
    } else {
      isSub && setIsMd(false);
    }

    return () => (isSub = false);
  }, []);

  return (
    <>
      {isMd !== -1 && (
        <>
          {isMd ? (
            // mode hover
            <Tooltip {...rest}>{children}</Tooltip>
          ) : (
            // mode click
            <Tooltip {...rest} open={open} onClick={() => setOpen(!open)}>
              {children}
            </Tooltip>
          )}
        </>
      )}
    </>
  );
}

TooltipCustom.propTypes = {
  children: PropTypes.any,
};

export default TooltipCustom;
