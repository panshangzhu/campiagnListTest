import React, { Component } from "react";

// External
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Redux
import {
  getDashboardData,
  getDashboardName,
} from "redux/reducers/dashboardReducer/Selectors";
import {
  fetchNewDashboardData,
  resetDashboard,
} from "redux/reducers/dashboardReducer/Actions";

// View
import Overlay from "components/overLay/Overlay";
import DashboardView from "./DashboardView";

const stateToProps = (state) => ({
  dashboardName: getDashboardName(state),
  dashboardData: getDashboardData(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      fetchNewDashboardData,
      resetDashboard,
    },
    dispatch
  ),
});

class Dashboard extends Component {
  state = {
    number: 0,
    isLoading: false,
  };

  increaseNumber = () => this.setState({ number: this.state.number + 1 });
  setLoading = (isLoading) => this.setState({ isLoading });

  componentDidMount() {
    this.fetchDashboardData();
    this.interval = setInterval(this.fetchDashboardData, 5000);
  }

  componentWillUnmount() {
    // reset number to 0
    this.setState({ number: 0, isLoading: false });
    // reset Dashboard data
    this.props.actions.resetDashboard();
    //clear internal
    clearInterval(this.interval);
  }

  fetchDashboardData = () => {
    if (this.props.id) {
      this.setLoading(true);
      this.props.actions
        .fetchNewDashboardData(this.props.id, this.state.number)
        .then(() => {
          this.setLoading(false);
          this.increaseNumber();
        })
        .catch((error) => {
          console.error("error", error);
          alert("error", error);
          this.setLoading(false);
        });
    }
  };

  render() {
    if (!this.props.id) return <div>No access</div>;
    return (
      <>
        <Overlay open={this.state.isLoading} />
        <DashboardView
          dashboardName={this.props.dashboardName}
          dashboardData={this.props.dashboardData}
          number={this.state.number}
          id={this.props.id}
        />
      </>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(Dashboard);
