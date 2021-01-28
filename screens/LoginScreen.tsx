import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import * as firebase from "firebase";
import { RootStackParamList, Props } from "../types";

const LoginScreen = ({ route, navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function storeHighScore(userId: string, score: number) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        highscore: score
      });
  }

  useEffect(() => {
    firebase
      .database()
      .ref("users/" + "willy")
      .on("value", (snapshot) => {
        const highscore = snapshot.val().highscore;
        console.log("New high score: " + highscore);
      });
  }, [firebase]);

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
        }}
      />
      <View>
        <Input
          containerStyle={styles.input}
          placeholder="Email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          containerStyle={styles.input}
          placeholder="Password"
          autoFocus
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          onPress={() => storeHighScore("willy", 200)}
          containerStyle={styles.button}
          title="Login"
        />
        <Button
          containerStyle={styles.button}
          title="Register"
          type="outline"
          onPress={() => navigation.navigate("CameraView", { userId: "jaja" })}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 200,
    marginTop: 10
  },
  input: {
    width: 200
  }
});
