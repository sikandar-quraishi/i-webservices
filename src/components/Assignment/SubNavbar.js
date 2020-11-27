import React from "react";
import {
  fade,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  InputBase,
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(-1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  avatar: {
    // backgroundColor: red[500],
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
          style={{
            backgroundColor: "#fff",
            color: "#757575",
            boxShadow: "none",
          }}
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
              {/* <Avatar style={{borderRadius: "0%",     width: "40px"}} alt="Profile Picture" src={src} /> */}
              <Avatar
                alt="Profile Picture"
                className={classes.avatar}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozk3t1_ZMBr48G2_PSBhwZsvtCEFlwST9Zw&usqp=CAU"
              />
            </IconButton>
            <Typography variant="h5" className={classes.title}></Typography>
            <div
              style={{ backgroundColor: "rgb(244 245 241)" }}
              className={classes.search}
            >
              <InputBase
                placeholder="Write a short-out"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            {auth && (
              <div>
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
                  <MenuItem onClick={handleClose}>My account</MenuItem>
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
