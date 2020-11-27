import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";
const cardImage =
  "https://blog.payoneer.com/wp-content/uploads/2016/09/freelance-coder-847x361.png";
const logo =
  "https://i.pinimg.com/originals/4c/db/26/4cdb26d6dd9f9f9bddf71167f0d45b9f.png";
const user =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozk3t1_ZMBr48G2_PSBhwZsvtCEFlwST9Zw&usqp=CAU";

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
}));

const MainCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={logo}
            aria-label="recipe"
            className={classes.avatar}
          ></Avatar>
        }
        title="Neighbeerly says:"
        subheader="Today at 12:36pm"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Welcome to Neighbeerly everyone! Check out this Image for a quick
          reminder of what we're all about.
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={cardImage}
        title="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar src={user} aria-label="recipe" className={classes.avatar}>
            {/* R */}
          </Avatar>
        }
        title="George Smith"
        subheader="Today at 12:36pm"
      />
    </Card>
  );
};

export default MainCard;
