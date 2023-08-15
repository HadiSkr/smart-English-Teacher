import React from "react";
import communicateIcon from "../../assets/icons/communicate.png";
// import dictionaryIcon from "../../assets/icons/dictionary.png";
// import editIcon from "../../assets/icons/edit.png";
// import favoriteIcon from "../../assets/icons/favorite.png";
import flashcardIcon from "../../assets/icons/flashcard.png";
import friendsIcon from "../../assets/icons/friends.png";
// import gameIcon from "../../assets/icons/game.png";
import grammarIcon from "../../assets/icons/grammar.png";
// import ipaIcon from "../../assets/icons/ipa.png";
import toeicIcon from "../../assets/icons/toeic.png";
// import verbIcon from "../../assets/icons/verb.png";
// import medalIcon from "../../assets/icons/medal.png";
import NavigationAdminBox from "../NavigationAdminBox";
import { ROUTES } from "../../constants/index";
// import useScrollTop from "../../hooks/useScrollTop";
import useTitle from "../../hooks/useTitle";
// import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(() => ({
  sidebar: {
    minHeight: "100vh",
    position: "fixed",
    left: 0,
    top: "72px",
    zIndex: 999,
    backgroundColor: 'var(--bg-color-accent)'
  }
}))

const FEATURE_LIST = [
{
    title: "Vocabulary Management",
    subTitle: "Manage all vocabulary in the system",
    imgUrl: flashcardIcon,
    to: ROUTES.WORD_ADMIN,
  },
  {
    title: "Listening Management",
    subTitle: "Manage all the songs in the system",
    imgUrl: communicateIcon,
    to: ROUTES.LISTENING_ADMIN,
  },
  {
    title: "Quest Management",
    subTitle: "Manage quizzes in listening practice",
    imgUrl: toeicIcon,
    to: ROUTES.QUIZ_ADMIN,
  },
  {
    title: "Grammar Management",
    imgUrl: grammarIcon,
    subTitle: "Manage all grammar in the system",
    to: ROUTES.GRAMMAR_ADMIN,
  },
  {
    title: "User Management",
    imgUrl: friendsIcon,
    subTitle: "Manage all user accounts in the system",
    to: ROUTES.USER_ADMIN,
  },
];

function Sidebar() {
  useTitle("Admin");
  const classes = useStyle();

  return (
    <div className="container">
      <div className={classes.sidebar}>
      {FEATURE_LIST.map((box, index) => (
        <NavigationAdminBox
          key={index}
          imgUrl={box.imgUrl}
          title={box.title}
          to={box.to}
        />
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
