import React from "react";
// Material-UI
import { makeStyles} from "@material-ui/core";

// Breadcrumbs
import Breadcrumb from "components/navigation/breadcrumb/Breadcrumb";
import BreadcrumbItems from "components/navigation/breadcrumb/BreadcrumbItem";


const useStyles = makeStyles((theme) => ({
    breadcrumb: {
        zIndex: 3,
        position: 'relative',
        boxShadow: theme.boxShadow.navigation,
    }
}))

const NavigationView = ({ onClick, items }) => {
    const classes = useStyles();
  return (
    <Breadcrumb className={classes.breadcrumb} separator="/">
      {items.map((breadcrumbItem, index) => {
        const isActive = index + 1 === items.length;
        return (
          <BreadcrumbItems
            label={breadcrumbItem.label}
            key={breadcrumbItem.label}
            isActive={isActive}
            icon={breadcrumbItem.icon}
            onClick={(e) => onClick(e, breadcrumbItem.href)}
          />
        );
      })}
    </Breadcrumb>
  );
};
export default NavigationView
