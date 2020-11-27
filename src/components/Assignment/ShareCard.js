import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const src =
  "https://i.pinimg.com/originals/4c/db/26/4cdb26d6dd9f9f9bddf71167f0d45b9f.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    maxWidth: "100%",

    marginTop: "1em",
    marginBottom: "1em",
    boxShadow: "none",
    borderRadius: "0px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    // backgroundColor: red[500],
    border: "2px solid #a4ccb3",
    borderRadius: "50%",
  },
  button: {
    margin: theme.spacing(0),
    background: "#07d06f",
    width: "100%",
    marginTop: "1em",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#04a055",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  },
  copyButton: {
    margin: theme.spacing(0),
    // background: '#07d06f',
    width: "100%",
    marginTop: "1em",
    color: "#757575",
    textTransform: "capitalize",
  },
}));

const ShareCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={src} aria-label="recipe" className={classes.avatar}>
            {/* R */}
          </Avatar>
        }
        title="Neighbeerly says:"
        subheader="Today at 12:36pm"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Invite your friends to enjoy a range of discounts and rewards off
          artisinal and craft beer boxes. It's win-win!
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Share your invite link with your metes directly of if you need
          suggestions, send links via your favourite messaging apps.
        </Typography>

        <Button
          variant="contained"
          // color="secondary"
          // disabled
          color="default"
          className={classes.button}
          startIcon={<WhatsAppIcon />}
        >
          Open WhatsApp
        </Button>
        <Button className={classes.copyButton} variant="outlined">
          Copy Link
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShareCard;
