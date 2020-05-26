import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import CategoryItem from "../../components/shop/CategoryItem";
import { productCategory } from "../../data/productCategory";
import { useSelector } from "react-redux";

const ProductsCategoryScreen = (props) => {

  const selectCategoryHandler = (id, category) => {
    props.navigation.navigate("ProductsOverview", {
      categoryId: id,
      category: category,
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={productCategory}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            onSelect={() => {
              selectCategoryHandler(item.id, item.category);
            }}
            category={item.category}
          />
        )}
      />
    </View>
  );
};

export const productsCategoryScreenOptions = {
  headerTitle: "Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ProductsCategoryScreen;
