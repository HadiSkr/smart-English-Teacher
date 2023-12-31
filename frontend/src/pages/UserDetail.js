import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import userApi from "./../apis/userApi";
import { ROUTES } from "../constants";
import { formatDate } from "../helper";
import useTitle from "../hooks/useTitle";
import { setMessage } from "../redux/actions/messageAction";
// import CameraIcon from "@mui/icons-material/Camera"
// import InputCustom from "../components/UI/InputCustom";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyle = makeStyles(() => ({
  wrap: {
    minHeight: "calc(100vh - 7.2rem)",
  },

  root: {
    backgroundColor: "var(--bg-color-sec)",
    padding: "1.5rem 2.5rem",
    borderRadius: "var(--border-radius)",
    textAlign: "center",
    boxShadow: "var(--box-shadow)",
  },

  avtWrap: {
    width: "15rem",
    height: "15rem",
    position: "relative",
  },

  avt: {
    borderRadius: "50%",
    border: "2px solid var(--primary-color)",
  },

  cameraIconWrap: {
    position: "absolute",
    right: 0,
    bottom: 0,

    width: "4.2rem",
    height: "4.2rem",
    padding: "1.2rem",

    backgroundColor: "var(--primary-color)",
    borderRadius: "50%",
    cursor: "pointer",
    border: "solid 5px var(--bg-color-sec)",

    "&:hover, &:active": {
      opacity: 0.85,
    },
  },

  cameraIcon: {
    color: "var(--text-color)",
    fontSize: "2rem",
  },

  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0,
    cursor: "pointer",
  },

  name: {
    fontSize: "2.4rem",
    lineHeight: 1.5,
    letterSpacing: "0.75px",
  },

  role: {
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "var(--label-color)",
    letterSpacing: "0.75px",
    textTransform: "capitalize",
  },

  info: {
    margin: "2.4rem 0",

    "& p": {
      lineHeight: 2,
      fontSize: "1.6rem",
      letterSpacing: "0.75px",
      color: "var(--text-color)",
    },
  },

  coin: {
    color: "var(--label-color)",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  icon: {
    fontSize: "1.8rem",
    color: "var(--grey)",
    cursor: "pointer",
  },

  visiblePw: {
    color: "var(--primary-color)",
  },
  visibleConfirmPw: {
    color: "var(--primary-color)",
  },
  editBtn: {
    padding: "5px 10px",
    width: "100%",
  },
  textError: {
    marginTop: "4px",
    color: "var(--error-color)",
    fontSize: "1.2rem",
    textAlign: "left",
  },
}));

export default function UserDetailPage() {
  useTitle("User Detail");
  const classes = useStyle();
  const { user } = useSelector((state) => state.authReducer);
  const { user_id } = useParams();
  const [userDetail, setUserDetail] = useState([]);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    (async function () {
      const res = await userApi.getUserDetails(user_id);
      setUserDetail(res.data.user);
    })();
    return () => {};
  }, [user_id]);

  const handleLockUser = async () => {
    if (user._id === user_id) {
      dispatch(setMessage("This account is logging", "error"));
    } else {
      try {
        const res = await userApi.lockUser(user_id);
        if (res) {
          dispatch(setMessage(res.data.message, "success"));
          window.location.reload();
        }
      } catch (err) {
        dispatch(setMessage(err.response.data.message, "error"));
      }
    }
  };

  const handleUnlockUser = async () => {
    try {
      const res = await userApi.unlockUser(user_id);
      if (res) {
        dispatch(setMessage(res.data.message, "success"));
        window.location.reload();
      }
    } catch (err) {
      dispatch(setMessage(err.response.data.message, "error"));
    }
  };
  const handleDeleteUser = async () => {
    if (user._id === user_id) {
      dispatch(setMessage("This account is logging", "error"));
    } else {
      try {
        const res = await userApi.deleteUser(user_id);
        if (res) {
          dispatch(setMessage(res.data.message, "success"));
          history.replace(ROUTES.USER_ADMIN);
        }
      } catch (err) {
        dispatch(setMessage(err.response.data.message, "error"));
      }
    }
  };

  return (
    <div className={`${classes.wrap} container flex-center`}>
      <div className={classes.root}>
        <div className="flex-center w-100 h-100">
          <div className={classes.avtWrap}>
            <img
              src={userDetail.avatar}
              alt=""
              className={`${classes.avt} w-100 h-100`}
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className={classes.name}>{userDetail.name}</h2>
          <h4 className={classes.role}>{userDetail.roleType}</h4>
        </div>

        <div className={classes.info}>
          <p>{userDetail.email}</p>
          <p>Have joined in {formatDate(userDetail.createdAt)}</p>
          <p>
          Current number of coins:{" "}
            <span className={classes.coin}>{userDetail.coin}</span>
          </p>
        </div>

        <div className="d-flex-center flex-center-col w-100">
          <Button
            className={`${classes.editBtn} _btn _btn-primary mb-5`}
            startIcon={<EditIcon />}
            onClick={() => history(`/admin/user/edit/${user_id}`)}
          >
            Edit
          </Button>
          {userDetail.isLocked !== 0 ? (
            <Button
              className={`${classes.editBtn} _btn _btn-primary mb-5`}
              startIcon={<LockOpenIcon />}
              onClick={handleUnlockUser}
            >
              Make an account
            </Button>
          ) : (
            <Button
              className={`${classes.editBtn} _btn _btn-primary mb-5`}
              startIcon={<LockIcon />}
              onClick={handleLockUser}
            >
              Lock account
            </Button>
          )}
          <Button
            className={`${classes.editBtn} _btn _btn-primary`}
            startIcon={<DeleteIcon />}
            onClick={handleDeleteUser}
          >
            Delete account
          </Button>
        </div>
      </div>
    </div>
  );
}
