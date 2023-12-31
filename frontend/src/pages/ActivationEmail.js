import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import userApi from "../apis/userApi";
import { setMessage } from "../redux/actions/messageAction";
import useTitle from "../hooks/useTitle";
import useCloseNavigation from "../hooks/useCloseNavigation";
import { Button, Typography } from "@mui/material";
import {makeStyles} from "@mui/styles";
import "./style/login-signup.scss";

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh"
  },
  welcome: {
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "600",
  }
}))
export default function ActivationEmailPage() {
  useTitle("Activation email");
  useCloseNavigation();
  const { activation_token } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate()
  const [welcome, setWelcome] = useState('');
  const classes = useStyle();

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await userApi.activationEmail(activation_token);
          dispatch(setMessage(res.data.message, "success"));
          setWelcome('Congratulations on becoming a member of English Website!!!');
        } catch (error) {
          dispatch(setMessage(error.response.data.message, "error"));
          setWelcome('You should try again!!!');
        }
      };
      activationEmail();
    }
  }, [activation_token, dispatch]);

  const renderWelcome = () => {
    return <Typography className={classes.welcome} variant="h5">{ welcome }</Typography>
  }

  const handleClick = () => {
    history.replace('/login')
  }

  return (
    <div className={classes.root}>
      {renderWelcome()}
      <Button
        className="_btn _btn-primary"
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        Back to Login page
      </Button>
    </div>
  );
}
