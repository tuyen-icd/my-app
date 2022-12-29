import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import getStoreData from "../../redux/Helpers";
import { PRODUCT_REDUCER } from "../../redux/reducers/ReducerTypes";

const Wallet = () => {
  const { data: dataProduct } = getStoreData(PRODUCT_REDUCER);

  const dataName = dataProduct?.dataProduct[0].name;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
      }}
    >
      <Text>Wallet!</Text>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is SAGA: {dataName} profile</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate("Home")}
        />

        <Button
          title="Go to Login Screen"
          onPress={() => navigation.navigate("Login")}
        />

        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
