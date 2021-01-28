import React from "react";
import { StyleSheet, Text, View } from "react-native";

type IconsContainerProps = {
  children: any;
};

const IconsContainer = ({ children }: IconsContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default IconsContainer;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "45%",
    backgroundColor: "rgba(34,34,34,1)",
    position: "absolute",
    left: "55%",
    top: "0%",
    flexDirection: "row"
  }
});
