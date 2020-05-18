import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrderDetailsItem = (props) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: props.imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.productDetailContainer}>
        <View style={styles.productDetail}>
          <Text style={styles.productTitle}>{props.productTitle}</Text>
          <Text>
            {props.quantity} x ${props.productPrice}
          </Text>
        </View>
        <Text style={{ color: Colors.primary }}>${props.sum}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 15,
  },
  productDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  productTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
});

export default OrderDetailsItem;
