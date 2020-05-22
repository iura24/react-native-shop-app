import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";

const FavoriteProductsScreen = (props) => {
  const favoriteProducts = useSelector(
    (state) => state.products.favoriteProducts
  );

  if (favoriteProducts.length === 0 || !favoriteProducts) {
    return (
      <View style={styles.content}>
        <Text>No favorite products found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteProducts}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
          onFavToggle={() => {}}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteProductsScreen;
