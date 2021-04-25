import { routerActions } from "connected-react-router";
import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router";

const CampaignList = lazy(() =>
  import("./components/campaignList/CampaignList")
);
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));

export default class Router extends Component {
  render() {
    return (
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" render={() => <CampaignList />} />
          <Route
            path="/campaigns/:id([0-9]+)"
            render={({ match }) => <Dashboard id={match.params.id} />}
          />
        </Switch>
      </Suspense>
    );
  }
}
