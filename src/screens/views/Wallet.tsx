import { Button, StyleSheet, Text, View } from "react-native";
import React, { FC, useEffect, useLayoutEffect } from "react";
import { COLORS, ROUTES } from "../../constants";
import { PRODUCT_REDUCER } from "../../redux/reducers/ReducerTypes";
import { useNavigation } from "@react-navigation/native";
import getStoreData from "../../redux/Helpers";
import Credentials from "../../repos/local/Credentials";
import axios from "axios";

const Wallet: FC = () => {
  const navigation = useNavigation();
  const { data: dataProduct } = getStoreData(PRODUCT_REDUCER);
  const dataName = dataProduct?.dataProduct[0]?.name;

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
          onPress={() => navigation.navigate(ROUTES.HOME_TAB as never)}
        />

        <Button
          title="Go to Login Screen"
          onPress={() => navigation.navigate(ROUTES.LOGIN as never)}
        />

        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
