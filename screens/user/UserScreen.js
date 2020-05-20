import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import * as authActions from "../../store/shop-actions/auth";
import UserItem from "../../components/shop/UserItem";

const UserScreen = (props) => {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.screen}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri:
              "https://assets.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg",
          }}
          resizeMode="center"
        />
        <Image
          style={styles.image}
          source={{
            uri:
              "https://assets.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg",
          }}
          resizeMode="center"
        />
      </View>
      <View >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Orders");
          }}
        >
          <UserItem title="My orders" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(authActions.logout());
          }}
        >
          <UserItem title="Sign out" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const userScreenOptions = {
  headerTitle: "My Profile",
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 300,
    margin: 0,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    position: "absolute",
    top: 100,
  },
  backgroundImage: {
    width: "100%",
    height: 170,
  },
});

export default UserScreen;
