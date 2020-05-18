import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartScreen from "../../screens/shop/CartScreen";
import Colors from "../../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const CartStackNavigator = createStackNavigator();

export default CartNavigator = () => {
  return (
    <CartStackNavigator.Navigator>
      <CartStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        // options={}
      />
    </CartStackNavigator.Navigator>
  );
};
