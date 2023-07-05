import { Dimensions } from "react-native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size: number) => width / guidelineBaseWidth * size;
export const verticalScale = (size: number) => height / guidelineBaseHeight * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;



