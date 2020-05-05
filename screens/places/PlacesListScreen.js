import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../../components/UI/HeaderButton";
import PlaceItem from "../../components/places/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeIt: itemData.item.id,
            });
          }}
          image={"asdsa"}
          title={itemData.item.title}
          address={""}
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => navData.navigation.navigate("NewPlace")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
