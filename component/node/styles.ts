import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 15,
    shadowColor: Platform.OS === "android" ? "rgba(0,0,0,0.4)" : "#000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.03,
    borderCurve: "continuous",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    height: 30,
    width: 30,
    borderCurve: "continuous",
    borderRadius: 20,
  },

  userName: {
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  vstack: {
    gap: 4,
    marginStart: 10,
  },
  chevRon: {
    padding: 5,
    backgroundColor: "lightgreen",
    borderRadius: 20,
    borderCurve: "continuous",
  },
  arrow: {
    marginStart: 100,
    borderWidth: 1,
    width: 40,
    borderRightWidth: 0,
    borderTopWidth: 0,
    height: 50,
    borderCurve: "continuous",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: "red",
  },
});

export default styles;
