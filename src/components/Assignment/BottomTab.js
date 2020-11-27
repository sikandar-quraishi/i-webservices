import React from "react";
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Box,
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import SelectHeader from "./SelectHeader";
import MainCard from "./MainCard";
import ShareCard from "./ShareCard";
import Crousel from "./Crousel";
import "./BottomTab.scss";

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

const BottomTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={0}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bottom_tab">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="FEED"
            {...a11yProps(0)}
            icon={<BookmarkBorderIcon />}
          />
          <BottomNavigationAction
            label="MEET-UP"
            {...a11yProps(1)}
            icon={<MeetingRoomOutlinedIcon />}
          />
          <BottomNavigationAction
            label="NOTIFICATION"
            {...a11yProps(2)}
            icon={<NotificationsNoneIcon />}
          />
          <BottomNavigationAction
            label="ACCOUNT"
            {...a11yProps(3)}
            icon={<SettingsOutlinedIcon />}
          />
        </BottomNavigation>
      </div>
      <TabPanel style={{ padding: "0px" }} value={value} index={0}>
        <SelectHeader />
        <SubNavbar />
        <ShareCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Crousel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Tab Four
      </TabPanel>
    </div>
  );
};

export default BottomTab;
