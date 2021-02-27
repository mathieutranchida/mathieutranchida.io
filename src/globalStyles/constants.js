export const DIMENSIONS = {
  leftColumnWidth: "40vw",
  leftColumnHeight: "100vh",
  rightColumnHeight: "100vh",
  rightColumnWidth: "60vw",
  totalHeight: "500vh",
  videoHeight: "55vh",
  videoWidth: "50vw",
  imageHeight: "85vh",
  imageWidth: "50vw",
};

export const BACKGROUND = {
  home: "160, 173, 171",
  homeDarker: "140, 153, 151",
};

export const TXT = {
  color: "white",
  width: "27vw",
  margin: "0px 6vw 0px 7vw",
  h2size: "16pt",
};

export const TXT_CONSTANTS = {
  position: "absolute",
  top: "112vh",
  topPhoto: "212vh",
  topDesign: "312vh",
  topContact: "412vh",
  maxWidth: TXT.width,
  margin: TXT.margin,
  fontWeight: "300",
  color: TXT.color,
  marginTop: "13px",
  fontWeightTitle: TXT.h2size,
  textTransform: "uppercase",
  textAlign: "justify",
  fontWeightStrong: "600",
  fontSizeStrong: "14pt",
  photoDetailMargin: "0px 0px 3px 0px",
};

export const WEB_CONSTANTS_DEMO = {
  positionWrapper: "absolute",
  widthWrapper: DIMENSIONS.rightColumnWidth,
  heightWrapper: DIMENSIONS.rightColumnHeight,
  topWrapper: "100vh",
  rightWrapper: "0px",
  positionVideoDiv: "relative",
  topVideoDiv: "50%",
  leftVideoDiv: "50%",
  transformVideoDiv: "translate(-50%, -50%)",
  widthVideoDiv: DIMENSIONS.videoWidth,
  heightVideoDiv: DIMENSIONS.videoHeight,
};

export const PHOTO_CONSTANTS_IMAGE = {
  positionWrapper: "absolute",
  widthWrapper: DIMENSIONS.rightColumnWidth,
  heightWrapper: DIMENSIONS.rightColumnHeight,
  topWrapper: "200vh",
  rightWrapper: WEB_CONSTANTS_DEMO.rightWrapper,
  positionPhotoDiv: WEB_CONSTANTS_DEMO.positionVideoDiv,
  topPhotoDiv: WEB_CONSTANTS_DEMO.topVideoDiv,
  leftPhotoDiv: WEB_CONSTANTS_DEMO.leftVideoDiv,
  transformPhotoDiv: WEB_CONSTANTS_DEMO.transformVideoDiv,
  widthPhotoDiv: DIMENSIONS.imageWidth,
  heightPhotoDiv: DIMENSIONS.imageHeight,
};

export const DESIGN_CONSTANTS_IMAGE = {
  positionWrapper: "absolute",
  widthWrapper: DIMENSIONS.rightColumnWidth,
  heightWrapper: DIMENSIONS.rightColumnHeight,
  topWrapper: "300vh",
  rightWrapper: WEB_CONSTANTS_DEMO.rightWrapper,
  positionDesignDiv: WEB_CONSTANTS_DEMO.positionVideoDiv,
  topDesignDiv: WEB_CONSTANTS_DEMO.topVideoDiv,
  leftDesignDiv: WEB_CONSTANTS_DEMO.leftVideoDiv,
  transformDesignDiv: WEB_CONSTANTS_DEMO.transformVideoDiv,
  widthDesignDiv: DIMENSIONS.imageWidth,
  heightDesignDiv: DIMENSIONS.imageHeight,
};

export const CONTACT_CONSTANTS = {
  positionWrapper: "absolute",
  widthWrapper: DIMENSIONS.rightColumnWidth,
  heightWrapper: DIMENSIONS.rightColumnHeight,
  topWrapper: "400vh",
  rightWrapper: WEB_CONSTANTS_DEMO.rightWrapper,
  formMaxWidth: "50vw",
};

export const NAV_GALLERY_BUTTON = {
  btnBckgColor: "#e2e2e2",
};

export const SLIDE_BTN_STYLE = {
  height: "18px",
  width: "18px",
  color: "black",
  paddingTop: "3px",
};
