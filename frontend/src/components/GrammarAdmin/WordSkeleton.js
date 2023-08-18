import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';

function WordSkeleton({ className }) {
  return (
    <div className={className}>
      {new Array(10).fill(0).map((_, index) => (
        <Skeleton key={index} animation="wave" variant="rect" />
      ))}
    </div>
  );
}

WordSkeleton.propTypes = {
  className: PropTypes.string,
};

export default WordSkeleton;
