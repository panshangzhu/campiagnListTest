export const CampaignNameColor = Object.freeze({
  RED: "Red",
  GREEN: "Green",
  BLUE: "Blue",
  YELLOW: "Yellow",
  PURPLE: "Purple",
  ORANGE: "Orange",
});

export const getNameColor = (name, theme) => {
  switch (name) {
    case CampaignNameColor.RED:
      return theme.palette.red.light;
    case CampaignNameColor.GREEN:
      return theme.palette.green.light;
    case CampaignNameColor.ORANGE:
      return theme.palette.orange.light;
    case CampaignNameColor.YELLOW:
      return theme.palette.yellow.light;
    case CampaignNameColor.BLUE:
      return theme.palette.cyan.light;
    case CampaignNameColor.PURPLE:
      return theme.palette.purple.light;
    default:
      return theme.WhitePalette;
  }
};

export const getNameColorHover = (name, theme) => {
  switch (name) {
    case CampaignNameColor.RED:
      return theme.palette.red.main;
    case CampaignNameColor.GREEN:
      return theme.palette.green.main;
    case CampaignNameColor.ORANGE:
      return theme.palette.orange.main;
    case CampaignNameColor.YELLOW:
      return theme.palette.yellow.main;
    case CampaignNameColor.BLUE:
      return theme.palette.cyan.main;
    case CampaignNameColor.PURPLE:
      return theme.palette.purple.main;
    default:
      return theme.WhitePalette;
  }
};
