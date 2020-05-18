import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverviewScreen, {
  productsOverviewScreenOptions,
} from "../../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen, {
  productDetailScreenOptions,
} from "../../screens/shop/ProductDetailScreen";
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

const ProductsStackNavigator = createStackNavigator();

export default ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator >
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      {/* <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        // options={}
      /> */}
    </ProductsStackNavigator.Navigator>
  );
};
