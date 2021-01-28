import React, { useState } from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { Props } from "../types";
import BackRoundedButton from "./BackRoundedButton";
import CustomIcon from "./CustomIcon";
import IconsContainer from "./IconsContainer";

type ImageResult = ImagePicker.ImagePickerResult & ImageInfo;

export default function ImagePickerExample({ route, navigation }: Props) {
  const [image, setImage] = useState<ImageResult>();

  const renderIcons = () => {
    return (
      <IconsContainer>
        <CustomIcon
          color="white"
          name="add-a-photo"
          size={24}
          onPress={takePicture}
        />
        <CustomIcon
          color="white"
          name="photo-library"
          size={24}
          onPress={pickImage}
        />

        {image && (
          <CustomIcon
            color="white"
            name="check"
            size={24}
            onPress={() => image && uploadImage(image)}
          />
        )}
      </IconsContainer>
    );
  };

  const renderImage = () => {
    return (
      <View
        style={image ? styles.withImageContainer : styles.withOutImageContainer}
      >
        {image ? (
          <Image
            resizeMode="contain"
            source={{ uri: image.uri }}
            style={{ flex: 1 }}
          />
        ) : (
          <Image
            source={require("../assets/images/splash.png")}
            style={{ width: 300, height: 300 }}
          />
        )}
      </View>
    );
  };

  const uploadImage = (result: any) => {
    let base64Img = `data:image/jpg;base64,${result.base64}`;
    console.log("RESULT NOT CANCELED");
    //Add your cloud name
    let apiUrl = "https://api.cloudinary.com/v1_1/dgayzq8ua/image/upload";

    let data = {
      file: base64Img,
      upload_preset: "hsu1usit"
    };

    fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(async (r) => {
        let data = await r.json();
        console.log(data.secure_url);
      })
      .catch((err) => console.log(err));
  };

  const uploadImageMySql = (result: any) => {
    let base64Img = `data:image/jpg;base64,${result.base64}`;
    console.log("size = " + base64Img.length);
    console.log("RESULT NOT CANCELED");
    //Add your cloud name
    let apiUrl = "http://web.explika.me/news/subir_imagen";
    console.log(apiUrl);
    let data = {
      image: base64Img
    };

    fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(async (r) => {
        let data = await r.json();
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const pickImage = async () => {
    await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    let result = (await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
      base64: true,
      quality: 0.3
    })) as ImageResult;
    setImage(result);
    if (result.cancelled) {
      console.log("RESULT CANCELED");
    }
  };

  const takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    const result = (await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      base64: true,
      quality: 0.3
    })) as ImageResult;
    setImage(result);
    if (result.cancelled) {
      console.log("RESULT CANCELED");
    }
  };

  return (
    <View style={styles.container}>
      {renderImage()}
      {renderIcons()}
      <BackRoundedButton navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  withImageContainer: {
    flex: 1,
    overflow: "hidden"
  },
  withOutImageContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
