import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Material from "react-native-vector-icons/MaterialIcons";
type CustomProps = {
  onPress: () => void;
  name: string;
  color: string;
  size: number;
};

const CustomIcon = ({ name, color, onPress, size }: CustomProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Material style={{ color: color }} name={name} size={size} />
    </TouchableOpacity>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1
  }
});
