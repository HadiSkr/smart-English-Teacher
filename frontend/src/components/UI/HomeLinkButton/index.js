import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import useStyle from './style';

function HomeLinkButton() {
  const classes = useStyle();
  return (
    <Link to="/" className={`${classes.root} cur-pointer flex-center`}>
      <HomeIcon className={classes.icon} />
    </Link>
  );
}

export default HomeLinkButton;
