import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomCamera from "../../components/BottomCamera";
import { heightPixel, widthPixel } from "../../utils/scanling";
import { pickImageLibrary } from "../../utils/CameraService";
import { Image } from "react-native";

const Notifications = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [imageState, setImageState] = useState([]);

  const selectImageOptionHandler = async (confirmData: number) => {
    let image = null;
    if (confirmData === 2) {
      image = await pickImageLibrary();

      console.log("imageNotification :>> ", image);
    }
    if (confirmData === 1) {
      console.log("1111");
    }
    setIsShowModal(false);
    if (image) {
      setImageState(image);
    }
  };

  const removeImage = (item) => {
    console.log("item", item);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: widthPixel(12),
        paddingTop: heightPixel(50),
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text style={{ textAlign: "center", paddingBottom: heightPixel(50) }}>
        Notifications!
      </Text>
      <ScrollView horizontal={true} style={styles.scrollHorizontal}>
        <TouchableOpacity onPress={() => setIsShowModal(true)}>
          <View style={styles.imageColumn}>
            <Ionicons
              name="camera"
              size={50}
              color={COLORS.primary}
              style={{ alignSelf: "center" }}
            />
          </View>
        </TouchableOpacity>
        {imageState.map((item, index) => {
          return (
            <View key={index}>
              <Image source={{ uri: item?.uri }} style={styles.imageSource} />
              <View style={styles.trashButton}>
                <TouchableOpacity
                  onPress={(item) => {
                    removeImage(item);
                  }}
                >
                  <Ionicons
                    name="trash-outline"
                    size={25}
                    color={COLORS.primary}
                    style={{ alignSelf: "center" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <BottomCamera
        title="Selected Option"
        isShowModal={isShowModal}
        onCancel={() => setIsShowModal(false)}
        onConfirm={(confirmData) => {
          selectImageOptionHandler(confirmData);
        }}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  imageColumn: {
    width: 120,
    height: 120,
    borderRadius: 8,
    borderColor: "rgba(170,170,170,1)",
    borderWidth: 1,
    backgroundColor: "#eee",
    marginRight: 10,
    justifyContent: "center",
  },
  imageSource: {
    width: 120,
    height: 120,
    borderRadius: 8,
    borderColor: "rgba(170,170,170,1)",
    borderWidth: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
  scrollHorizontal: {
    flex: 1,
    flexDirection: "row",
  },
  trashButton: {
    position: "absolute",
    top: 0,
    left: 75,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderTopWidth: 1,
    borderColor: "rgba(170,170,170,1)",
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
  },
});
