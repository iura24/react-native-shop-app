import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { init } from "./helpers/db";
import productsReducer from "./store/shop-reducers/products";
import cartReducer from "./store/shop-reducers/cart";
import ordersReducer from "./store/shop-reducers/orders";
import authReducer from "./store/shop-reducers/auth";
import placesReducer from "./store/places-reducer";
import AppNavigator from "./navigation/AppNavigator";

init()
  .then(() => {})
  .catch((err) => {
    console.log("Initialized db failed");
  });

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </Provider>
  );
}
