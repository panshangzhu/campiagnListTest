import React from "react";

// Material-UI
import { Breadcrumbs, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  breadcrumbContainer: {
    padding: [[theme.spacing(1),theme.spacing(2)]],
    boxShadow: theme.boxShadow.card,
    backgroundColor: theme.palette.white,
  },
}));

const Breadcrumb = ({
  children, // Breadcrumb items
  separator, // define separator
}) => {
  const classes = useStyles();
  return (
    <Breadcrumbs
      className={classes.breadcrumbContainer}
      {...(separator && { separator })}
    >
      {/* return breadcrumbs items children */}
      {React.Children.map(children, (child, index) => {
        if (child) {
            // build child with props
          return React.cloneElement(child, {
            key: index,
          });
        }
      })}
    </Breadcrumbs>
  );
};
export default Breadcrumb
