import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import OrderDetailsItem from "../../components/shop/OrderDetailsItem";
import TotalOrderPrice from "../../components/UI/TotalOrderPrice";
import * as ordersAction from "../../store/shop-actions/orders";

const OrderDetailScreen = (props) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  const orderId = props.route.params.orderId;
  const orderTitle = props.route.params.orderTitle;

  const userOrders = orders.filter((order) => order.id === orderId);
  const cartItems = userOrders.map((item) => item.items).flat();
  const orderTotalPrice = parseFloat(
    userOrders.map((item) => item.totalAmount)
  );
  const deliveryFee = parseFloat(25);


  const deleteOrderHandler = (orderId) => {
    Alert.alert(`Delete order #${orderTitle}`, "Are you sure?", [
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(ordersAction.deleteOrder(orderId));
          props.navigation.goBack();
        },
      },
      { text: "No", style: "cancel" },
    ]);
  };

  const listFooterTotalAmount = () => {
    return (
      <View>
        <View style={styles.divider} />
        <TotalOrderPrice
          orderTotalPrice={orderTotalPrice}
          deliveryFee={deliveryFee}
        />
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Order #{orderTitle}</Text>
          <Text style={styles.subHeaderText}>
            <Text style={{ color: Colors.primary }}>Ordered</Text>{" "}
            {userOrders.map((order) => order.readableDate)}
          </Text>
        </View>
        <TouchableOpacity onPress={deleteOrderHandler.bind(this, orderId)}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={35}
            color={Colors.primary}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        ListFooterComponent={listFooterTotalAmount}
        renderItem={(itemData) => (
          <OrderDetailsItem
            productTitle={itemData.item.productTitle}
            quantity={itemData.item.quantity}
            productPrice={itemData.item.productPrice}
            sum={itemData.item.sum}
            imageUrl={itemData.item.imageUrl}
          />
        )}
      />
    </View>
  );
};

export const orderDetailScreenOptions = (navData) => {
  return {
    headerTitle: `Order #${navData.route.params.orderTitle}`,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back"
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
  screen: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  headerText: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
  },
  subHeaderText: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 25,
    // marginHorizontal: 30,
  },
  //   icon: {
  //     alignSelf: "flex-end",
  //     justifyContent: "center",
  //     alignContent: "center",
  //     alignItems: "center",
  //   },
});

export default OrderDetailScreen;
