import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverviewScreen, {
  productsOverviewScreenOptions,
} from "../../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen, {
  productDetailScreenOptions,
} from "../../screens/shop/ProductDetailScreen";
import { defaultNavOptions } from "../../constants/defaultNavOptions";

const ProductsStackNavigator = createStackNavigator();

export default ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
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
