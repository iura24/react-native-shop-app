import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const TotalOrderPrice = (props) => {
  return (
    <View style={styles.totalContainer}>
      <View style={styles.totalAmount}>
        <Text style={styles.fee}>Total: </Text>
        <Text style={styles.fee}>${props.orderTotalPrice}</Text>
      </View>
      <View style={styles.totalAmount}>
        <Text style={styles.fee}>Delivery: </Text>
        <Text style={styles.fee}>${props.deliveryFee}</Text>
      </View>
      <View style={styles.totalAmount}>
        <Text style={styles.boldTotal}>Total: </Text>
        <Text style={styles.boldTotal}>
          ${props.orderTotalPrice + props.deliveryFee}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    flex: 1,
    height: 100,
    justifyContent: "space-between",
    marginHorizontal: 70,
    marginBottom: 35,
  },
  totalAmount: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fee: {
    fontSize: 15,
    fontFamily: "open-sans",
    color: "#888",
  },
  boldTotal: {
    fontFamily: "open-sans-bold",
    fontSize: 17,
    color: Colors.primary,
  },
});

export default TotalOrderPrice;
