import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Props } from "../types";

const BackRoundedButton = ({ navigation, route }: Props) => {
  return (
    <TouchableOpacity
      style={styles.backRoundedButton}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name={"back"} size={20} color={"white"} />
    </TouchableOpacity>
  );
};

export default BackRoundedButton;

const styles = StyleSheet.create({
  backRoundedButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#333",
    position: "absolute",
    left: 20,
    top: "100%",
    marginTop: -60,
    justifyContent: "center",
    alignItems: "center"
  }
});
