import React from 'react'
// Material-UI
import { makeStyles, Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    item: {
        cursor: 'pointer',
        textDecoration: 'none',
        background: 'transparent',
        border: 'none',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        "&:hover": {
            textDecoration: 'underline',
        },
    },
    currentItem: {
        fontWeight: theme.typography.fontWeightMedium,
        color:theme.palette.primary.main,
    }
}))

const BreadcrumbItem = ({
    label,
    icon,  // fontAwasome icon if provided
    isActive,
    onClick,
}) => {
    const classes = useStyles();
    if(isActive) {
        return (
            <Typography
             variant="h6"
             className={classes.currentItem}
             >
                 {icon && icon}
                 {' '}
                 {label}
            </Typography>
        )
    }
    return (
        <button
        type="button"
        className={classes.item}
        onClick={onClick || null} // if onClock provided
        >
          {icon && icon}
          {' '}
          {label}
        </button>
    )
}
export default BreadcrumbItem
