import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  Chip,
} from "@material-ui/core";
import "./Navbar.scss";
const src =
  "https://i.pinimg.com/originals/4c/db/26/4cdb26d6dd9f9f9bddf71167f0d45b9f.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#fff",
  },
  menuButton: {
    //   marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    border: "2px solid #a4ccb3",
    borderRadius: "50%",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className={classes.root}>
        <AppBar
          style={{ backgroundColor: "#ffffff", color: "#757575" }}
          position="static"
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <LocalFloristIcon /> */}
              <Avatar
                style={{ borderRadius: "0%", width: "40px" }}
                alt="Profile Picture"
                src={src}
              />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              <Chip
                size="small"
                label="beta"
                stlye={{ backgroundColor: "#365558", color: "#fff" }}
              />
            </Typography>

            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar
                    className={classes.avatar}
                    alt="Profile Picture"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozk3t1_ZMBr48G2_PSBhwZsvtCEFlwST9Zw&usqp=CAU"
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
