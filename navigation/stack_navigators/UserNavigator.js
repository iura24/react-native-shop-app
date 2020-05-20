import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { defaultNavOptions } from "../../constants/defaultNavOptions";
import UserScreen, { userScreenOptions } from "../../screens/user/UserScreen";
import OrdersScreen, {
  ordersScreenOptions,
} from "../../screens/shop/OrdersScreen";
import OrdersNavigator from "./OrdersNavigator";
import OrderDetailScreen from "../../screens/shop/OrderDetailScreen";

const UserStackNavigator = createStackNavigator();

export default UserNavigator = () => {
  return (
    <UserStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <UserStackNavigator.Screen
        name="UserProfile"
        component={UserScreen}
        options={userScreenOptions}
      />
      <UserStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
      <UserStackNavigator.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={ordersScreenOptions}
      />
      <UserStackNavigator.Screen
        name="Logout"
        component={OrderDetailScreen}
        options={ordersScreenOptions}
      />
    </UserStackNavigator.Navigator>
  );
};
