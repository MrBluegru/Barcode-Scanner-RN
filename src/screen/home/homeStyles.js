import { StyleSheet } from "react-native";
import {
  darkColor,
  green1Color,
  themeColor,
  whiteColor,
} from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "50%",
    backgroundColor: themeColor,
  },
  lineHorz: {
    borderColor: green1Color,
    borderTopWidth: 0.8,
    top: "50%",
    marginHorizontal: "45%",
  },
  lineVert: {
    flex: 1,
    borderLeftColor: green1Color,
    borderLeftWidth: 0.8,
    height: "100%",
    left: "50%",
    marginTop: "30%",
    marginBottom: "30%",
  },
  iconNotCam: {
    top: 1,
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  scrollV: {
    flex: 1,
    height: "50%",
    backgroundColor: darkColor,
    borderTopWidth: 10,
    borderColor: themeColor,
  },
  textSty: {
    color: whiteColor,
    fontWeight: "700",
    textAlign: "center",
  },
  countScan: {
    backgroundColor: "green",
    textAlign: "center",
    padding: 7,
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 2,
    elevation: 2
  },
  btnsView: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    backgroundColor: themeColor,
    padding: 10,
    alignItems: "center",
  },
  scanbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColor,
  },
});
