import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartScreen from "../../screens/shop/CartScreen";
import { defaultNavOptions } from "../../constants/defaultNavOptions";

const CartStackNavigator = createStackNavigator();

export default CartNavigator = () => {
  return (
    <CartStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CartStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        // options={}
      />
    </CartStackNavigator.Navigator>
  );
};
