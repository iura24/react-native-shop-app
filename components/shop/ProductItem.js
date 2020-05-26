import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import * as productsActions from "../../store/shop-actions/products";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const isFavorite = useSelector((state) =>
    state.products.favoriteProducts.some(
      (product) => product.id === props.productId
    )
  );
  const dispatch = useDispatch();

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <TouchableCmp
                onPress={() => {
                  dispatch(productsActions.toggleFavorite(props.productId));
                }}
                style={styles.icon}
              >
                <Ionicons
                  name={
                    isFavorite
                      ? Platform.OS === "android"
                        ? "md-heart"
                        : "ios-heart"
                      : Platform.OS === "android"
                      ? "md-heart-empty"
                      : "ios-heart-empty"
                  }
                  size={28}
                  color="white"
                />
              </TouchableCmp>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "17%",
    padding: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20,
  },
  icon: {
    position: "absolute",
    right: 0,
    zIndex: 100,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductItem;
