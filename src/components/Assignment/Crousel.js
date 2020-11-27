import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {
  makeStyles,
  useTheme,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import Quantity from "./Quantity";

// import MobileStepper from '@material-ui/core/MobileStepper';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import IconButton from '@material-ui/core/IconButton';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://www.engagingnetworks.net/assets/uploads/2019/03/Online-Store-eCommerce.png",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://media.istockphoto.com/photos/shopping-online-concept-shopping-service-on-the-online-web-with-by-picture-id1133980246?k=6&m=1133980246&s=612x612&w=0&h=FeSvkjQBjMhru74vd2Y7o66QG7xtlG9j3pxpw9mb-BQ=",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://img.freepik.com/free-photo/business-people-use-technology-e-commerce-internet-global-marketing-purchasing-plan_36325-2308.jpg?size=626&ext=jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  header: {
    alignItems: "center",
    height: 50,
    backgroundColor: "#f4f5f1",
    textAlign: "end",
    color: "#365558",
  },
  img: {
    height: 255,
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  menuButton: {
    marginRight: "1em",
  },
}));

const Crousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = tutorialSteps.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };

  return (
    <div>
      <div className={classes.root}>
        <Paper square elevation={0}>
          <Typography className={classes.header}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Typography>

          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            // onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 0 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      /> */}
          <Paper>
            <Quantity />
          </Paper>
        </Paper>
      </div>
    </div>
  );
};

export default Crousel;
