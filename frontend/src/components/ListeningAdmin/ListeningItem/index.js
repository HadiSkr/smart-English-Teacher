import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WordDetailModal from "../../UI/WordDetailModal";
import { DEFAULTS, ROUTES } from "../../../constants";
import { cloudinaryImgOptimize } from "../../../helper";
import { setMessage } from "../../../redux/actions/messageAction";
import { deleteListen } from "../../../redux/actions/listeningAction";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyle from "./style";

function ListeningItem({ _id, Name, Image, Topic, CreateDate }) {
  const classes = useStyle();
  const imgSrc = cloudinaryImgOptimize(
    Image ? Image : DEFAULTS.IMAGE_SRC,
    50,
    50,
    true,
    true
  );

  const history = useNavigate();
  function handleClick(id) {
    history(`/admin/listening/details/${id}`);
  }
  function handleEditClick(id) {
    history(`/admin/listening/edit/${id}`);
  }
  const [modal, setModal] = useState({ loading: false, open: false });
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deleteListen(id));
      dispatch(setMessage("Delete successfully", "success"));
      history.replace(ROUTES.LISTENING_ADMIN);
    }
  };

  return (
    <>
      <div className={`${classes.root} flex-center-between`}>
        <div
          className="w-100 flex-center--ver"
          onClick={() => handleClick(_id)}
        >
          <img className={classes.picture} src={imgSrc} alt="" />
          <div className="ml-8 flex-grow-1">
            <h3 className={classes.word}>{Name}</h3>

            <p className={`${classes.phonetic} phonetic`}> Topic: {Topic} </p>

            <p className={classes.mean}>Create Date: {CreateDate}</p>
          </div>
        </div>
        <div className="flex-center--ver">
          <div className="mr-5">
            <EditIcon
              className="english-setting-icon"
              onClick={() => handleEditClick(_id)}
            />
          </div>
          <DeleteIcon
            className="english-setting-icon"
            onClick={() => deleteHandler(_id)}
          />
        </div>
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

ListeningItem.propTypes = {
  CreateDate: PropTypes.string,
  onShowDetail: PropTypes.func,
  Topic: PropTypes.string,
  Image: PropTypes.string,
  Name: PropTypes.string,
  _id: PropTypes.string,
};

ListeningItem.defaultProps = {
  onShowDetail: function () {},
};

export default ListeningItem;
