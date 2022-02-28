import { Platform } from "react-native";
import { wp } from "../Helpers/Responsiveness";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: wp(4),
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
