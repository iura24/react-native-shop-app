import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";
import * as ordersActions from "../../store/shop-actions/orders";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrdersScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(ordersActions.fetchOrders()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("OrderDetail", {
      orderId: id,
      orderTitle: id.substr(1, 8).toLowerCase(),
    });
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No order found, maybe start ordering some products?</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <TouchableOpacity
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          >
            <OrderItem
              amount={itemData.item.totalAmount}
              date={itemData.item.readableDate}
              items={itemData.item.items}
              navigation={props.navigation}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const ordersScreenOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={
            Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
          }
          onPress={() => navData.navigation.goBack()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrdersScreen;
