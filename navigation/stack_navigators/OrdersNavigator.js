import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrdersScreen, {
  ordersScreenOptions,
} from "../../screens/shop/OrdersScreen";
import OrderDetailScreen, {
  orderDetailScreenOptions,
} from "../../screens/shop/OrderDetailScreen";
import { defaultNavOptions } from "../../constants/defaultNavOptions";

const OrdersStackNavigator = createStackNavigator();

export default OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
      <OrdersStackNavigator.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={orderDetailScreenOptions}
      />
    </OrdersStackNavigator.Navigator>
  );
};
