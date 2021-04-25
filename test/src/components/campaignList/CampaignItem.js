import React from 'react'
// Material-UI
import { makeStyles, Grid, Typography } from "@material-ui/core";
// Internal
import { getNameColor, getNameColorHover } from "./Constants";

const useStyle = makeStyles((theme) => ({
  campaignBox: ({name}) => ({
    padding: theme.spacing(2),
    minHeight: 100,
    backgroundColor: getNameColor(name, theme),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: getNameColorHover(name, theme),
    }
  }),
}));

 const CampaignItem = ({campaign, onCampaignClick}) => {
    const name = campaign?.name;
    const classes = useStyle({name});
    if(!campaign) return null;
    return (
        <Grid
         item
         container
         sm={12}
         md={6}
         lg={4}
         justify="center"
         direction="column"
         alignItems="center"
         onClick={() => onCampaignClick(campaign.name, campaign.id)}
         className={classes.campaignBox}>
           <Typography variant="h6">
                ID: {campaign.id}
            </Typography>
            <Typography variant="h5">
                {campaign.name}
            </Typography>
        </Grid>
    )
}

export default CampaignItem;
