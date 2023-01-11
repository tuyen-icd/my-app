import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants";
import Spacer from "./Spacer";
import { pixelSizeHorizontal, pixelSizeVertical } from "../utils/scanling";

interface BottomCameraProps {
  title: string;
  isShowModal: boolean;
  onCancel: () => void;
  onConfirm: (value) => void;
}

const BottomCamera: FC<BottomCameraProps> = ({
  title,
  isShowModal,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={isShowModal}
      onSwipeComplete={onCancel}
      swipeDirection={["down"]}
      style={styles.view}
      onBackdropPress={onCancel}
    >
      <View style={[styles.contain]}>
        <View style={[styles.topContain]}>
          <Text
            style={{
              height: 50,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginVertical: pixelSizeVertical(20),
              fontSize: 22,
              fontWeight: "600",
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.rect3}>
              <TouchableOpacity onPress={() => {onConfirm(1)}}>
                <View>
                  <Ionicons name="camera" style={styles.icon1} />
                  <Text style={styles.boxlabel}>Image Library</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Spacer width={20} />

            <View style={styles.rect3}>
              <TouchableOpacity onPress={() => {onConfirm(2)}}>
                <View>
                  <Ionicons name="image" style={styles.icon1} />
                  <Text style={styles.boxlabel}>Take Photo</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomCamera;

const styles = StyleSheet.create({
  contain: {
    marginHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(16),
    width: "100%",
  },
  topContain: {
    borderRadius: 15,
    backgroundColor: COLORS.white,
    marginBottom: pixelSizeVertical(10),
    height: 300,
    width: "100%",
  },
  icon1: {
    color: COLORS.primary,
    fontSize: 40,
    marginTop: 35,
    height: 46,
    width: "100%",
    textAlign: "center",
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
    alignItems: "center",
  },
  boxlabel: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "600",
    width: "100%",
    height: 21,
    textAlign: "center",
    marginTop: 4,
  },
  rect3: {
    width: 142,
    height: 142,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: "dotted",
    borderRadius: 10,
  },
});
