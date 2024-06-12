import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const ItemScreen = ({ route }) => {
  const { pedido } = route.params;

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default PedidosScreen;
