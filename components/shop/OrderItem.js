import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../UI/Card";
import Colors from "../../constants/Colors";

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.date}>{props.date}</Text>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Ionicons
          name={
            Platform.OS === "android" ? "md-arrow-forward" : "ios-arrow-forward"
          }
          size={23}
          color={Colors.primary}
        />
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
