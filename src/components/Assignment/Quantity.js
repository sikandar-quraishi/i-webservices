import React, { useState } from "react";
import {
  makeStyles,
  Button,
  IconButton,
  Grid,
  Divider,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

import "./Quantity.scss";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.9),
  },
  section1: {
    margin: theme.spacing(0, 2),
    // margin: '1em 1em 1em 1em'
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(0),
    background: "#365558",
    width: "100%",
    marginTop: "1em",
    color: "#fff",
    marginBottom: "5em",
    textTransform: "initial",
    '&:hover': {
      backgroundColor: '#28393b',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  
}));

export default function MiddleDividers(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = useState(1);

  const IncrementItem = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      alert("We don't have more items in our store from more then 10");
      setQuantity(10);
    }
  };
  const DecreaseItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Minimum you can choose 1 item");
      setQuantity(1);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography
                style={{ marginTop: "1em" }}
                className="font_faimily"
                gutterBottom
                variant="h6"
              >
                Neighbeerly craft beer celection box
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6">
                $4.50
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Divider variant="middle" />

        <Typography
          className={classes.section1}
          color="textSecondary"
          variant="body1"
        >
          Estimated delivery Sat 18 Jul - Mon 20 Jul
        </Typography>

        <Divider variant="middle" />

        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography
                style={{ fontSize: "18px" }}
                gutterBottom
                variant="body"
              >
                Quantity
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={handleClickOpen}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <Typography variant="h6">
                  <span>{quantity}</span>
                  <ArrowForwardIosIcon
                    style={{ fontSize: "18px", marginBottom: "-2px" }}
                  />
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </div>

        <Divider variant="middle" />

        <div className={classes.section2}>
          <Typography color="textSecondary" variant="body1" gutterBottom>
            Appropriately generate distributed innovation without front-end
            methods of empowerment. Phosfluorescently network distinctive.
          </Typography>
        </div>

        <Divider variant="middle" />

        <div className={classes.section2}>
          <Typography color="textSecondary" variant="body1" gutterBottom>
            <Button
              variant="contained"
              // color="secondary"
              // disabled
              size="large"
              color="default"
              className={classes.button}
              // startIcon={<WhatsAppIcon />}
            >
              Add to Basket
            </Button>
          </Typography>
        </div>

        <Divider variant="middle" />
      </div>
      <Dialog
        style={{
          margin: "-1px",
          boxShadow: "none",
          width: "100%",
          maxWidth: "100%",
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{ textAlign: "center", textTransform: "uppercase" }}
        >
          {"Choose Quantity"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running. */}
            <div style={{ textAlign: "center" }}>
              <IconButton
                onClick={DecreaseItem}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <RemoveCircleOutlineIcon style={{ fontSize: "3rem" }} />
              </IconButton>
              <span style={{ margin: "0 3em", fontSize: "16px" }}>
                {quantity}{" "}
              </span>
              <IconButton
                onClick={IncrementItem}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ControlPointIcon style={{ fontSize: "3rem" }} />
              </IconButton>
              {/* <p>{props.quantity}</p> */}
              {/* <Cart /> */}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button style={{textTransform: "capitalize",
    color: "#07d06f"}} onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
