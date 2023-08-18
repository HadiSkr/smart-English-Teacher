import React from 'react';
import FastGameData from '../../components/PlayGames/FastGame/data';
import useCloseNavigation from '../../hooks/useCloseNavigation';
import useTitle from '../../hooks/useTitle';


function FastGamePage() {
  useTitle('Game hands faster than brain');
  useCloseNavigation();

  return <FastGameData />;
}

export default FastGamePage;
