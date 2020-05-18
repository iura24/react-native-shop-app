import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserProductsScreen, {
  userProductsScreenOptions,
} from "../../screens/user/UserProductsScreen";
import EditProductScreen, {
  editProductScreenOptions,
} from "../../screens/user/EditProductScreen";

const AdminStackNavigator = createStackNavigator();

export default AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator>
      <AdminStackNavigator.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={userProductsScreenOptions}
      />
      <AdminStackNavigator.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={editProductScreenOptions}
      />
    </AdminStackNavigator.Navigator>
  );
};
