import React, { useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

const HistorialScreen = () => {
  const { state } = useContext(AppContext);
  const { historialPedidos } = state;

  const renderItem = ({ item }) => (
    <View style={styles.pedido}>
      <Text style={styles.cliente}>{item.cliente.nombre}</Text>
      <Text style={styles.invoiceType}>{item.invoiceType}</Text>
      <FlatList
        data={Object.values(item.pedido)}
        keyExtractor={(producto) => producto.id.toString()}
        renderItem={({ item: producto }) => (
          <Text style={styles.producto}>
            {producto.nombre} - {producto.cantidad} - $
            {producto.precio * producto.cantidad}
          </Text>
        )}
      />
      <Text style={styles.total}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={historialPedidos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  pedido: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  cliente: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  invoiceType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
    marginBottom: 8,
  },
  producto: {
    fontSize: 16,
    marginBottom: 4,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default HistorialScreen;
