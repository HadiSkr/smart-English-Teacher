import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FastGame from '.';
import gameApi from './../../../apis/gameApi';
import { ROUTES } from './../../../constants/index';
import { TOPICS } from './../../../constants/topics';
import { setMessage } from './../../../redux/actions/messageAction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyle from './style';

function FastGameData() {
  const classes = useStyle();
  const [topicKey, setTopicKey] = useState(-1);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    let isSub = true;

    if (topicKey < 0) {
      return;
    }

    (async function () {
      try {
        const apiRes = await gameApi.getWordPackFG(topicKey);

        if (apiRes.status === 200 && isSub) {
          const { wordPack = [] } = apiRes.data;
          if (wordPack.length === 0) {
            const message =
              'Sorry! The word list for this topic is currently insufficient. Please choose again !';
            dispatch(setMessage(message, 'warning'));
            setList([]);
            return;
          }
          setList([...wordPack]);
        }
      } catch (error) {
        const message =
          'Sorry! The word list for this topic is currently insufficient. Please choose again !';
        dispatch(setMessage(message, 'warning'));
        setList([]);
      }
    })();

    return () => (isSub = false);
  }, [topicKey]);

  const handleGoBack = () => {
    history(ROUTES.GAMES_HOME);
  };

  const renderTopic = () => (
    <>
      <div className={classes.title}>
        <ArrowBackIcon className={classes.goBackIcon} onClick={handleGoBack} />
        <h1>Choose a theme</h1>
      </div>
      <div className={classes.topics}>
        {TOPICS.map((topic, index) => (
          <div
            key={index}
            className={classes.topicItem}
            onClick={() => setTopicKey(topic.key)}>
            <img
              src={topic.icon}
              className={classes.topicImg}
              alt={topic.title}
            />
            <h3 className={classes.topicTitle}>{topic.title}</h3>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={`flex-center ${classes.wrapper}`}>
      <div className={`${classes.bg} w-100 h-100`}></div>

      <div className="container">
        <div className={classes.root}>
          {list.length === 0 ? (
            renderTopic()
          ) : (
            <FastGame topic={topicKey} list={list} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FastGameData;
