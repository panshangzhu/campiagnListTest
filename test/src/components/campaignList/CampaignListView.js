import React from "react";

// Material-UI
import { makeStyles, Grid } from "@material-ui/core";

// Internal
import CampaignItem from "./CampaignItem";

const useStyle = makeStyles((theme) => ({
  campaignListcontainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.mainBackground,
    height: "calc(100vh - 115px)", // 115 is the height of header + breadcrumb
  },
}));

const CampaignListView = ({ onCampaignClick, campaignList }) => {
  const classes = useStyle();
  if(!campaignList) return null;
  return (
    <Grid container justify="center" className={classes.campaignListcontainer}>
      {campaignList.map((campaign) => (
        <CampaignItem
          key={campaign.id}
          campaign={campaign}
          onCampaignClick={onCampaignClick}
        />
      ))}
    </Grid>
  );
};

export default CampaignListView;
