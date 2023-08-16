import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { cloudinaryImgOptimize } from "./../../../helper";
import WordDetailModal from "../../UI/WordDetailModal";
import Speaker from "../../UI/Speaker";
import wordApi from "./../../../apis/wordApi";
import { DEFAULTS, ROUTES } from './../../../constants';
import { setMessage } from "./../../../redux/actions/messageAction";
import { deleteWord } from "./../../../redux/actions/wordAction";
import PropTypes from "prop-types";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import useStyle from "./style";

function WordItem({ _id, word, type, phonetic, picture, mean }) {
  const classes = useStyle();
  const imgSrc = cloudinaryImgOptimize(
    picture ? picture : DEFAULTS.IMAGE_SRC,
    50,
    50,
    true,
    true
  );

  const [modal, setModal] = useState({ loading: false, open: false });
  const dispatch = useDispatch();
  const { topic_id } = useParams();
  const history = useNavigate();

  const deleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this word?')) {
      dispatch(deleteWord(word, type));
      dispatch(setMessage("Delete successfully", "success"));
      history.replace(ROUTES.WORD_ADMIN)
    }
  };


  const onShowDetail = async (id) => {
    try {
      setModal({ open: true, loading: true });
      const apiRes = await wordApi.getWord(id);
      if (apiRes) {
        setModal({ open: true, loading: false, ...apiRes.data });
      }
    } catch (error) {
      setModal({ open: false, loading: false });
      dispatch(setMessage("Can't get from", "error"));
    }
  };

  return (
    <>
      <div className={`${classes.root} flex-center-between`}>
        <div 
          className="w-100 flex-center--ver"
          onClick={() => onShowDetail(_id)}
        >
          <img className={classes.picture} src={imgSrc} alt="" />
          <div className="ml-8 flex-grow-1">
            <h3 className={classes.word}>
              {word}{" "}
              {Boolean(type) && (
                <span className={classes.type}>( {type} )</span>
              )}
            </h3>
            {Boolean(phonetic) && (
              <p className={`${classes.phonetic} phonetic`}>/ {phonetic} /</p>
            )}
            <p className={classes.mean}>{mean}</p>
          </div>
        </div>
        {topic_id ?  (
          <div className="flex-center--ver">
            <Speaker text={word} />
          </div>
        ):(

        <div className="flex-center--ver">
        <div className="mr-5">
          <EditIcon className="english-setting-icon"
          onClick={() => history(`/admin/word/edit/${_id}`)}
          />
        </div>
          <DeleteIcon className="english-setting-icon" 
          onClick={() => deleteHandler()}
          />     
      </div>
      )}
      </div>
      {modal.open && (
        <WordDetailModal
          {...modal}
          onClose={() => setModal({ open: false, loading: false })}
        />
      )}
    </>
  );
}

WordItem.propTypes = {
  mean: PropTypes.string,
  onShowDetail: PropTypes.func,
  phonetic: PropTypes.string,
  picture: PropTypes.string,
  type: PropTypes.string,
  word: PropTypes.string,
};

WordItem.defaultProps = {
  onShowDetail: function () {},
};

export default WordItem;
