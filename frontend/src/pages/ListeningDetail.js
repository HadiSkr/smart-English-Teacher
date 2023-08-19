/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import useTitle from "../hooks/useTitle";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import {getListening}  from "../redux/actions/listeningAction";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/styles";

export default function ListeningPage() {
  useTitle("Listening");

  const listenId = useParams().id;
  const {listen} = useSelector((state) => state.listeningReducer);
 
  const history = useNavigate();

  function handleClickEdit() {
    history(`/admin/listening/edit/${listen._id}`);
  }

  function handleClickGoBack() {
    history("/admin/listening");
  }


  const dispatch = useDispatch();
  useEffect(() => 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  dispatch(getListening(listenId)), [dispatch])

  return (
    <>
      <Container>
        <Typography variant="h6" align="center">
        {listen.Name}
        </Typography>

        <Typography>
        {listen.Description}
        </Typography>
       
        <p align="center"><iframe src={listen.Video} width="500" height="300" ></iframe></p>

    <Typography variant="h6">
        Topic:    <i><mark>  {listen.Topic} </mark></i>
    </Typography>
    
    <Typography variant="h6">
        Script: 
    </Typography>
    <td dangerouslySetInnerHTML={{__html: listen.Script}} />
             
    <Button color='primary' onClick={() => handleClickGoBack()}>GO BACK</Button>
    <Button color='primary'onClick={() => handleClickEdit()}>Edit</Button>
         
       
      </Container>
    </>
  );
}
