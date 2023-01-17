import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, ROUTES } from "../../constants";
import BottomCamera from "../../components/BottomCamera";
import pickImage from "../../services.tsx/ImagePickerService";

interface dataObject {
  assets?: dataAssets;
  canceled: boolean;
}

interface dataAssets {
  assetId: string;
  fileName: string;
  type: string;
  uri: string;
}

const Settings = () => {
  const navigation = useNavigation();

  const [imageState, setImageState] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  const selectImageOptionHandler = async (confirmData: number) => {
    let imageTemp = null;
    try {
      const data = await pickImage(confirmData);

      const test = data?.assets[0];

      console.log("data :>> ", data);
    } catch (error) {
      console.log("error", error);
    }

    setIsShowModal(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Settings</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAIL as never)}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Go To Settings Detail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIsShowModal(true);
        }}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Change Take Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.LOGIN as never)}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>

      <BottomCamera
        title="Selected Option"
        isShowModal={isShowModal}
        onCancel={() => setIsShowModal(false)}
        onConfirm={(confirmData) => {
          selectImageOptionHandler(confirmData);
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
