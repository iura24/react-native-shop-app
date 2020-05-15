import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "../UI/Card";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.date}>{props.date}</Text>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    flex: 1,
    margin: 15,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 15,
  },
  totalAmount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: "open-sans",
    color: "#888",
  },
  detailItems: {
    width: "100%",
  },
});

export default OrderItem;
