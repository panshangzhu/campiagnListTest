import React from "react";

// External
import classNames from "classnames";

// Material-UI
import {
  Grid,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = (theme) => ({
  waitOverlay: {
    display: "none",

    position:        "absolute",
    zIndex:          400000,
    width:           "100%",
    height:          "100%",
    top:             0,
    left:            0,
    bottom:          0,
    right:           0,
    backgroundColor: fade(theme.palette.black, 0.45),

    "&$open": {
      display: "block",
    },
  },

  inputBlocker: {
    display: "none",

    position: "absolute",
    zIndex:   400000,
    width:    "100%",
    height:   "100%",
    top:      0,
    left:     0,
    bottom:   0,
    right:    0,
    opacity:  0,

    "&$open": {
      display: "block",
    },
  },

  open: {},

  paper: {
    position:        "absolute",
    minWidth:        theme.spacing(35),
    backgroundColor: theme.palette.white,
    boxShadow:       theme.shadows[5],
    padding:         theme.spacing(4),
    top:             "50%",
    left:            "50%",
    transform:       "translate(-50%, -50%)",

    // Remove outline added by MUI.
    "&:focus": {
      outline: "none!important",
    },
  },

  minimalistGrid: {
    position:  "absolute",
    width:     100,
    height:    100,
    top:       "50%",
    left:      "50%",
    transform: "translate(-50%, -50%)",
  },

  progress: {},
});

class Overlay extends React.Component {

  waitOverlayDelayTimeout = null;

  // Always start as being closed (so delay can apply even if componentDidMount with open: true)
  state = {
    isReallyOpen: false,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.open !== this.props.open
      // || nextProps.message !== this.props.message // Do not include message, as it could be an un-cachable node
      || nextState.isReallyOpen !== this.state.isReallyOpen
    ;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Check if PROPS open flag has changed (do nothing on the state flag)
    if (prevProps.open !== this.props.open) {
      this.handleOpenChange();
    }
  }

  componentDidMount() {
    this.handleOpenChange();
  }

  handleOpenChange() {
    const { open } = this.props;
    const { isReallyOpen } = this.state;

    // Only act if internal state is different than prop state (failsafe)
    if (open === isReallyOpen) { return; }

    else {
      this.setState({ isReallyOpen: open });
    }
  }

  render() {
    const {
      classes, open,
    } = this.props;
    const { isReallyOpen } = this.state;

    const waitPaper =  (
        <Grid container className={classes.minimalistGrid} direction="row" alignItems="center" justify="center">
          <Grid item>
            <CircularProgress
              size={50}
              thickness={6}
              classes={{
                root: classes.progress,
              }}
            />
          </Grid>
        </Grid>
      )
    ;
    // Locally applied version of the overlay
    return [
      <div
        key="waitOverlay"
        className={classNames(classes.waitOverlay, (isReallyOpen ? classes.open : ""))}
      >
        {waitPaper}
      </div>,
      <div
        key="inputBlocker"
        onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); }} // Click swallower
        className={classNames(classes.inputBlocker, (open && !isReallyOpen ? classes.open : ""))}
      />,
    ];
  }

}

export default withStyles(styles)(Overlay);
