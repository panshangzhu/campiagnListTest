import React from "react";

// Material-UI
import { makeStyles, Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";

// View
import {
  getNameColor,
  getNameColorHover,
} from "components/campaignList/Constants";

const useStyle = makeStyles((theme) => ({
  dashboardContainer: {
    backgroundColor: theme.palette.mainBackground,
    height: "calc(100vh - 115px)", // 115 is the height of header + breadcrumb
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    }
  },
  firstLayer: {
    minHeight: 60,
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      height: "25%",
    }
  },
  layerItemBorder: {
    border: `2px solid ${theme.palette.white}`,
  },
  secondLayer: {
    [theme.breakpoints.up('md')]: {
      height: "75%",
    }
  },
  layerNumber: {
    fontWeight: theme.typography.fontWeightBold,
  },
  secondLayerNumber: ({ dashboardName }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: getNameColorHover(dashboardName, theme),
  }),
  leftUsersContainer: {
    minHeight: 150,
  },
  rightInfomationContainer: ({ dashboardName }) => ({
    backgroundColor: getNameColor(dashboardName, theme),
    maxHeight: 250,
    minHeight: 90,
    height: `calc(40% - ${theme.spacing(1)}px)`,
    marginTop: theme.spacing(1),
  }),
  rightSingleContainer: {
    height: "60%",
  },
}));

const DashboardView = ({ dashboardData, dashboardName, number, id }) => {
  const classes = useStyle({ dashboardName });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (!dashboardData || number <= 0) return null;
  return (
    <Grid container className={classes.dashboardContainer}>
      {/* first layer */}
      <Grid item container xs={12} className={classes.firstLayer}>
        {/* total impression */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={4}
          className={classes.layerItemBorder}
        >
          <Typography variant="h6">Total Impressions</Typography>
          <Typography variant="h4" className={classes.layerNumber}>
            {dashboardData.totalImpressions}
          </Typography>
        </Grid>
        {/* Total CTR */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={4}
          className={classes.layerItemBorder}
        >
          <Typography variant="h6">Total CTR</Typography>
          <Typography variant="h4" className={classes.layerNumber}>
            {dashboardData.ctr}
            {""}%
          </Typography>
        </Grid>
        {/* Total Clicks */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={4}
          className={classes.layerItemBorder}
        >
          <Typography variant="h6">Total Clicks</Typography>
          <Typography variant="h4" className={classes.layerNumber}>
            {dashboardData.totalClicks}
          </Typography>
        </Grid>
      </Grid>
      {/* second layer */}
      <Grid item container xs={12} className={classes.secondLayer}>
        {/* left part: total user */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={4}
          className={classes.leftUsersContainer}
        >
          <Typography variant="h5">Total Users</Typography>
          <Typography variant="h3" className={classes.secondLayerNumber}>
            {dashboardData.totalUsers}
          </Typography>
        </Grid>
        {/* right part */}
        <Grid item container xs={12} md={8}>
          <Grid
            item
            container
            xs={12}
            justify="space-around"
            alignItems="center"
            className={classes.rightInfomationContainer}
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={4}
            >
              <Typography variant={isMobile ? "h6": "h5"}>Id</Typography>
              <Typography variant={isMobile ? "h4": "h3"} className={classes.layerNumber}>
                {id}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={4}
            >
              <Typography variant={isMobile ? "h6": "h5"}>Name</Typography>
              <Typography variant={isMobile ? "h4": "h3"} className={classes.layerNumber}>
                {dashboardName.length>0 ? dashboardName : "No Name"}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={4}
            >
              <Typography variant={isMobile ? "h6": "h5"}>Iteration</Typography>
              <Typography variant={isMobile ? "h4": "h3"} className={classes.layerNumber}>
                {number-1}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} className={classes.rightSingleContainer}>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              md={3}
              className={classes.layerItemBorder}
            >
              <Typography variant="h6" align="center">Most Recent Impressions</Typography>
              <Typography variant="h4" className={classes.layerNumber}>
                {dashboardData.recentSingle.impressions}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              md={3}
              className={classes.layerItemBorder}
            >
              <Typography variant="h6" align="center">Most Recent Clicks</Typography>
              <Typography variant="h4" className={classes.layerNumber}>
                {dashboardData.recentSingle.clicks}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              md={3}
              className={classes.layerItemBorder}
            >
              <Typography variant="h6" align="center">Most Recent Users</Typography>
              <Typography variant="h4" className={classes.layerNumber}>
                {dashboardData.recentSingle.users}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
              xs={12}
              md={3}
              className={classes.layerItemBorder}
            >
              <Typography variant="h6" align="center">Most Recent CTR</Typography>
              <Typography variant="h4" className={classes.layerNumber}>
                {dashboardData.recentSingle.singleCtr}
                {""}%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardView;
