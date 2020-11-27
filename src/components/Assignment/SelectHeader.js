import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import "./Navbar.scss";
import Select from "./Select";
const src =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgICAcHBwcHCAoHBwcHBw8ICQcKIBEWFhURExMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0PGisZHxkrKysrKysrKysrKysrKysrKystKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAFR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzKisXSKAACgAAAAAgAAigAAAioACggKCCoAAAAAAAACAAqooCKgKAoAAAIAAAAAAAAAAAAAAAAICgAAgAAsSggIDSooAAIACiAKIoAAAAAAAAAAAAAAAACKgAAAAKADNRQFVFABAAAAAFAAAAAAAAAAAAAAIAAAIoCAAoigAAzQAVUWAAUEBQRQAABFgAAAAAUEBRFAEAFQBUUAABAAAAUIAyKgKsRYAACKICgAIoAAAAAAAACAAAAAAKiwAAEAAAAABBUBVRQAAKioCgAItAAAAAAAAAQVAAAAAFRYAACCoAAAAAioCxYkUAAAAAEBQARQAAAAARQEAAAAAAVAFAARUAAAAARUBVTFAEAUQAABRBRUFQEVAAAAAAAAAAAAAWCKAioAAAACAA1Ai0ERUAAAAAAUAAAEBUAAAAAAAAAFRQRRAAAAAAARFQG4qACKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAIACIAP//Z";

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
    border: "2px solid #a4ccb3",
    borderRadius: "50%",
  },
  appBar: {
    backgroundColor: "#365558",
    color: "#757575",
    boxShadow: "none",
  },
}));

const SelectHeader = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Avatar
              alt="Profile Picture"
              className={classes.avatar}
              src={src}
            />
          </IconButton>
          <Typography variant="h5" className={classes.title}></Typography>
          <select className="select_style">
            <option value="grapefruit">The london badgers</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SelectHeader;
