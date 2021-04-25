import React from 'react';
// import merge from 'lodash/merge';
import { cloneDeep } from 'lodash';

// Material-ui
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core"

// Internal
import { mainTheme } from './ThemeMain'


class AppTheme extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.isAnimationDisabled !== this.props.isAnimationDisabled
    }

    render() {
        const {
            children,
            isAnimationDisabled
        } = this.props;

        const mainThemeClone = cloneDeep(mainTheme)

        if(isAnimationDisabled) {
            // disable ripple effect
            mainThemeClone.props = {
                MuiButtonBase: { disableRipple: isAnimationDisabled }
            }
            //disable all transactions
            mainThemeClone.transactions = {
                create: () => 'none',
                duration: {
                    shortest: 0,
                    shorter:  0,
                }
            }
        }
        let MUITheme = createMuiTheme(mainThemeClone);
        MUITheme = responsiveFontSizes(MUITheme);

        return (
            <MuiThemeProvider theme={MUITheme}>
                {children}
            </MuiThemeProvider>
        )
    }
}

export default AppTheme