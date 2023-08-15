import React, { useState } from "react";
import SettingModal from "../Settings/Modal";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FaceIcon from "@mui/icons-material/Face";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from '@mui/icons-material/Home'
import useStyle from "./style";

function SettingMenu({ anchorEl, onClose }) {
  const classes = useStyle();
  // eslint-disable-next-line no-unused-vars
  const { isAuth, role } = useSelector((state) => state.authReducer);
  const [open, setOpen] = useState(false);

  return (
    <>
      {isAuth ? (
        <Menu
          classes={{ paper: classes.root }}
          anchorEl={anchorEl}
          disableScrollLock={true}
          getContentAnchorEl={null}
          onClose={onClose}
          open={Boolean(anchorEl)}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <Link to={ROUTES.PROFILE}>
            <MenuItem className={classes.menuItem}>
              <AccountCircleIcon className={classes.icon} fontSize="small" />
              <p className={classes.text}>Personal Information</p>
            </MenuItem>
          </Link>
          {window.location.href.includes('admin') ? (
           <a href={ROUTES.HOME}>
              <MenuItem className={classes.menuItem}>
                <HomeIcon className={classes.icon} fontSize="small" />
                <p className={classes.text}>Home page</p>
              </MenuItem>
            </a>
          ) : (
            <a href={ROUTES.ADMIN}>
              <MenuItem className={classes.menuItem}>
                <FaceIcon className={classes.icon} fontSize="small" />
                <p className={classes.text}>Admin</p>
              </MenuItem>
            </a>
          )}
          <MenuItem onClick={() => setOpen(true)} className={classes.menuItem}>
            <SettingsIcon className={classes.icon} fontSize="small" />
            <p className={classes.text}>Setting</p>
          </MenuItem>
          
          <a href={ROUTES.LOGOUT}>
            <MenuItem className={classes.menuItem}>
              <ExitToAppIcon className={classes.icon} fontSize="small" />
              <p className={classes.text}>Log out</p>
            </MenuItem>
          </a>
          {open && <SettingModal open={open} onClose={() => setOpen(false)} />}
        </Menu>
      ) : (
        ""
      )}
    </>
  );
}

SettingMenu.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
};

SettingMenu.defaultProps = {
  anchorEl: null,
  onClose: function () {},
};

export default SettingMenu;
