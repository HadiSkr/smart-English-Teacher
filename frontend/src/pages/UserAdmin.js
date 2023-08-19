import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../apis/userApi";
import { dictionaryRoot } from "../components/UI/style";
import UserCard from "../components/UI/UserCard";
import useTitle from "./../hooks/useTitle";
import { ROUTES } from "../constants/index";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function UserAdminPage() {
  useTitle("User Admin");
  const classes = useStyle();
  const [users, setUsers] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    (async function () {
      const res = await userApi.getAllUsers();
      setUsers(res.data);
    })();
    return () => {};
  }, []);

  return (
    <div className={`${classes.root} english-container`}>
      <div className="flex-center-between">
        <h1 className="english-title">User management</h1>
        <AddIcon
          className="english-setting-icon mr-5"
          onClick={() => history(ROUTES.ADD_USER)}
        />
      </div>
      <div className="english-break"></div>
      <Grid container spacing={3}>
        {users.map((user, index) => (
          <Grid item xs={12} md={6} key={index}>
            {user.isLocked !== -1 && (
              <UserCard
                to={`/admin/user/detail/${user._id}`}
                avatar={user.avatar}
                name={user.name}
                role={user.roleType}
                status={user.isLocked}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
