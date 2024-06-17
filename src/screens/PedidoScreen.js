import React, { useContext, useState } from "react";
import { View, FlatList, Text, Button, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { AppContext } from "../context/AppContext";
import { fixResult } from "../utils/numberUtils";

const PedidoScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);
  const { cliente, pedidoActual } = state;
  const { pedido, total } = pedidoActual;
  const [invoiceType, setInvoiceType] = useState("FACTURA");

  const confirmarPedido = () => {
    dispatch({
      type: "CONFIRMAR_PEDIDO",
      payload: { invoiceType },
    });
    navigation.navigate("Historial");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(pedido)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.producto}>
            <Text>
              {item.nombre} - {item.cantidad} x ${item.precio.toFixed(2)}
            </Text>
            <Text>Subtotal: ${fixResult(item.precio * item.cantidad)}</Text>
          </View>
        )}
      />
      <View style={styles.radioContainer}>
        <Text>Seleccione tipo de documento:</Text>
        <View style={styles.radioGroup}>
          <RadioButton
            value="FACTURA"
            status={invoiceType === "FACTURA" ? "checked" : "unchecked"}
            onPress={() => setInvoiceType("FACTURA")}
          />
          <Text style={styles.radioLabel}>FACTURA</Text>
        </View>
        <View style={styles.radioGroup}>
          <RadioButton
            value="REMITO"
            status={invoiceType === "REMITO" ? "checked" : "unchecked"}
            onPress={() => setInvoiceType("REMITO")}
          />
          <Text style={styles.radioLabel}>REMITO</Text>
        </View>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${fixResult(total)}</Text>
        <Button title="CONFIRMAR PEDIDO" onPress={confirmarPedido} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  producto: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  radioContainer: {
    marginVertical: 16,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  radioLabel: {
    marginLeft: 8,
  },
  totalContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PedidoScreen;
