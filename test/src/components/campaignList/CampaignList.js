import React, { Component } from "react";

// External
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";

// Redux
import { getCampaignList } from "redux/reducers/campaignListReducer/Selectors";
import { fetchCampaignList } from "redux/reducers/campaignListReducer/Actions";
import { setDashboardName } from "redux/reducers/dashboardReducer/Actions";

// View
import Overlay from "components/overLay/Overlay";
import CampaignListView from "./CampaignListView";

const stateToProps = (state) => ({
  campaignList: getCampaignList(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchCampaignList,
      setDashboardName,
      push,
    },
    dispatch
  ),
});

class CampaignList extends Component {
  state = {
    isLoading: true,
  };

  setIsLoading = (isLoading) => this.setState({ isLoading });

  componentDidMount() {
    this.setIsLoading(true);
    // fetch campaign list
    this.props.actions
      .fetchCampaignList()
      .then(() => {
        this.setIsLoading(false);
      })
      .catch((error) => {
        console.error("error", error);
        alert("Error", error);
        this.setIsLoading(false);
      });
  }

  onCampaignClick = (name, id) => {
    this.props.actions.setDashboardName(name);
    this.props.actions.push(`/campaigns/${id}`);
  };

  render() {
    return (
      <>
        <Overlay open={this.state.isLoading} />
        <CampaignListView
          campaignList={this.props.campaignList}
          onCampaignClick={this.onCampaignClick}
        />
      </>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(CampaignList);
