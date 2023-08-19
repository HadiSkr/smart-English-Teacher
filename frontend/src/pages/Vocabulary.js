import React from 'react';
import VocabularyData from '../components/WordUser/Vocabulary/data';
import useTitle from '../hooks/useTitle';

function VocabularyPage() {
  useTitle('Vocabulary');

  return <VocabularyData />;
}

export default VocabularyPage;
