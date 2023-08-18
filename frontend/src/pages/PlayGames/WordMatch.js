import React from 'react';
import WordMatchGameData from '../../components/PlayGames/WordMatch/data';
import useCloseNavigation from '../../hooks/useCloseNavigation';
import useTitle from '../../hooks/useTitle';

function WordMatchGamePage() {
  useTitle('Word matching game');
  useCloseNavigation();

  return <WordMatchGameData />;
}

export default WordMatchGamePage;
