import React, { Component } from 'react'

// External
import { connect } from 'react-redux'
import { bindActionCreators, compose} from 'redux'
import { push } from "connected-react-router"

// Selectors
import { getLocation } from 'redux/reducers/main/Selectors'

// Internal
import {NavigationBreadcrumbs} from "./Constant";
import NavigationView from './NavigationView';

export class Navigation extends Component {

    onClick = (e, url) => {
        e.preventDefault();
        this.props.actions.push(url)
    }

    // show breadcrumb items according to location
    getBreadcrumItems = () => {
        const basePath = this.props.location?.pathname;
        const breadcrumbItems = [NavigationBreadcrumbs.CAMPAIGNLIST]
        if(basePath.includes(NavigationBreadcrumbs.DASHBOARD.href)) {
            breadcrumbItems.push(NavigationBreadcrumbs.DASHBOARD);
        }
        return breadcrumbItems;
    }

    render() {
        return (
            <NavigationView
            onClick={this.onClick}
            items={this.getBreadcrumItems()}
             />
        )
    }
}

const mapStateToProps = (state) => ({
    location: getLocation(state) // get current location
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      push,
  }, dispatch)  
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
