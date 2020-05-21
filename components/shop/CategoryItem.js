import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../UI/Card";
import Colors from "../../constants/Colors";

const CategoryItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <Card style={styles.card}>
        <Text>{props.category}</Text>
        <Ionicons
          name={
            Platform.OS === "android" ? "md-arrow-forward" : "ios-arrow-forward"
          }
          size={23}
          color={Colors.primary}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CategoryItem;
