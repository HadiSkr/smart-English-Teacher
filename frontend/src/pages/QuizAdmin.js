import React from 'react'
import { dictionaryRoot } from '../components/UI/style'
import QuizAdminData from '../components/QuizAdmin/data';
import useTitle from '../hooks/useTitle';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme)
}))

export default function QuizAdminPage() {
  useTitle('Listening Admin')
  // eslint-disable-next-line no-unused-vars
  const classes = useStyle();
  return (
    <div className="container">
      <QuizAdminData />
    </div>
  )
}

