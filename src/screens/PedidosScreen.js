import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fixResult } from "../utils/numberUtils";
import PedidoTotal from "../components/PedidoTotal";

const PedidoScreen = ({ route }) => {
  const { pedido, total } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(pedido)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {item.nombre} - {item.cantidad} x ${item.precio.toFixed(2)}
            </Text>
            <Text style={styles.text}>
              Subtotal: ${fixResult(item.precio * item.cantidad)}
            </Text>
          </View>
        )}
      />
      <PedidoTotal total={total} />
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
  text: {
    fontSize: 16,
  },
});

export default PedidoScreen;
