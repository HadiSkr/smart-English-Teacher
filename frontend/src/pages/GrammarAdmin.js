import React from 'react'
import useTitle from './../hooks/useTitle';
import { dictionaryRoot } from '../components/UI/style'
import GrammarAdminData from '../components/GrammarAdmin/data'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme)
}))

export default function GrammarAdminPage() {
  useTitle('Grammar Admin')
  // eslint-disable-next-line no-unused-vars
  const classes = useStyle();
  return (
    <div className="container">
      <GrammarAdminData/>
    </div>
  )
}

