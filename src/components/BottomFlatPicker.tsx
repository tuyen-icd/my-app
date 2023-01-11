import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import Button from "./Button/Button";
import Modal from "react-native-modal";

interface BottomFlatPickerProps {
  title?: string;
  data?: string[];
  defaultValue?: string;
  isVisible?: boolean;
  onCancel?: () => void;
  onConfim?: (value) => void;
}

const BottomFlatPicker: FC<BottomFlatPickerProps> = ({
  title,
  data,
  defaultValue,
  isVisible,
  onConfim,
  onCancel,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View>
        <View>
          <Text>{title}</Text>
        </View>
        {data.map((value, i) => (
          <TouchableOpacity>
            <View>
              <Text>{value}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Button text="Close" buttonSize="Medium" onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default BottomFlatPicker;

const styles = StyleSheet.create({});
