import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants";
import { ProductDetail, Products } from "../screens";

const Stack = createStackNavigator();

function ProductNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.PRODUCTS} component={Products} />
      <Stack.Screen name={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default ProductNavigator;
