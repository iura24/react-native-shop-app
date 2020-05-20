import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <Card style={styles.card}>
      <Text>{props.title}</Text>
      <Ionicons
        name={
          Platform.OS === "android" ? "md-arrow-forward" : "ios-arrow-forward"
        }
        size={23}
        color={Colors.primary}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    marginBottom: 10,
  },
});

export default UserItem;
