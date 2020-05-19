import React, { Component } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

function IconWithBadge({ name, color, size }) {
  const totalItemsBadge = useSelector((state) => state.cart.totalItems);
  return (
    <View style={{ width: 25, height: 25, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {totalItemsBadge > 0 && (
        <View
          style={{
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: Colors.accent,
            borderRadius: 10,
            width: 15,
            height: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 10,
              fontFamily: "open-sans-bold",
              textAlign: "center",
            }}
          >
            {totalItemsBadge}
          </Text>
        </View>
      )}
    </View>
  );
}

export default IconWithBadge;
