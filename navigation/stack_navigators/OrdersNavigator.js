import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrdersScreen, {
  ordersScreenOptions,
} from "../../screens/shop/OrdersScreen";
import OrderDetailScreen, {
  orderDetailScreenOptions,
} from "../../screens/shop/OrderDetailScreen";

const OrdersStackNavigator = createStackNavigator();

export default OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator>
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
