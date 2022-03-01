import { Dimensions, Platform, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");

export const wp = (p) => width * (p / 100);
export const hp = (p) => height * (p / 100);

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

{
  /*
    const scale = width / 320;
    
    export function normalize(size) {
        const newSize = size * scale;
        if (Platform.OS === "ios") {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
    }
    
*/
}
