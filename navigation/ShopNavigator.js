import React from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, SafeAreaView, Button, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import * as authActions from "../store/shop-actions/auth";
import Colors from "../constants/Colors";

import ProductsNavigator from "./stack_navigators/ProductsNavigator";
import OrdersNavigator from "./stack_navigators/OrdersNavigator";
import AdminNavigator from "./stack_navigators/AdminNavigator";
import PlacesNavigator from "./stack_navigators/PlacesNavigator";
import CartNavigator from "./stack_navigators/CartNavigator";
import IconWithBadge from "../components/UI/IconWithBadge";
import UserNavigator from "./stack_navigators/UserNavigator";

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  const dispatch = useDispatch();
  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Places"
        component={PlacesNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-map" : "ios-map"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};

const ShopTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <ShopTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Shop") {
            iconName = "ios-list";
          } else if (route.name === "Cart") {
            return (
              <IconWithBadge name={"ios-cart"} color={color} size={size} />
            );
          } else if (route.name === "User") {
            iconName = "ios-person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        activeBackgroundColor: "#f2f2f2",
        showLabel: false,
      }}
    >
      <ShopTabNavigator.Screen name="Shop" component={ShopNavigator} />
      <ShopTabNavigator.Screen name="Cart" component={CartNavigator} />
      <ShopTabNavigator.Screen name="User" component={UserNavigator} />
    </ShopTabNavigator.Navigator>
  );
};
