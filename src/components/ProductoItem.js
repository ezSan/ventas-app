import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProductItem = ({ producto, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(producto)} style={styles.item}>
      <Text>{producto.nombre} - ${producto.precio}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductItem;
