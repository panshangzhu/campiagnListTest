import { fade } from "@material-ui/core/styles/colorManipulator";

const blackPalette = "#000";
const WhitePalette = "#fff";

// MUI Custom BreakPoints
// Material-UI components  use it such as `Grid` and `Hidden`.
// theme breakpoint use it with functions `up`, `down`, and `between`
// **** BE CAREFUL, if you changes this values, validate all UI isn"t broke ***
const XS = 0;
const SM = 350; // 600
const MD = 768; // 960
const LG = 1280;
const XL = 1920;

// MUI font size & weight
// **** BE CAREFUL, if you changes this values, validate all UI isn"t broke ***
const fontSizeBase = 14;
const fontWeightLightBase = 300;
const fontWeightRegularBase = 400;
const fontWeightMediumBase = 500;
const fontWeightBoldBase = 600;

export const mainTheme = {
  palette: {
    primary: {
      light:         "#3498db",
      main:         "#2980b9",
      contrastText: WhitePalette,
    },

    secondary: {
      light:         "#34495e",
      main:         "#2c3e50",
      contrastText: WhitePalette,
    },

    black: blackPalette,
    white: WhitePalette,
    mainBackground: "#ecf0f1",
    red: {
      main:  "#c0392b",
      light: "#e74c3c",
    },

    yellow: {
      main:  "#f39c12",
      light: "#f1c40f",
    },

    cyan: {
      main:    "#05d6d6",
      light:   "#96e6e8",
    },

    orange: {
      main:  "#d35400",
      light: "#e67e22",
    },

    green: {
      main:  "#27ae60",
      light: "#2ecc71",
    },

    purple: {
      main:  "#8e44ad",
      light: "#9b59b6",
    },
  },

  // Define custom breakpoints to components that use it,
  // **** BE CAREFUL, if you changes this values, validate all UI isn"t broke ***
  breakpoints: {
    values: {
      xs: XS,
      sm: SM,
      md: MD,
      lg: LG,
      xl: XL,
    },
  },
  // Set MUI Typography variant Mapping
  // https://material-ui.com/components/typography/#component
  props: {
    MuiTypography: {
      variantMapping: {
        h1:        "h2",
        h2:        "h2",
        h3:        "h3",
        h4:        "h4",
        h5:        "h5",
        h6:        "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        caption:   "p",
        button:    "p",
        overline:  "p",
        body1:     "p",
        body2:     "p",
      },
    },
  },
  // Inspired by MUI default value:
  // https://material-ui.com/customization/default-theme/?expand-path=$.typography
  typography: {

    // MUI font size & weight
    fontSize:          fontSizeBase,
    fontWeightLight:   fontWeightLightBase, // 300
    fontWeightRegular: fontWeightRegularBase, // 400
    fontWeightMedium:  fontWeightMediumBase, // 500
    fontWeightBold:    fontWeightBoldBase, // 600

    // MUI html element font size
    htmlFontSize: fontSizeBase,

    h1: {
      fontWeight:    fontWeightRegularBase,
      fontSize:      "6rem", // 84px
      lineHeight:    1.167,
      letterSpacing: "-0.01562em",

      [`@media screen and (max-width:${MD}px)`]: {
        fontSize: "4rem",
      },
    },

    h2: {
      fontWeight:    fontWeightRegularBase,
      fontSize:      "3.75rem", // 52.5px
      lineHeight:    1.2,
      letterSpacing: "-0.00833em",

      [`@media screen and (max-width:${MD}px)`]: {
        fontSize: "2.75rem",
      },
    },

    h3: {
      fontWeight:    fontWeightMediumBase,
      fontSize:      "3.75rem", // 52.5px
      lineHeight:    1.2,
      letterSpacing: "-0.00833em",

      [`@media screen and (max-width:${MD}px)`]: {
        fontSize: "2.75rem",
      },
    },

    h4: {
      fontWeight:    fontWeightMediumBase,
      fontSize:      "2.125rem", // 30.5px
      lineHeight:    1.235,
      letterSpacing: "0.00735em",

      [`@media screen and (max-width:${MD}px)`]: {
        fontSize: "1.125rem",
      },
    },

    h5: {
      fontWeight:    fontWeightMediumBase,
      fontSize:      "1.5rem", // 21px
      lineHeight:    1.334,
      letterSpacing: "0em",

      [`@media screen and(max-width:${MD}px)`]: {
        fontSize: "1rem",
      },
    },

    h6: {
      fontWeight:    fontWeightBoldBase,
      fontSize:      "1rem", // 14px
      lineHeight:    1.6,
      letterSpacing: "0.00938em",

      [`@media screen and(max-width:${MD}px)`]: {
        fontSize: "0.875rem", // 12.25 px
      },

      [`@media screen and(max-width:${SM}px)`]: {
        fontSize: "0.75rem", // 10.5 px
      },
    },
    subtitle1: {
      fontWeight:    fontWeightRegularBase,
      fontSize:      "0.71428571rem", // 10 px
      lineHeight:    1.66,
      letterSpacing: "0.03333em",

      [`@media screen and(max-width:${MD}px)`]: {
        fontSize:   "0.57142857rem", // 8 px
        lineHeight: 2,
      },
    },

    subtitle2: {
      fontWeight:    fontWeightMediumBase,
      fontSize:      "1rem", // 14px
      lineHeight:    1.4,
      letterSpacing: "0.03333em",

      [`@media screen and(max-width:${MD}px)`]: {
        fontSize:   "0.85714286rem", // 12px
        lineHeight: 1.43,
      },
    },

    body1: {
      fontWeight:    fontWeightRegularBase,
      fontSize:      "1rem", // 14px
      lineHeight:    1.5,
      letterSpacing: "0.00938em",

      [`@media screen and(max-width:${MD}px)`]: {
        fontSize: "0.875rem", // 12.25 px
      },
    },

    body2: {
      fontWeight:    fontWeightMediumBase,
      fontSize:      "0.875rem", // 12.25 px
      lineHeight:    1.43,
      letterSpacing: "0.01071em",

      [`@media screen and (max-width:${MD}px)`]: {
        fontSize: "0.65rem", // 9 px
      },
    },

    button: {
      fontWeight:    fontWeightMediumBase,
      fontSize:      "0.875rem", // 12.25 px
      lineHeight:    1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",

      [`@media screen and (max-width:${MD}px)`]: {
        fontSize: "0.75rem", // 10.5 px
      },
    },

    caption: {
      color:         "#636b73",
      fontWeight:    fontWeightRegularBase,
      fontSize:      "0.715rem", // 10 px
      lineHeight:    1.3,
      letterSpacing: "0.03333em",

      [`@media screen and (max-width:${SM}px)`]: {
        fontSize: "0.65rem", // 9 px
      },
    },
  },


  boxShadow: {
    card:             `0 6px 8px ${fade(blackPalette, 0.3)}`,
    navigation: "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
    topShadow:        `0 -6px 8px ${fade(blackPalette, 0.3)}`,
  },

  overrides: {
  }
};