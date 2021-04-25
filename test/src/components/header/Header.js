import React from 'react'
// Material-UI
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.secondary.main,
    color: theme.palette.white,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent:"space-between",
    alignItems: "center",
  },
  creator: {
    color: theme.palette.white,
    textDecoration: "none",
  }
}));

export default function Header() {
    const classes = useStyles();
    return (
       <div className={classes.header}>
          <Typography variant="h4">
            Campaign List
          </Typography>
          <Typography component="a" target="_blank" href="http://www.yipanwang.net/" className={classes.creator}>
            By Yipan Wang
          </Typography>
       </div>
    )
}
