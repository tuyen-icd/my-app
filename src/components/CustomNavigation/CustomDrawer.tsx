import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { COLORS, IMGS } from "../../constants";
import { WhiteCamera } from "../../assets/icons";
import { heightPixel, widthPixel } from "../../utils/scanling";
import { pickImageLibrary } from "../../utils/CameraService";
import BottomCamera from "../BottomCamera";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {

  console.log('props', props)
  const [isShowModal, setIsShowModal] = useState(false);
  const [imageState, setImageState] = useState(null);

  const selectImageOptionHandler = async (confirmData) => {
    let image = null;
    if (confirmData === 2) {
      image = await pickImageLibrary();
    }
    if (confirmData === 1) {
      console.log("1111");
    }
    setIsShowModal(false);
    if (image) {
      setImageState(image.assets[0].uri);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }}>
        {/* <Image source={IMGS.user} style={styles.userImg} /> */}

        <View style={{ height: 140, width: 140 }}>
          {/* <Image source={IMGS.user} style={styles.userImg} /> */}
          {imageState ? (
            <Image
              source={{ uri: imageState }}
              style={styles.userImg}
            />
          ) : (
            <Image source={IMGS.user} style={styles.userImg} />
          )}
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setIsShowModal(true)}>
              <WhiteCamera style={{ width: 50, height: heightPixel(50) }} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
      <BottomCamera
        title="Selected Option"
        isShowModal={isShowModal}
        onCancel={() => setIsShowModal(false)}
        onConfirm={(confirmData) => {
          selectImageOptionHandler(confirmData);
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
  iconContainer: {
    width: widthPixel(40),
    height: heightPixel(40),
    position: "absolute",
    backgroundColor: COLORS.primary,
    left: widthPixel(150),
    top: heightPixel(150),
    borderRadius: heightPixel(24),
    alignItems: "center",
    justifyContent: "center",
  },
});
