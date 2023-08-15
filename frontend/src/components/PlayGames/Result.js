/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cwResultStyle } from './CorrectWord/style';
import userApi from '../../apis/userApi';
import highScoreApi from '../../apis/highScoreApi';
import winAudioSrc from '../../assets/audios/win.mp3';
import cupIcon from '../../assets/icons/others/cup.png';
import { COINS, MAX, ROUTES } from '../../constants/index';
import { onPlayAudio } from '../../helper/speakerHelper';
// import { HIGHSCORE_NAME } from '../../constants/game';
// import { setUserCoin } from './../../redux/actions/authAction';
// import { string } from 'yup/lib/locale';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import WrongIcon from '@mui/icons-material/Cancel';
import RightIcon from '@mui/icons-material/CheckCircle';
import CoinIcon from '@mui/icons-material/MonetizationOn';

function convertQuesToCoin(nRight = 0, nWrong = 0, currentCoin = 0) {
  const newCoin =
    nRight * COINS.CORRECT_GAME_PER_QUES -
    nWrong * COINS.CORRECT_GAME_PER_QUES +
    currentCoin;

  if (newCoin < 0) {
    return 0;
  }
  if (newCoin > MAX.USER_COIN) {
    return MAX.USER_COIN;
  }
  return newCoin;
}

function CorrectWordResult({ nRight, nWrong, onReplay, nameGame}) {
  const classes = cwResultStyle();
  const history = useNavigate();
  const [coinCurrent, setCoinCurrent]=useState(null);
  const { isAuth, coin } = useSelector((state) => state.authReducer);

  // play win audio
  useEffect(() => {
    onPlayAudio(winAudioSrc);
  }, []);

  // save coin and update highscore
  useEffect(() => {
    if (!isAuth) return;

    (async function () {
      try {
        const userInfo = await userApi.getUserInfo();
        const newCoin = convertQuesToCoin(nRight, nWrong, userInfo.data.user.coin);

      console.log(userInfo.data.user.coin)
        
        setCoinCurrent(newCoin)
        const apiRes = await userApi.putUpdateUserCoin(newCoin);
           highScoreApi.postScore(nameGame, nRight);
        // }
       
       // if(nameGame !== HIGHSCORE_NAME.TOP_COIN){
         
       
      //  console.log(resApi)
      //  }
      //  const gameCoin =  nRight * COINS.CORRECT_GAME_PER_QUES -
      //  nWrong * COINS.CORRECT_GAME_PER_QUES ;
      //   highScoreApi.putUpdateHighscore(HIGHSCORE_NAME.TOP_COIN, newCoin);

      //   highScoreApi.putUpdateHighscore(
      //     HIGHSCORE_NAME.CORRECT_GAME_RIGHT,
      //     nRight,
      //   );

      //   highScoreApi.putUpdateHighscore(
      //     HIGHSCORE_NAME.CORRECT_GAME_RIGHT_CONSECUTIVE,
      //     nRightConsecutive,
      //   );
      
      } catch (error) {}
    })();
  });

  const onGoBack = () => {
    history(ROUTES.GAMES_HOME);
  };

  return (
    <div className={`${classes.root} flex-center-col`}>
      <img className={classes.img} src={cupIcon} alt="Cup Photo" />

      <div className={`${classes.result} flex-center--ver`}>
        <b>{nRight}</b>&nbsp;Correct
        <RightIcon className={`${classes.icon} right`} />
        &nbsp;-&nbsp;
        <b>{nWrong}</b>&nbsp;Wrong
        <WrongIcon className={`${classes.icon} wrong`} />
      </div>

      {isAuth && coinCurrent && (
        <div className={`${classes.result} flex-center--ver mt-4`}>
          <CoinIcon
            className={classes.icon}
            style={{ color: '#C3AD1A', marginLeft: 0 }}
          />
          Current number of coins:&nbsp;<b>{coinCurrent}</b>
        </div>
      )}

      <div className="mt-10">
        <Button
          className="_btn _btn-outlined-stand mr-5"
          variant="outlined"
          onClick={onGoBack}>
          Return
        </Button>
        <Button className="_btn _btn-primary" onClick={onReplay}>
        Play again
        </Button>
      </div>
    </div>
  );
}

CorrectWordResult.propTypes = {
  nRight: PropTypes.number,
  nWrong: PropTypes.number,
 nameGame: PropTypes.string,
  onReplay: PropTypes.func,
};

CorrectWordResult.defaultProps = {
  nRight: 0,
  nWrong: 0,
  nameGame:'',
  onReplay: function () {},
};

export default CorrectWordResult;
