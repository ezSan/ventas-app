import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Button } from "react-native";

const ProductoItem = ({ producto, onAdd, onRemove }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleAdd = () => {
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
    onAdd(producto, nuevaCantidad);
  };

  const handleRemove = () => {
    if (cantidad > 0) {
      const nuevaCantidad = cantidad - 1;
      setCantidad(nuevaCantidad);
      onRemove(producto, nuevaCantidad);
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.productInfo}>
        <Text style={styles.text}>{producto.nombre}</Text>
        <Text style={styles.text}>${producto.precio}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="-" onPress={handleRemove} color="#E91E63" />
        <Text style={styles.quantity}>{cantidad}</Text>
        <Button title="+" onPress={handleAdd} color="#3F51B5" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },
  productInfo: {
    flexDirection: "column",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#34495E",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#34495E",
  },
});

export default ProductoItem;
