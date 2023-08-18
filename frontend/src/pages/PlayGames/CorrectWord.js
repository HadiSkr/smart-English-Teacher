import React from 'react';
import CorrectWordData from '../../components/PlayGames/CorrectWord/data';
import useCloseNavigation from '../../hooks/useCloseNavigation';
import useTitle from '../../hooks/useTitle';

function CorrectWordPage() {
  useTitle("Let's choose the correct word");
   useCloseNavigation();

  return <CorrectWordData />;
}

export default CorrectWordPage;
